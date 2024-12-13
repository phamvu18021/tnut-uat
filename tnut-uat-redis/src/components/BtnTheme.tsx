import { Button, ButtonProps } from "@chakra-ui/react";

export const BtnTheme = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"white"}
      size={"md"}
      borderRadius={"0px"}
      {...args}
      bg={"blue.400"}
      h={"-moz-max-content"}
      transition={"0.25s cubic-bezier(0.2, 1, 0.3, 1)"}
      _hover={{
        bg: "blue.700"
      }}
    >
      {children}
    </Button>
  );
};

export const BtnThemeSe = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"#0095D9"}
      size={"md"}
      borderRadius={"0px"}
      {...args}
      border={"2px solid"}
      h={"-moz-max-content"}
      transition={"0.25s cubic-bezier(0.2, 1, 0.3, 1)"}
      _hover={{
        bg: "#0095D9",
        textColor: "white"
      }}
    >
      {children}
    </Button>
  );
};
