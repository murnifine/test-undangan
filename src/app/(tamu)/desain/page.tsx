"use client";
import { Button, Container, Grid, Select } from "@mantine/core";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import { SearchTemplate } from "../components/SearchTemplate";
import { CardItemTemplate } from "../components/CardItemTemplate";

import { debounce } from "lodash";

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

  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input change with debounce
  const handleSearchChange = debounce((value) => {
    setSearchTerm(value);
    console.log(value, "ok");
  }, 300);

  // Filter templates based on search term
  const filteredTemplates = templates.filter((template) =>
    template.path
      .replace("-", " ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

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

        <SearchTemplate handleSearchChange={handleSearchChange} />

        <div className="py-10">
          {filteredTemplates.length <= 0 && (
            <div>
              <p className="text-center">Desain tersebut belum tersedia!</p>
            </div>
          )}

          <Grid>
            {filteredTemplates &&
              filteredTemplates.map((item) => (
                <Grid.Col
                  span={{ base: 12, sm: 6, md: 4, lg: 3 }}
                  key={item.path}
                >
                  <CardItemTemplate template={item} />
                </Grid.Col>
              ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
