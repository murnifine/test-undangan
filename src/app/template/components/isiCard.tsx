import { TemplateUndangan } from "@prisma/client"
import Link from "next/link"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { LuEye } from "react-icons/lu"

export default function IsiCard({ dataTemplates, categoryName }: { dataTemplates: TemplateUndangan[], categoryName: string }) {
    return (
        <>
            <span className="capitalize text-xl md:text-2xl font-semibold text-red-400 border-b-2 pb-2 border-b-sky-800">
                {categoryName.replaceAll('_', " ").replaceAll('-', ' ')}
            </span>
            <div className="  sm:grid sm:grid-cols-2 lg:grid-cols-3 flex-col  flex md:flex-row  gap-8 md:gap-10 mt-2  py-5  w-full h-full overflow-y-scroll">
                {dataTemplates.length > 0 ?
                    dataTemplates.slice(0, 3).map((template) => {
                        let price
                        if (template.discount !== null && template.harga !== null) {

                            let discountCalculate = template.harga * (template.discount / 100)
                            price = template.harga - discountCalculate

                        } else {
                            price = template.harga
                        }
                        return (
                          <div
                            key={template.id}
                            className="flex flex-col gap-4 justify-center items-center w-full md:w-80 h-[470px] bg-white border px-5 py-4 rounded-lg shadow-lg transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-slate-50 duration-300 text-slate-800 "
                          >
                            <span className="text-lg capitalize font-semibold">
                              {template.nama?.replaceAll("-", " ")}
                            </span>
                            <div className=" w-full h-64 bg-red-300">
                              gambar
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2 w-full">
                              {template.discount && (
                                <div className="flex gap-4">
                                  <span className="px-4 py-1 rounded-md font-semibold text-white bg-sky-400">
                                    Rp {template.harga}
                                  </span>
                                  <span className="px-4 py-1 rounded-md font-semibold text-white bg-red-400">
                                    {template.discount} % OFF
                                  </span>
                                </div>
                              )}

                              <span className="text-xl font-bold">
                                {price === 0
                                  ? "Gratis"
                                  : `Rp ${
                                      price ? price.toLocaleString("id-ID") : 0
                                    }`}
                              </span>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-between ">
                                <Link
                                  href={"#"}
                                  className="flex gap-1 py-2 px-2 items-center rounded-md  bg-slate-100 text-slate-900 shadow-md hover:bg-red-200"
                                >
                                  <LuEye />
                                  <span className="text-xs">Demo</span>
                                </Link>
                                <Link
                                  href={`/user/create?templateId=${template.id}`}
                                  className="flex gap-1 py-2 px-2 items-center rounded-md  bg-sky-500 text-white shadow-md hover:bg-red-200 hover:text-sky-600"
                                >
                                  <IoMdCheckmarkCircleOutline />
                                  <span className="text-xs">Terapkan</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                    })
                    :

                    <span className=" text-4xl font-bold">coming soon</span>
                }
            </div>
        </>

    )
}