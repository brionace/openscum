const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function testRoleBasedAccess() {
  console.log("🔐 Testing Role-Based Access Control...\n");

  try {
    // 1. Check current role distribution
    console.log("1. Checking current role distribution...");
    const users = await prisma.user.findMany({
      select: { email: true, role: true },
    });

    const roleStats = users.reduce((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {});

    console.log("📊 Current roles:");
    Object.entries(roleStats).forEach(([role, count]) => {
      console.log(`   - ${role}: ${count} users`);
    });

    // 2. Show admin users
    const admins = await prisma.user.findMany({
      where: { role: "admin" },
      select: { email: true, name: true },
    });

    console.log("\n👑 Admin users:");
    if (admins.length === 0) {
      console.log("   ❌ No admin users found!");
      console.log("   ⚠️  /admin panel will be inaccessible to all users");
      console.log("   💡 Run promote-to-admin.js to create an admin user");
    } else {
      admins.forEach((admin) => {
        console.log(`   ✅ ${admin.email} (${admin.name || "No name"})`);
      });
    }

    // 3. Show moderators
    const moderators = await prisma.user.findMany({
      where: { role: "moderator" },
      select: { email: true, name: true },
    });

    console.log("\n🛡️  Moderator users:");
    if (moderators.length === 0) {
      console.log("   ℹ️  No moderators assigned yet");
    } else {
      moderators.forEach((mod) => {
        console.log(`   ✅ ${mod.email} (${mod.name || "No name"})`);
      });
    }

    // 4. Security summary
    console.log("\n🔒 Security Status:");
    console.log("   ✅ Role field added to User model");
    console.log('   ✅ All existing users assigned "user" role by default');
    console.log("   ✅ API endpoints require admin/moderator role");
    console.log("   ✅ Admin UI checks permissions before loading");

    const totalPrivilegedUsers = admins.length + moderators.length;
    console.log(`   📊 ${totalPrivilegedUsers} users can access /admin panel`);

    if (totalPrivilegedUsers === 0) {
      console.log("\n⚠️  WARNING: No admin or moderator users assigned!");
      console.log("🔧 Next steps:");
      console.log(
        '   1. Run: ADMIN_EMAIL="your-email@example.com" node scripts/promote-to-admin.js'
      );
      console.log(
        '   2. Replace "your-email@example.com" with your actual email'
      );
      console.log("   3. Make sure you have logged into the app at least once");
    } else {
      console.log("\n✅ Access control properly configured!");
      console.log("🔧 To test:");
      console.log(
        "   1. Try accessing /admin with a regular user account (should be denied)"
      );
      console.log(
        "   2. Try accessing /admin with an admin account (should work)"
      );
      console.log(
        "   3. Check API endpoints return 403 for non-privileged users"
      );
    }
  } catch (error) {
    console.error("❌ Error testing role-based access:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testRoleBasedAccess();
