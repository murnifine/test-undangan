import { Image, Container, Title, Button, Group, Text } from "@mantine/core";
import classes from "./Header.module.css";

export function Header() {
  return (
    <div className="">
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Website Undangan Pernikahan</Title>
            <Text c="dimmed" mt="md">
              Masa aktif selamanya dan edit tanpa batas! Fitur paling lengkap
              banyak preset siap pakai
            </Text>
            {/* <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List> */}
            <Group mt={30}>
              <Button
                radius="sm"
                size="md"
                color="blue"
                className={classes.control}
              >
                Buat Undanganmu Sekarang
              </Button>
              {/* <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button> */}
            </Group>
          </div>
          <Image src="./header.webp" className={classes.image} alt="gambar" />
        </div>
      </Container>
    </div>
  );
}
