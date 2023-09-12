import { Box, Flex, Img, Text } from "@chakra-ui/react";
import coming_soon from "../../assets/coming_soon.jpg";
import { useContext, useEffect, useRef } from "react";
import Context from "../../Context";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Career = () => {
  const { careerTitle } = useContext(Context);
  const imageRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      careerTitle.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        y: "-50",
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        y: "0",
        scrollTrigger: {
          trigger: careerTitle.current,
          start: "100 600",
        },
      }
    );
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        y: "-50",
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        y: "0",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "100 600",
        },
        delay: 1,
      }
    );
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        y: "-50",
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        y: "0",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "100 600",
        },
        delay: 1,
      }
    );
  }, []);
  return (
    <Box pt="2em" w="100svw">
      <Text
        ref={careerTitle}
        w="100svw"
        ml={{ base: "1em", md: "4.5em" }}
        fontSize={{ base: "1.3em", sm: "", lg: "1.5em", xl: "2em" }}
        fontFamily="Roboto"
        fontWeight="500"
        position="relative"
        _after={{
          content: `""`,
          position: "absolute",
          bg: "red",
          w: "65px",
          h: "5px",
          borderRadius: "25px",
          bottom: "0",
          left: "0",
        }}
        textAlign="left"
      >
        Careers
      </Text>
      <Flex
        direction="column-reverse"
        align="center"
        justify="center"
        gap="2em"
      >
        <Text
          textAlign="center"
          fontSize={{ base: "1em", md: "1.3em", lg: "1.5em", xl: "2em" }}
          fontFamily="Manrope"
          fontWeight="700"
          ref={titleRef}
        >
          We Will be Posting soon...
        </Text>
        <Img ref={imageRef} src={coming_soon} w={["9em", "15em"]} />
      </Flex>
    </Box>
  );
};

export default Career;
