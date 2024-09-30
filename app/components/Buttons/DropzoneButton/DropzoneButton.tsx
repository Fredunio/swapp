import { useRef } from "react";
import { Text, Group, Button, rem, useMantineTheme } from "@mantine/core";
import { Dropzone, DropzoneProps, FileWithPath } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import classes from "./DropzoneButton.module.css";

export function DropzoneButton({
  onDrop,
  accept,
  idleTitle,
  acceptTitle,
  rejectTitle,
  description,
}: {
  onDrop: (files: FileWithPath[]) => void;
  accept?: DropzoneProps["accept"];
  idleTitle: string;
  acceptTitle: string;
  rejectTitle: string;
  description: string | React.ReactNode;
}) {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  //   accept={[MIME_TYPES.pdf]}

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={onDrop}
        className={classes.dropzone}
        radius="md"
        accept={accept}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                style={{ width: rem(50), height: rem(50) }}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>
              {/* Drop files here */}
              {acceptTitle}
            </Dropzone.Accept>
            <Dropzone.Reject>
              {/* Pdf file less than 30mb */}
              {rejectTitle}
            </Dropzone.Reject>
            <Dropzone.Idle>
              {idleTitle}
              {/* Upload resume */}
            </Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            {description}
            {/* Drag&apos;n&apos;drop files here to upload. We can accept only{" "}
            <i>.pdf</i> files that are less than 30mb in size. */}
          </Text>
        </div>
      </Dropzone>

      <Button
        className={classes.control}
        size="md"
        radius="md"
        onClick={() => openRef.current?.()}
      >
        Select files
      </Button>
    </div>
  );
}
