import Footer from "@/app/(tamu)/components/Footer/Footer";
import { Navbar } from "@/app/(tamu)/components/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
