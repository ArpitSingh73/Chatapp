import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/SideDrawer";
import { ChatState } from "../Context/Chatprovider";
import "./chat.css"

const Chatpage = () => {
const [fetchAgain, setFetchAgain] = useState(false);
const {user, selectedChat}  = ChatState();

  return (
    <div className="div" style={{ width: "100%" }}>
      {user && <SideDrawer />}

      <Box className="box">
        {user && <MyChats className="mychat" fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox
            className="chatbox"
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
          />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;