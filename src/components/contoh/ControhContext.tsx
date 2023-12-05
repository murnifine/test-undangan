"use client";
import { createContext, useContext } from "react";

const Context = createContext("");

export function Komponen1() {
  const initialData = "data dari komponen 1";

  return (
    <Context.Provider value={initialData}>
      <Komponen2 />
    </Context.Provider>
  );
}

export function Komponen2() {
  return <Komponen3 />;
}

export function Komponen3() {
  return <Komponen4 />;
}

export function Komponen4() {
  const data = useContext(Context);
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}
