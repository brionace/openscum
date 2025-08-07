const { PrismaClient } = require("@prisma/client");
const { createClient } = require("@supabase/supabase-js");

const prisma = new PrismaClient();

// Create Supabase admin client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // You'll need this
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function syncSupabaseUsers() {
  console.log("🔄 Syncing Supabase users with User table...\n");

  try {
    // Method 1: Create user manually if you know your details
    const manualEmail = process.env.ADMIN_EMAIL || "brionace@gmail.com";
    const manualUsername = manualEmail.split("@")[0]; // Use email prefix as username

    console.log(`Creating user record for: ${manualEmail}`);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: manualEmail },
    });

    if (existingUser) {
      console.log("✅ User already exists in database");
      console.log(`   Email: ${existingUser.email}`);
      console.log(`   Role: ${existingUser.role}`);
      console.log(`   ID: ${existingUser.id}`);
      return;
    }

    // Create new user record
    const newUser = await prisma.user.create({
      data: {
        email: manualEmail,
        username: manualUsername,
        name: null, // Will be filled when user logs in
        image: null,
        role: "user", // Will be promoted to admin next
      },
    });

    console.log("✅ Successfully created user record!");
    console.log(`   Email: ${newUser.email}`);
    console.log(`   Username: ${newUser.username}`);
    console.log(`   Role: ${newUser.role}`);
    console.log(`   ID: ${newUser.id}`);

    console.log("\n🎉 User created successfully!");
    console.log("📝 Next steps:");
    console.log("   1. Run: node scripts/promote-to-admin.js");
    console.log("   2. This will promote the user to admin role");
    console.log("   3. You can then access /admin panel");
  } catch (error) {
    if (error.code === "P2002") {
      console.log("❌ User with this email or username already exists");
      console.log("   Checking existing users...");

      const users = await prisma.user.findMany({
        select: { email: true, username: true, role: true },
      });

      console.log("\n👥 Current users:");
      users.forEach((user) => {
        console.log(
          `   - ${user.email} (${user.username}) - Role: ${user.role}`
        );
      });
    } else {
      console.error("❌ Error creating user:", error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

syncSupabaseUsers();
