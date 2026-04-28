import bcrypt from "bcrypt";
import { prisma } from "./prisma.js";

const admins = [
  { first_name: "Rania",  last_name: "Waleed",  email: "raniawaleed@admin.com",  phone: "0792234567", password: "123456" },
  { first_name: "Eman",   last_name: "Ahmad",   email: "emanahmad@admin.com",    phone: "0791695374", password: "123456" },
  { first_name: "Batool", last_name: "Hussain", email: "batoolhussain@admin.com", phone: "0793234567", password: "123456" },
];

async function main() {
  console.log("🌱 Creating admins...");

  for (const admin of admins) {
    const existing = await prisma.admins.findUnique({ where: { email: admin.email } });
    if (existing) {
      console.log(`⚠️  Already exists: ${admin.email}`);
      continue;
    }

    const hashedPassword = await bcrypt.hash(admin.password, 10);
    await prisma.admins.create({
      data: {
        first_name: admin.first_name,
        last_name: admin.last_name,
        email: admin.email,
        phone: admin.phone,
        password: hashedPassword,
        created_at: new Date(),
      },
    });
    console.log(`✅ Created: ${admin.email}`);
  }

  console.log("\n🎉 Done!");
}

main()
  .catch((e) => { console.error("❌ Error:", e.message); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });