import { VisuallyHidden, chakra } from "@chakra-ui/react";
import { ReactNode } from "react";

export const SocialButton = ({
  children,
  label,
  href,
  bagr
}: {
  children: ReactNode;
  label: string;
  href: string;
  bagr: string;
}) => {
  return (
    <chakra.button
      bg={"rgba(255, 255, 255, 0.23)"}
      rounded={"md"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      border={"none"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
