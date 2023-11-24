import {
  IconEye,
  IconHeart,
  IconMessageCircle,
  IconX,
} from "@tabler/icons-react";
import {
  Card,
  Text,
  Group,
  Center,
  rem,
  useMantineTheme,
  Modal,
  Button,
  ActionIcon,
} from "@mantine/core";
import classes from "./ImageCard.module.css";
import uppercaseFirstLetter from "@/utils/uppercaseFirstLetter";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import dynamic from "next/dynamic";

type Template = {
  path: string;
  preview: string;
  like: number;
};

export function CardItemTemplate({ template }: { template: Template }) {
  const theme = useMantineTheme();
  const [isHover, setIsHover] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const namaTemplate = uppercaseFirstLetter(
    template.path.split("/")[1].replace("-", " ")
  );

  const [previewTemplate, setPreviewTemplate] = useState<string | null>(
    "wanazmi/simple-flower"
  );
  const TemplateComponent = dynamic(
    () => import(`../../../../template/${previewTemplate}/`)
  );

  return (
    <>
      <Card
        p="lg"
        shadow="lg"
        className={classes.card + " cursor-pointer"}
        radius="md"
        // component="a"
        // href="https://mantine.dev/"
        // target="_blank"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => {
          setPreviewTemplate(template.path);
          open();
        }}
      >
        <div
          className={classes.image}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)",
          }}
        />

        {!isHover && (
          <>
            <div className={classes.overlay} />
            <div className={classes.content}>
              <div>
                <Group justify="space-between" gap="xs">
                  <Text size="sm" className={classes.author}>
                    {namaTemplate}
                  </Text>

                  <Group gap="lg">
                    <Center>
                      <IconHeart
                        style={{ width: rem(16), height: rem(16) }}
                        stroke={1.5}
                        color={theme.colors.dark[2]}
                      />
                      <Text size="sm" className={classes.bodyText}>
                        {template.like}
                      </Text>
                    </Center>
                    {/* <Center>
                      <IconMessageCircle
                        style={{ width: rem(16), height: rem(16) }}
                        stroke={1.5}
                        color={theme.colors.dark[2]}
                      />
                      <Text size="sm" className={classes.bodyText}>
                        5
                      </Text>
                    </Center> */}
                  </Group>
                </Group>
              </div>
            </div>
          </>
        )}
      </Card>

      {/* ModalPreviewTemplate */}

      <>
        <Modal
          styles={{
            body: { padding: 0 },
          }}
          withCloseButton={false}
          opened={opened}
          onClose={close}
          // title="This is a fullscreen modal"
          fullScreen
          radius={0}
          p={0}
          transitionProps={{ transition: "fade", duration: 200 }}
        >
          <div className="relative">
            <TemplateComponent />
            <div className="fixed right-6 top-6">
              <Button variant="filled" size="xs" onClick={close}>
                Kembali
              </Button>
            </div>
          </div>
        </Modal>
      </>
    </>
  );
}
