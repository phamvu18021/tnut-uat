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
  onOpen: () => void;
  onClose: () => void;
  form: ReactNode;
}

export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen, form } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={"white"}>
          <ModalCloseButton />
          <ModalBody p={0}>{form}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
