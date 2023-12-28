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
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="50%">
          <ModalHeader
            // backdropBlur={"3xl"}
            // backgroundColor={"#606060"}
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
            // backgroundColor={"#222424"}
            backgroundColor={"#222424"}
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            boxShadow={"dark-lg"}
          >
            <Image
              marginTop={"5%"}
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
            // backgroundColor={"#606060"}
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