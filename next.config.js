/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["images.unsplash.com", "wayvxub1v2fhar9n.public.blob.vercel-storage.com"],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
    ],
  },
};

module.exports = nextConfig
