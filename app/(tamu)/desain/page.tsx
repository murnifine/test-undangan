"use client";
import { Button, Container, Grid, Select } from "@mantine/core";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import { SearchTemplate } from "../components/SearchTemplate";
import { CardItemTemplate } from "../components/CardItemTemplate";

// export const metadata: Metadata = {
//   title: "Desain - Olvit | Online Invitation",
//   description: "Sampaikan undanganmu dengan mudah",
// };

export default function Page() {
  const templates = [
    {
      path: "edi/minimalist",
      preview: "",
      like: 23,
    },
    {
      path: "wanazmi/simple-flower",
      preview: "",
      like: 73,
    },
    {
      path: "edi/contoh3",
      preview: "",
      like: 323,
    },
    {
      path: "edi/contoh4",
      preview: "",
      like: 74,
    },
    {
      path: "edi/contoh5",
      preview: "",
      like: 43,
    },
    {
      path: "edi/contoh6",
      preview: "",
      like: 67,
    },
  ];

  return (
    <div className="py-10">
      <Container size="lg">
        <div className="text-center">
          <p className="text-4xl font-bold">
            {" "}
            <span className="text-pink-400">Desain Undangan</span>, Tinggal
            Pakai langsung jadi!
          </p>
          <p className=" my-5">
            1001 Presets tersedia. Dengan adanya preset kalian bisa pilih tema
            sesuai keinginanmu.
          </p>
        </div>

        <SearchTemplate />

        <div className="py-10">
          <Grid>
            {templates.map((item) => (
              <Grid.Col span={4} key={item.path}>
                <CardItemTemplate template={item} />
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
