"use client"




export default function InputsDataForm({ label, configName }: { label: any, configName: any }) {

    return (
      <>
        <div className="relative mb-8">
          <input
            className="w-full px-4 h-10 rounded-lg text-lg placeholder-transparent border-b-2 text-slate-700 border-gray-300 peer focus:outline-none focus:border-purple-600"
            placeholder={label}
            {...configName}
          />
          <label
            className="absolute
                    peer-focus:-top-2.5 
                   ml-4 left-0 -top-2.5 text-lg placeholder:text-lg text-gray-600  transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:text-gray-600 peer-focus:text-lg"
          >
            {label}
          </label>
        </div>
      </>
    );
}