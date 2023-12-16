import Footer from "../(tamu)/components/Footer/Footer";
import { Navbar } from "../(tamu)/components/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className=''>
            <Navbar />
            {children}
            <Footer />

        </div>
    )
}