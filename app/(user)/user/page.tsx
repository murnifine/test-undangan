"use client"

import { DateTimePicker } from "@mantine/dates";
import InputsDataForm from "./components/inputsDataForm";
import { AllDataUserProps } from "@/types/types";
import { Form } from "antd";

import { useForm, Controller } from "react-hook-form"
import Link from "next/link";



export default function User({ dataFormusers }: { dataFormusers: AllDataUserProps }) {

  const name = dataFormusers?.user?.Profile



  const { handleSubmit, control } = useForm()





  return (
    <div className="flex flex-col justify-center items-center p-5 w-full h-screen bg-red-100">
      <Link href={'/user/create'}>create</Link>
    </div>
  );
}
