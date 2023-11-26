import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.admin.createMany({
    data: [
      {
        email: "edi@mail.com",
        name: "edi",
      },
      {
        email: "wanazmi@mail.com",
        name: "wanazmi",
      },
    ],
  });

  await prisma.templateUndangan.createMany({
    data: [
      {
        nama: "minimalist",
        adminId: 1,
      },
      {
        nama: "simple-flower",
        adminId: 2,
      },
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        email: "malik@mail.com",
        name: "malik",
        nama_pria: "Malik",
        nama_ayah_pria: "Nama ayah",
        nama_ibu_pria: "nama ibu",

        nama_wanita: "Kilam",
        nama_ayah_wanita: "Nama ayah",
        nama_ibu_wanita: "Nama ibu",
        templateId: 1,
      },
      {
        email: "nasir@mail.com",
        name: "nasir",
        nama_pria: "Nasir, S.Si.",
        nama_ayah_pria: "Gunawan",
        nama_ibu_pria: "Wa Ode Tila",

        nama_wanita: "Nurlina",
        nama_ayah_wanita: "Ronaldo",
        nama_ibu_wanita: "Berliani",
        templateId: 2,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
