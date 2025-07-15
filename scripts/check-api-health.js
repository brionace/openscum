const { spawn } = require("child_process");
const { setTimeout } = require("timers/promises");

async function checkAPIHealth() {
  console.log("🔍 Checking API health...");

  let server;

  try {
    // Start the Next.js server in background
    server = spawn("pnpm", ["dev"], {
      stdio: "pipe",
      env: { ...process.env, NODE_ENV: "test", PORT: "3333" },
      detached: false,
    });

    let serverReady = false;

    // Listen for server output to know when it's ready
    server.stdout.on("data", (data) => {
      const output = data.toString();
      if (output.includes("Ready in") || output.includes("Local:")) {
        serverReady = true;
      }
    });

    // Wait for server to start (max 30 seconds)
    let attempts = 0;
    while (!serverReady && attempts < 30) {
      await setTimeout(1000);
      attempts++;
    }

    if (!serverReady) {
      throw new Error("Server failed to start within 30 seconds");
    }

    console.log("🚀 Development server started");

    // Wait a bit more for full initialization
    await setTimeout(2000);

    // Test critical API endpoints
    const endpoints = [
      "http://localhost:3333/api/reports",
      "http://localhost:3333/api/scam-types",
      "http://localhost:3333/api/trends",
      "http://localhost:3333/api/stats",
    ];

    for (const endpoint of endpoints) {
      try {
        console.log(`Testing ${endpoint}...`);

        // Use fetch with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(endpoint, {
          signal: controller.signal,
          headers: { "User-Agent": "API-Health-Check" },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        if (!data.success) {
          throw new Error(
            `API returned success=false: ${data.error || "Unknown error"}`
          );
        }

        console.log(`✅ ${endpoint} - OK`);
      } catch (error) {
        console.error(`❌ ${endpoint} - FAILED:`, error.message);
        throw error;
      }
    }

    console.log("🎉 All API endpoints healthy!");
  } catch (error) {
    console.error("❌ API health check failed:", error.message);
    process.exit(1);
  } finally {
    if (server && !server.killed) {
      console.log("🛑 Stopping development server...");

      // Kill the server process and its children
      if (process.platform === "win32") {
        spawn("taskkill", ["/pid", server.pid, "/f", "/t"]);
      } else {
        process.kill(-server.pid, "SIGTERM");
      }

      // Wait a bit for graceful shutdown
      await setTimeout(2000);
    }
  }
}

// Only run if called directly
if (require.main === module) {
  checkAPIHealth().catch(console.error);
}

module.exports = { checkAPIHealth };
