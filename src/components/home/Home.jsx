import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import TextCrousel from "../elements/TextCrousel";
import Banner from "../../assets/banner.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext } from "react";
import Context from "../../Context";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { headingRef, bannerImgRef, contactTitle, aboutTitle } =
    useContext(Context);
  const handleScrollToAbout = (ref) => {
    const yOffset = -70; // Adjust this value as needed for the desired offset
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };
  const moveUpAnimation = keyframes`
  0%,100% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(10px);
  }
`;

  return (
    <Flex
      px={{ base: "0", lg: "5em" }}
      // border="2px solid black"
      h={{ base: "100dvh", lg: "100dvh" }}
      minH="750px"
      w="100svw"
      position="relative"
      pt={{ base: "6em", lg: "0" }}
      // justify={{ base: "flex-end", lg: "space-between" }}
      justify={{ base: "flex-end", lg: "space-between" }}
      gap={{ base: "0em", xl: "0em" }}
      align="center"
      userSelect="none"
      flexDirection={{ base: "column-reverse", lg: "row" }}
    >
      <Flex
        mt={{ base: "6vh", lg: "0" }}
        // border="2px solid red"
        w="fit-content"
        ref={headingRef}
        h="fit-content"
        // border="2px solid black"
        overflow="visible"
        // bg="linear-gradient(315deg,
        // #ffffff 0%, #d7e1ec 74%)"
        justifyContent="center"
        direction="column"
        align={{ base: "center", lg: "flex-start" }}
        fontFamily="Manrope"
      >
        <Text
          fontSize={{ base: "20px", sm: "20px", md: "25px", xl: "3vw" }}
          fontWeight="700"
          textAlign="center"
        >
          Elevate Your Online Presence with
        </Text>
        <Flex
          // border="2px solid black"
          w={{ base: "100svw", lg: "inherit" }}
          // w="95em"
          align="center"
          justify={{ base: "center", lg: "flex-start" }}
          // gap="0em"
          overflow="visible"
          h={{ base: "auto", lg: "3em" }}
        >
          <Text
            // fontSize="45px"

            // border="2px solid black"
            fontWeight="700"
            textAlign={{ base: "center", lg: "left" }}
            w={{ base: "auto", lg: "6.6em" }}
            fontSize={{ base: "20px", sm: "20px", md: "25px", xl: "3vw" }}
          >
            Cutting-Edge
          </Text>
          <TextCrousel />
        </Flex>
        <Text
          fontSize={{ base: "17px", lg: "17px" }}
          textAlign={{ base: "center", lg: "left" }}
          fontWeight="700"
          fontFamily="Manrope"
          mt="1em"
          // color="rgba(255 255 255, .7)"
          px={{ base: "1em", md: "0" }}
          opacity={{ base: 0.7, lg: 1 }}

          // fontSize="1.5vw"
        >
          Crafting Custom web Solutions with Your Vision in Mind,
        </Text>
        <Text
          fontSize={{ base: "17px", md: "17px" }}
          textAlign={{ base: "center", lg: "left" }}
          fontWeight="700"
          fontFamily="Manrope"
          mt=".5em"
          opacity={{ base: 0.7, lg: 1 }}
        >
          Enhanced by Seamless Animations
        </Text>
        <Button
          fontFamily="Manrope"
          borderRadius="10px"
          bg="red.500"
          color="white"
          _hover={{ transform: "scale(1.2)" }}
          w="auto"
          px={{ base: "2em", md: "3em" }}
          h={{ base: "2.5em", md: "3em" }}
          mt="1em"
          onClick={() => handleScrollToAbout(contactTitle)}
        >
          Contact us
        </Button>
        <Flex
          position="absolute"
          // left="50%"
          // transform="translate(-50%, 10%);"
          left="0"
          right="0"
          marginLeft="auto;"
          marginRight="auto;"
          width="auto"
          bottom={{ base: "5%" }}
          overflow="visible"
          align="center"
          justify="center"
          gap="1em"
          cursor="pointer"
          onClick={() => handleScrollToAbout(aboutTitle)}
        >
          {/* <TextCrousel /> */}
          <Text fontFamily="Manrope" fontWeight="500">
            Scroll Down
          </Text>
          <Box
            animation={`${moveUpAnimation} 1.5s cubic-bezier(0.1, .5, .8, 1.0) infinite`}
          >
            <i className="fa-solid fa-arrow-down-long"></i>
          </Box>
        </Flex>
      </Flex>
      <Img
        ref={bannerImgRef}
        src={Banner}
        maxW={{ base: "auto", md: "400px", lg: "450px", xl: "45em" }}
        objectFit="contain"
      />
    </Flex>
  );
};

export default Home;
