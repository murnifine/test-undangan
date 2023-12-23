export default function CountShare() {
    return (
        <div className="flex justify-between w-full md:max-w-2xl bg-zinc-50 px-10 py-4 rounded-lg shadow-md">
            <div className="flex flex-col text-slate-800">
                <span className="text-xl md:text-4xl font-bold text-red-500">
                    50,000
                </span>
                <span className="text-xs md:text-base">Undangan Terbuat</span>
            </div>
            <div className="flex flex-col text-slate-800">
                <span className="text-xl md:text-4xl font-bold text-sky-600">
                    50,000
                </span>
                <span className="text-xs md:text-base">Undangan Tersebar</span>
            </div>
        </div>
    )
}