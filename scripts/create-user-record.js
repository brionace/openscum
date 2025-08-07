const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUserRecord() {
  console.log("👤 Creating user record for authentication...\n");

  try {
    const userEmail = process.env.ADMIN_EMAIL || "brionace@gmail.com";
    const username = userEmail.split("@")[0]; // Use email prefix as username

    console.log(`Creating user record for: ${userEmail}`);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (existingUser) {
      console.log("✅ User already exists in database");
      console.log(`   Email: ${existingUser.email}`);
      console.log(`   Username: ${existingUser.username}`);
      console.log(`   Role: ${existingUser.role}`);
      console.log(`   ID: ${existingUser.id}`);

      if (existingUser.role === "admin") {
        console.log("\n🎉 User is already an admin!");
        console.log("✅ You can now access /admin panel");
      } else {
        console.log(
          "\n📝 Next step: Run promote-to-admin.js to make this user an admin"
        );
      }
      return;
    }

    // Create new user record
    const newUser = await prisma.user.create({
      data: {
        email: userEmail,
        username: username,
        name: null, // Will be filled when user logs in
        image: null,
        role: "user", // Default role
      },
    });

    console.log("✅ Successfully created user record!");
    console.log(`   Email: ${newUser.email}`);
    console.log(`   Username: ${newUser.username}`);
    console.log(`   Role: ${newUser.role}`);
    console.log(`   ID: ${newUser.id}`);

    console.log("\n🎉 User record created successfully!");
    console.log("📝 Next steps:");
    console.log("   1. Run: node scripts/promote-to-admin.js");
    console.log("   2. This will promote the user to admin role");
    console.log("   3. You can then access /admin panel");
  } catch (error) {
    if (error.code === "P2002") {
      // Check which field is conflicting
      if (error.meta && error.meta.target) {
        const conflictField = error.meta.target[0];
        console.log(`❌ Conflict: ${conflictField} already exists`);

        if (conflictField === "username") {
          console.log("💡 Trying with a unique username...");

          // Try with a unique username
          const uniqueUsername = `${username}_${Date.now()}`;
          const newUser = await prisma.user.create({
            data: {
              email: userEmail,
              username: uniqueUsername,
              name: null,
              image: null,
              role: "user",
            },
          });

          console.log("✅ Created user with unique username!");
          console.log(`   Email: ${newUser.email}`);
          console.log(`   Username: ${newUser.username}`);
          console.log(`   Role: ${newUser.role}`);
        }
      } else {
        console.log("❌ User with this email or username already exists");
      }
    } else {
      console.error("❌ Error creating user:", error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

createUserRecord();
