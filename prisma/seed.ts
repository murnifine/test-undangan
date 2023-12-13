import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const edi = await prisma.user.create({
    data: {
      email: "edi@mail.com",
      name: "edi",
      role: "admin",
    },
  });
  const wanazmi = await prisma.user.create({
    data: {
      email: "wanazmi@mail.com",
      name: "wanazmi",
      role: "admin",
    },
  });

  await prisma.templateUndangan.createMany({
    data: [
      {
        nama: "minimalist",
        userId: edi.id,
      },
      {
        nama: "simple-flower",
        userId: wanazmi.id,
      },
    ],
  });

  const nasir = await prisma.user.create({
    data: {
      email: "nasir@mail.com",
      name: "nasir",
    },
  });

  await prisma.profile.createMany({
    data: [
      {
        userId: nasir.id,
        slug: "nasir-nurlina",

        nama_panggilan_pria: "nasir",
        nama_pria: "Nasir, S.Si.",
        nama_ayah_pria: "Gunawan",
        nama_ibu_pria: "Wa Ode Tila",

        nama_panggilan_wanita: "nurlina",
        nama_wanita: "Nurlina",
        nama_ayah_wanita: "La Ringgasa",
        nama_ibu_wanita: "Wa Ode Wiya",
        templateId: 2,

        pria_fb: "https://www.facebook.com/nasiracill?mibextid=ZbWKwL",
        pria_ig: "",
        pria_tk: "https://www.tiktok.com/@shinobi.mubar?_t=8hcXG1a5lO4&_r=1",
        wanita_fb: "https://www.facebook.com/nurlina.ajhadech?mibextid=ZbWKwL",
        wanita_ig: "",
        wanita_tk: "",
        url_foto_pria: "/img/mempelaiP.jpg",
        url_foto_wanita: "/img/mempelaiP.jpg",
        url_foto_utama: "/img/photo.JPG",
        alamat_akad_nikah: "",
        alamat_resepsi: "",

        dateTime_akad_nikah: "2024-01-07T12:59:59.168Z",
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
