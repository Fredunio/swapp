import {
  Button,
  Flex,
  FlexProps,
  PolymorphicComponentProps,
} from "@mantine/core";

export const FormButtons = ({
  handleNext,
  handleBack,
  backBtnText,
  nextBtnText,
  showBackBtn = true,
  isTypeSubmit = false,
  wrapperProps,
  isSubmitting,
}: {
  handleNext?: () => void;
  handleBack?: () => void;
  backBtnText?: string;
  nextBtnText?: string;
  showBackBtn?: boolean;
  isTypeSubmit?: boolean;
  wrapperProps?: PolymorphicComponentProps<"div", FlexProps>;
  isSubmitting?: boolean;
}) => {
  return (
    <Flex
      display="flex"
      direction={{
        xs: "column",
        sm: "row",
      }}
      gap={"lg"}
      justify={"space-between"}
      w={"100%"}
      mt={"xl"}
      {...wrapperProps}
    >
      {showBackBtn && (
        <Button onClick={handleBack} size="lg" variant="outline">
          {backBtnText || "Back"}
        </Button>
      )}
      <Button
        type={isTypeSubmit ? "submit" : "button"}
        onClick={handleNext}
        size="lg"
        ml={"auto"}
        loading={isSubmitting}
      >
        {nextBtnText || "Next"}
      </Button>
    </Flex>
  );
};
