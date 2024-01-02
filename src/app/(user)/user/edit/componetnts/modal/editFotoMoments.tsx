import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';


export default function EditFotoMoments() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Authentication">
                {/* Modal content */}
            </Modal>

            <Button onClick={open}>Open modal</Button>
        </>
    );
}

