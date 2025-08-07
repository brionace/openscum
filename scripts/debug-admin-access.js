const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function debugAdminAccess() {
  console.log("🔍 Debugging admin access issue...\n");

  try {
    // Check the user in database
    const dbUser = await prisma.user.findUnique({
      where: { email: "brionace@gmail.com" },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        name: true,
        createdAt: true,
      },
    });

    if (dbUser) {
      console.log("✅ User found in database:");
      console.log(`   Email: ${dbUser.email}`);
      console.log(`   Role: ${dbUser.role}`);
      console.log(`   Username: ${dbUser.username}`);
      console.log(`   Name: ${dbUser.name || "Not set"}`);
      console.log(`   DB ID: ${dbUser.id}`);
      console.log(`   Created: ${dbUser.createdAt}`);

      if (dbUser.role === "admin") {
        console.log("\n✅ User has admin role in database");
        console.log("🔍 Issue is likely with Supabase auth token validation");
      } else {
        console.log(`\n❌ User role is "${dbUser.role}" but should be "admin"`);
        console.log("🔧 Promoting user to admin...");

        await prisma.user.update({
          where: { email: "brionace@gmail.com" },
          data: { role: "admin" },
        });

        console.log("✅ User promoted to admin");
      }
    } else {
      console.log("❌ User not found in database");
      console.log("🔧 This should not happen - user was created earlier");
    }

    // Check all users for comparison
    console.log("\n📊 All users in database:");
    const allUsers = await prisma.user.findMany({
      select: { email: true, role: true, username: true },
    });

    allUsers.forEach((user) => {
      console.log(`   - ${user.email} (${user.username}) - Role: ${user.role}`);
    });
  } catch (error) {
    console.error("❌ Error debugging admin access:", error);
  } finally {
    await prisma.$disconnect();
  }
}

debugAdminAccess();
