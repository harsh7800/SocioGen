import { Box, Button, Flex, Text } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { useContext, useState } from "react";
import Context from "../../Context";
import HamburgerAnimation from "../elements/Hamburger";

const Navbar = () => {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  // const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const {
    navRef,
    aboutTitle,
    careerTitle,
    servicesTitle,
    contactTitle,
    processTitle,
    hamburgerRef,
  } = useContext(Context);

  const handleScrollToAbout = (ref) => {
    const yOffset = -70; // Adjust this value as needed for the desired offset
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    setShow(false);
  };

  return (
    <Flex
      as="nav"
      ref={navRef}
      position="fixed"
      top="0"
      h="fit-content"
      py="1em"
      bg="white"
      zIndex="100"
      w="100svw"
      justify={{ base: "space-between" }}
      overflow="visible"
      // border="2px solid black"
      px={{ base: "1em", md: "5em" }}
    >
      <Text
        display="flex"
        fontFamily="Shantell Sans"
        fontWeight="800"
        fontSize="25px"
      >
        {/* <span>Gloriants</span> */}
        <span style={{ color: "red" }}>Gloriants</span>
      </Text>
      {isLargerThan900 ? (
        <Flex
          align="center"
          w="30em"
          fontFamily="Poppins"
          fontSize="18px"
          fontWeight="500"
          justify="center"
          gap="3em"
        >
          <Text
            onClick={() => handleScrollToAbout(aboutTitle)}
            cursor="pointer"
            _hover={{ color: "red" }}
          >
            About
          </Text>
          <Text
            onClick={() => handleScrollToAbout(servicesTitle)}
            cursor="pointer"
            _hover={{ color: "red" }}
          >
            Services
          </Text>
          <Text
            onClick={() => handleScrollToAbout(processTitle)}
            cursor="pointer"
            _hover={{ color: "red" }}
          >
            Process
          </Text>
          {/* <Text
            onClick={() => handleScrollToAbout(careerTitle)}
            cursor="pointer"
            _hover={{ color: "red" }}
          >
            Careers
          </Text> */}
        </Flex>
      ) : null}
      {isLargerThan900 ? (
        <Button
          onClick={() => handleScrollToAbout(contactTitle)}
          fontFamily="Poppins"
          borderRadius="25px"
          bg="red.500"
          color="white"
          _hover={{ transform: "scale(1.2)" }}
        >
          Contact us
        </Button>
      ) : null}
      {!isLargerThan900 ? (
        <Box onClick={() => setShow(!show)}>
          <HamburgerAnimation
            ref={hamburgerRef}
            hover={show}
            setHover={setShow}
          />
        </Box>
      ) : null}
      <Flex
        bg="red"
        w="100svw"
        h="100dvh"
        position="absolute"
        borderRadius="50%"
        left={show ? "70%" : "100%"}
        transition="left .3s ease-in-out"
        color="#fff"
        justify="center"
        align="center"
      >
        <Flex
          direction="column"
          gap="2em"
          pl="2em"
          position="relative"
          w="100svw"
        >
          <Text
            textAlign="left"
            fontSize="1.2em"
            fontFamily="Manrope"
            fontWeight="700"
            color="white"
            onClick={() => handleScrollToAbout(aboutTitle)}
            cursor="pointer"
          >
            About
          </Text>
          <Text
            Text
            textAlign="left"
            fontSize="1.2em"
            fontFamily="Manrope"
            fontWeight="700"
            color="white"
            onClick={() => handleScrollToAbout(servicesTitle)}
            cursor="pointer"
            _hover={{ color: "red" }}
          >
            Services
          </Text>
          <Text
            Text
            textAlign="left"
            fontSize="1.2em"
            fontFamily="Manrope"
            fontWeight="700"
            color="white"
            onClick={() => handleScrollToAbout(processTitle)}
            cursor="pointer"
            _hover={{ color: "red" }}
          >
            Process
          </Text>
          <Text
            Text
            textAlign="left"
            fontSize="1.2em"
            fontFamily="Manrope"
            fontWeight="700"
            color="white"
            onClick={() => handleScrollToAbout(careerTitle)}
            cursor="pointer"
            _hover={{ color: "red" }}
          >
            Careers
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
