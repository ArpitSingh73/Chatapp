import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Login from "../components/Login";
import Signup from "../components/Signup";

function Homepage() {
  const history = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        // justifyContent="center"
        // alignItems="center"
        textAlign="center"
        fontSize={"x-large"}
        p={3}
        // backgroundColor="grey"
        bg="#878787"
        w="100%"
        m="25% 0 15px 0"
        borderRadius={"8"}
        borderColor={"#0D0D0D"}
        borderWidth="2px"
        boxShadow={"2px 3px 1px"}
      >
        <Text fontSize="5xl" textDecoration={"line-through"}>
          TalK
        </Text>
      </Box>
      <Box
        // bg="#BEBFB1"
        w="100%"
        p={4}
        marginBottom={"10%"}
        borderRadius={"8"}
        borderColor={"#0D0D0D"}
        borderWidth="2px"
        boxShadow={"2px 3px 1px"}
      >
        <Tabs
          isFitted
          variant="soft-rounded"
          colorScheme="blackAlpha"
          bgColor={""}
        >
          <TabList mb="1em">
            <Tab textColor={"white"} fontSize={"2xl"}>Login</Tab>
            <Tab textColor={"white"} fontSize={"2xl"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
