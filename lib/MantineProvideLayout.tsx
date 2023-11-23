import { MantineProvider } from "@mantine/core";

export default function MantineProvideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  );
}
