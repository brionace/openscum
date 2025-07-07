// scripts/ai-batch-cron.js
const fetch = require("node-fetch");

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function runBatch() {
  try {
    const res = await fetch(`${BASE_URL}/api/ai-batch-process`, {
      method: "POST",
    });
    const data = await res.json();
    console.log(`[AI Batch] Processed: ${data.processed || 0}`);
  } catch (e) {
    console.error("[AI Batch] Error:", e);
  }
}

runBatch();
