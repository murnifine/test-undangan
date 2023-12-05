export function Komponen1() {
  const data = "data dari komponen 1";

  return (
    <Komponen2>
      <Komponen2>
        <Komponen3>
          <Komponen4>
            <h1>Datanya : {data}</h1>
          </Komponen4>
        </Komponen3>
      </Komponen2>
    </Komponen2>
  );
}

export function Komponen2({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Komponen3({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Komponen4({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
