import { Header } from "@/app/(tamu)/components/Header/Header";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <Container size="lg">
      <Header />
      <section className="bg-red-200 py-20 flex justify-center items-center">
        1
      </section>
      <section className="bg-green-200 py-20 flex justify-center items-center">
        2
      </section>
      <section className="bg-blue-200 py-20 flex justify-center items-center">
        3
      </section>
      <section className="bg-yellow-200 py-20 flex justify-center items-center">
        4
      </section>
    </Container>
  );
}
