import { auth } from "@/lib/auth";
import NavbarDashboard from "../components/navbar";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();
    const email = session?.user.email;

    return (
        <>
            <NavbarDashboard />
            {children}
        </>
    );
}
