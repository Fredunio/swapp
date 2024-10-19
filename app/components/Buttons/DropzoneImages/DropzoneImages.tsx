import {
  ActionIcon,
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  rem,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { IconUpload, IconX } from "@tabler/icons-react";
import React, { useCallback, useRef } from "react";
import { acceptedImagesTypes } from "~/lib/constants";

export function DropzoneImages({
  id,
  name,
  form,
}: {
  id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturnType<any>;
}) {
  const removeFileByIndex = useCallback(
    (fileIndex: number) => {
      if (inputRef.current && inputRef.current.files) {
        const dt = new DataTransfer(); // To hold the new FileList
        Array.from(inputRef.current.files).forEach((file, index) => {
          if (index !== fileIndex) {
            dt.items.add(file); // Add back all files except the one to remove
          }
        });
        inputRef.current.files = dt.files; // Update the input element's files
        form.setFieldValue(name, dt.files); // Update the form field value
        setRerender((prev) => !prev);
      }
    },
    [form, name]
  );

  const [, setRerender] = React.useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const previewFiles =
    inputRef.current?.files && inputRef.current?.files.length > 0
      ? Array.from(inputRef.current.files)
      : [];

  return (
    <>
      <Box
        component="label"
        htmlFor={id}
        py={40}
        style={{
          border: "1px dashed var(--mantine-color-dimmed)",
          borderRadius: rem(5),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          size="md"
          component="label"
          htmlFor={id}
          variant="filled"
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "100px",
          }}
          rightSection={<IconUpload />}
        >
          Upload images
        </Button>
        <Text size="sm" c="dimmed" ta="center" mt={7}>
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
        <input
          ref={inputRef}
          id={id}
          type="file"
          style={{
            visibility: "hidden",
            display: "none",
          }}
          accept={acceptedImagesTypes.toString()}
          multiple={true}
          name={name}
          // {...form.getInputProps(name).onChange}
          onChange={(e) => {
            const files = e.target.files;
            if (files) {
              form.setFieldValue(name, files);
            }
            setRerender((prev) => !prev);
          }}
        />
      </Box>
      {previewFiles && previewFiles.length > 0 && (
        <SimpleGrid
          mt={"sm"}
          cols={{
            base: 1,
            xs: 2,
            sm: 2,
            md: 3,
            // lg: 4,
          }}
        >
          {previewFiles.map((file, index) => (
            <ImagePreview
              key={index}
              file={file}
              onRemove={() => removeFileByIndex(index)}
            />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}

const ImagePreview = React.memo(
  ({ file, onRemove }: { file: File; onRemove: () => void }) => {
    const previewUrl = URL.createObjectURL(file);
    return (
      <Box
        mih={200}
        h={{
          base: 400,
          xs: 300,
          sm: 280,
          md: 250,
        }}
        style={{
          position: "relative",
          width: "100%",
          boxShadow: "var(--mantine-shadow-sm)",
        }}
      >
        <Image
          src={previewUrl}
          alt="Preview"
          onLoad={() => URL.revokeObjectURL(previewUrl)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 4,
            marginRight: 10,
            border: "1px solid var(--mantine-color-gray-3)",
          }}
        />
        <ActionIcon
          onClick={() => onRemove()}
          style={{ position: "absolute", top: 10, right: 10 }}
          size="md"
          color="red"
          radius="xl"
        >
          <IconX />
        </ActionIcon>
      </Box>
    );
  }
);

ImagePreview.displayName = "ImagePreview";

// In future, we can implement this with the code below:
{
  /* <Dropzone
onDrop={(files) => console.log("accepted files", files)}
onReject={(files) => console.log("rejected files", files)}
maxSize={5 * 1024 ** 2}
accept={IMAGE_MIME_TYPE}
{...props}
>
<Group
  justify="center"
  gap="xl"
  mih={220}
  style={{ pointerEvents: "none" }}
>
  <Dropzone.Accept>
    <IconUpload
      style={{
        width: rem(52),
        height: rem(52),
        color: "var(--mantine-color-blue-6)",
      }}
      stroke={1.5}
    />
  </Dropzone.Accept>
  <Dropzone.Reject>
    <IconX
      style={{
        width: rem(52),
        height: rem(52),
        color: "var(--mantine-color-red-6)",
      }}
      stroke={1.5}
    />
  </Dropzone.Reject>
  <Dropzone.Idle>
    <IconPhoto
      style={{
        width: rem(52),
        height: rem(52),
        color: "var(--mantine-color-dimmed)",
      }}
      stroke={1.5}
    />
  </Dropzone.Idle>

  <div>
    <Text size="xl" inline>
      Drag images here or click to select files
    </Text>
    <Text size="sm" c="dimmed" inline mt={7}>
      Attach as many files as you like, each file should not exceed 5mb
    </Text>
  </div>
</Group>
</Dropzone> */
}
