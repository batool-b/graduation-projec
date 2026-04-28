import bcrypt from "bcrypt";
import { prisma } from "./prisma.js";

async function main() {
  const hashed = await bcrypt.hash("123456", 10);

  await prisma.admins.updateMany({
    data: { password: hashed },
  });

  console.log("✅ All admin passwords updated!");
  await prisma.$disconnect();
}

main().catch(console.error);