import { PrismaClient } from "@prisma/client";


let prismadb: PrismaClient


if (process.env.NODE_ENV === "production") {
    prismadb = new PrismaClient();
  } else {
    let globalWithPrisma = global as typeof globalThis & {
      prismadb: PrismaClient;
    };
    if (!globalWithPrisma.prismadb) {
      globalWithPrisma.prismadb = new PrismaClient();
    }
    prismadb = globalWithPrisma.prismadb;
  }
  

  export default prismadb