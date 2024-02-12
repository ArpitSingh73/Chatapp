import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}
      <Modal size={{ base: "xs", md:"lg" }} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            backgroundColor={"#566258"}
            fontSize="40px"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
            boxShadow={"dark-lg"}
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            backgroundColor={"#222424"}
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            boxShadow={"dark-lg"}
          >
            <Image
              marginTop={"4%"}
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
              boxShadow={"dark-lg"}
            />
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
              fontWeight={"bold"}
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter
            backgroundColor={"#566258"}
            boxShadow={"dark-lg"}
            marginTop={"0%"}
          >
            <Button onClick={onClose} backgroundColor={"gold"}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
