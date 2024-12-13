"use client";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface IModalBase {
  isOpen: boolean;
  children: ReactNode;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen, children } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          aria-label="model"
          bg={"white"}
          pt={"12px"}
          rounded={"sm"}
          px={{ base: "12px", lg: "24px" }}
        >
          <ModalCloseButton />
          <ModalBody rounded={"xl"} p={0}>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
