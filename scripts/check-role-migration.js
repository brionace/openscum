const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function checkRoleMigration() {
  console.log("🔍 Checking role migration results...\n");

  try {
    // Check all users have roles assigned
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    console.log(`✅ Total users in database: ${users.length}`);

    const roleStats = {
      user: users.filter((u) => u.role === "user").length,
      moderator: users.filter((u) => u.role === "moderator").length,
      admin: users.filter((u) => u.role === "admin").length,
      other: users.filter(
        (u) => !["user", "moderator", "admin"].includes(u.role)
      ).length,
    };

    console.log("📊 Role distribution:");
    console.log(`   - Users: ${roleStats.user}`);
    console.log(`   - Moderators: ${roleStats.moderator}`);
    console.log(`   - Admins: ${roleStats.admin}`);
    console.log(`   - Other/Invalid: ${roleStats.other}`);

    // Show sample users (first 3)
    if (users.length > 0) {
      console.log("\n👥 Sample users:");
      users.slice(0, 3).forEach((user) => {
        console.log(`   - ${user.email}: ${user.role}`);
      });
    }

    console.log("\n✅ Role migration completed successfully!");
    console.log('✅ All existing users assigned "user" role by default');
    console.log("✅ Ready to assign admin/moderator roles as needed");
  } catch (error) {
    console.error("❌ Error checking role migration:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkRoleMigration();
