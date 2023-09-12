import { Divider, Flex } from "@chakra-ui/react";

const Menu = () => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="flex-start"
      color="black"
      // border="2px solid black"
      w="50px"
      cursor="pointer"
      h="30px"
    >
      <Divider w="35px" borderWidth="2px" borderColor="black" />
      <Divider w="25px" borderWidth="2px" borderColor="black" />
      <Divider w="15px" borderWidth="2px" borderColor="black" />
    </Flex>
  );
};

export default Menu;
