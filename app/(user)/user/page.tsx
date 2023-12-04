"use client";
import { DateTimePicker } from "@mantine/dates";
import { useState } from "react";

export default function User() {
  const [date, setDate] = useState();
  return (
    <div className="">
      <div>
        <DateTimePicker
          clearable
          defaultValue={new Date()}
          label="Pick date and time"
          placeholder="Pick date and time"
          // onChange={setDate}
        />
        <button
          onClick={() => {
            console.log(date);
          }}
        >
          kirim
        </button>
      </div>
    </div>
  );
}
