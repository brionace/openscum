const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function promoteToAdmin() {
  console.log("👑 Setting up admin access...\n");

  try {
    // You'll need to replace this with your actual email address
    const adminEmail = process.env.ADMIN_EMAIL || "your-email@example.com";

    console.log(`Looking for user with email: ${adminEmail}`);

    // Find and update the user
    const user = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (!user) {
      console.log("❌ User not found. Please ensure:");
      console.log("   1. You have logged into the app at least once");
      console.log("   2. Your email is correct in the script");
      console.log("\nTo set admin email, run:");
      console.log(
        `   ADMIN_EMAIL="your-email@example.com" node scripts/promote-to-admin.js`
      );
      return;
    }

    // Update to admin role
    const updatedUser = await prisma.user.update({
      where: { email: adminEmail },
      data: { role: "admin" },
    });

    console.log(`✅ Successfully promoted ${updatedUser.email} to admin role!`);
    console.log(`✅ User ID: ${updatedUser.id}`);
    console.log("✅ Admin access granted for /admin panel");

    // Show current admin users
    const admins = await prisma.user.findMany({
      where: { role: "admin" },
      select: { email: true, name: true, createdAt: true },
    });

    console.log("\n👑 Current admins:");
    admins.forEach((admin) => {
      console.log(`   - ${admin.email} (${admin.name || "No name set"})`);
    });
  } catch (error) {
    console.error("❌ Error promoting user to admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

promoteToAdmin();
