"use client"

import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button, Code } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export function ChangeBank({ profile_id }: { profile_id: string }) {
    const router = useRouter()
    const form = useForm({
        initialValues: {
            banks: [{ profileId: profile_id }],
        },

    });

    async function handleSubmit() {



        const fetchingDataBank = await fetch('/api/bank', {
            method: 'POST',
            body: JSON.stringify(form.values)

        })
        const res = await fetchingDataBank.json()
        if (res.message == "success") {
            router.push(`/user/create?profile_id=${profile_id}&type=add_photo`);
        }

    }

    const fields = form.values.banks.map((item, index) => (
        <Group key={item.profileId} mt="xs">
            <div className='flex flex-col gap-4'>
                <TextInput
                    placeholder="Jenis Bank"
                    withAsterisk
                    style={{ flex: 1 }}
                    {...form.getInputProps(`banks.${index}.nama_bank`)}
                />
                <TextInput
                    placeholder="Nama Pengguna"
                    withAsterisk
                    style={{ flex: 1 }}
                    {...form.getInputProps(`banks.${index}.nama_pengguna`)}
                />
                <TextInput
                    placeholder="No Rekening Bank"
                    withAsterisk
                    style={{ flex: 1 }}
                    {...form.getInputProps(`banks.${index}.nomor_req`)}
                />
            </div>

            <ActionIcon color="red" onClick={() => form.removeListItem('banks', index)}>
                <IconTrash size="1rem" />
            </ActionIcon>
        </Group>
    ));

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <Box maw={500} mx="auto">
                {fields.length > 0 ? (
                    <Group mb="xs">
                        {/* <Text fw={500} size="sm" style={{ flex: 1 }}>
                            Name
                        </Text> */}
                    </Group>
                ) : (
                    <Text c="dimmed" ta="center">
                        Tambahkan No Rekening
                    </Text>
                )}

                {fields}

                <Group justify="center" mt="md">
                    <Button
                        onClick={() => {
                            form.insertListItem('banks', { profileId: profile_id })
                            // console.log(form.values);
                        }
                        }
                    >
                        Add Bank
                    </Button>
                    <Button type='submit'
                        onClick={handleSubmit}
                    >
                        next
                    </Button>
                </Group>


            </Box>
        </div>

    );
}