import {
  ActionIcon,
  ActionIconProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import { IconArrowNarrowLeft } from "@tabler/icons-react";

export default function BackButton(
  props: PolymorphicComponentProps<"button", ActionIconProps>
) {
  const navigate = useNavigate();

  return (
    <ActionIcon disabled={!navigate} onClick={() => navigate(-1)} {...props}>
      <IconArrowNarrowLeft className="flex items-center justify-center" />
    </ActionIcon>
  );
}
