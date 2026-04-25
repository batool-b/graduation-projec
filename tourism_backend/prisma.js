import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",           
  database: "tourism_db",
  connectionLimit: 10,
});

const prisma = new PrismaClient({ adapter });

export { prisma };