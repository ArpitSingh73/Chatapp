import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/Chatprovider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      dispaly={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      // justifyContent="space-between"
      flexDir="column"
      p={3}
      // bg="red"
      bg="#566258"
      marginBottom={1}
      h={{ base: selectedChat? "100%" : "50%", md: "100%" }}
      w={{ base: "100%", md: "70%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;