import MantineProvideLayout from "@/lib/MantineProvideLayout";

export default function Index() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-slate-300">
      <section className="w-full bg-red-400">1</section>
      <section className="w-full bg-green-400">2</section>
      <section className="w-full bg-blue-400">3</section>
      <section className="w-full bg-yellow-400">4</section>
      <section className="w-full bg-purple-400">5</section>
    </div>
  );
}
