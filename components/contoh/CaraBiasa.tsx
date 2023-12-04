export function Komponen1() {
  const data = "data dari komponen 1";

  return <Komponen2 data={data} />;
}

export function Komponen2({ data }: { data: string }) {
  return (
    <>
      <Komponen3 data={data} />
    </>
  );
}

export function Komponen3({ data }: { data: string }) {
  return (
    <>
      <Komponen4 data={data} />
    </>
  );
}

export function Komponen4({ data }: { data: string }) {
  return (
    <>
      <h1>Datanya : {data}</h1>
    </>
  );
}
