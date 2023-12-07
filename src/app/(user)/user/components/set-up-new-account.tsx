"use client";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

export default function SetUpNewAccount() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        aaa
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}
