import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";

export function SearchTemplate({
  handleSearchChange,
}: {
  handleSearchChange: any;
}) {
  const theme = useMantineTheme();

  return (
    <TextInput
      onChange={(e) => handleSearchChange(e.target.value)}
      radius="xl"
      size="lg"
      placeholder="Cari desain yang kamu suka"
      rightSectionWidth={42}
      leftSection={
        <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
        >
          <IconArrowRight
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
      }
      // {...props}
    />
  );
}
