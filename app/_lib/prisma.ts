//Create a prisma.ts file to manage the Prisma client instance
//Ensure that you are not re-initializing PrismaClient every time 
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;