import Link from "next/link";

export default function NoteDev() {
    return (
        <div className="py-10 flex justify-center items-center w-full  px-5 md:px-14">

            <div className="flex flex-col gap-2 border-l-4 pl-4 w-full py-2 text-xs text-slate-600  font-semibold italic">
                <p>
                    Website ini masih dalam mode pengembangan.
                </p>
                <p>Pengembangan yang dimaksud hanyalah penambahan jumlah Template Desain Undangan dan desain Interface, tidak mencangkup data-data pribadi anda. </p>
                <p className="text-sky-700">
                    Selama dalam mode pengembangan semua template yang tersedia akan di GRATISkan.
                </p>
                <p>
                    untuk mendapakan template Gratis
                </p>
                <Link href={'/'} className="text-sky-500 underline">Pelajari lebih lanjut..</Link>
            </div>
        </div>
    )
}