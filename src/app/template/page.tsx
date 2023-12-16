import prisma from "@/lib/prisma";
import CardPernikahan from "./components/cardPernikahan";
import CardUlangTahun from "./components/cardUlangTahun";
import CardAqiqah from "./components/cardAqiqah";
import CardPingitan from "./components/cardPingitan";

export default async function Template() {

    const dataTemplates = await prisma.templateUndangan.findMany()

    return (
        <>
            <div className="flex flex-col items-center  gap-5 py-20 px-5 md:px-10 w-full  h-full bg-white">
                <div className="flex justify-between w-full md:max-w-2xl bg-zinc-50 px-10 py-4 rounded-lg shadow-md">
                    <div className="flex flex-col text-slate-800">
                        <span className="text-xl md:text-4xl font-bold text-red-500">50,000</span>
                        <span className="text-xs md:text-base">Undangan Terbuat</span>
                    </div>
                    <div className="flex flex-col text-slate-800">
                        <span className="text-xl md:text-4xl font-bold text-sky-600">50,000</span>
                        <span className="text-xs md:text-base">Undangan Tersebar</span>
                    </div>

                </div>
                <CardPernikahan />
                <CardUlangTahun />
                <CardAqiqah />
                <CardPingitan />
            </div>
            {/* <div>
                    <div>template undangan</div>
                    {dataTemplates.map((dataTemplate) => (
                        <div className="w-max bg-sky-400">
                            <div>{dataTemplate.nama}</div>
                            <div className="flex flex-col gap-1">
                                <span>Harga Rp 100.000</span>
                                <Link href={`user/create?templateId=${dataTemplate.id}`}>Use Tempalte</Link>
                                <Link className="bg-red-200" href={`/template/${dataTemplate.nama}`}>Demo</Link>
                            </div>

                        </div>
                    ))}

                </div> */}
        </>
    )
}