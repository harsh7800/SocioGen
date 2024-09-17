import { Box, Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import like from "../../assets/like.png";
import react from "../../assets/techStack/React.png";
import react_native from "../../assets/techStack/ReactNative.webp";
import Nodejs from "../../assets/techStack/Nodejs.png";
// import Sass from "../../assets/techStack/Sass.png";
// import Html from "../../assets/techStack/Html.png";
// import Css from "../../assets/techStack/Css.jpg";
import Nextjs from "../../assets/techStack/Next.png";
import Expressjs from "../../assets/techStack/Express.png";
import Github from "../../assets/techStack/GitHub.png";
import Slack from "../../assets/techStack/Slack.png";
import JS from "../../assets/techStack/JS.png";
import Solana from "../../assets/techStack/Solana_logo.png";
import Solidity from "../../assets/techStack/solidity.png";
import Map from "../../assets/map.png";
import { useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Context from "../../Context";

gsap.registerEffect(ScrollTrigger);
const TechStack = () => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const interestRef = useRef();
  const { careerTitle } = useContext(Context);
  const techRef = useRef();
  const techRefTitle = useRef();
  const whyref = useRef();

  useEffect(() => {
    gsap.fromTo(
      interestRef.current?.children,
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
          trigger: interestRef.current,
          start: "100 600",
        },
        stagger: 0.1,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      techRefTitle.current,
      {
        opacity: 0,
        ease: "power3.out",
        y: "-50",
      },
      {
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        y: "0",
        scrollTrigger: {
          trigger: interestRef.current,
          start: "100 600",
        },
        delay: 1,
      }
    );
    gsap.fromTo(
      techRef.current?.children,
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
          trigger: techRef.current,
          start: "100 600",
        },
        stagger: 0.1,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      whyref.current?.children,
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
          trigger: whyref.current?.children,
          start: "100 400",
        },
        stagger: 0.3,
        delay: 0.5,
      }
    );
  }, [interestRef, careerTitle, techRef, whyref]);
  return (
    <Box w="100svw" mt="2em">
      <Flex
        bg="black"
        align="center"
        ref={interestRef}
        justify="space-around"
        h="10em"
      >
        <Box>{isLargerThan500 ? <Img w="5em" src={like} /> : null}</Box>
        <Text
          color="white"
          fontSize={{ base: "1em", md: "1.3em", lg: "1.5em", xl: "2em" }}
          fontWeight="700"
        >
          Interested In Our <span style={{ color: "red" }}>Services </span>?
        </Text>
        <Button
          // {isLargerThan500? fontSize="13px":}
          fontSize={isLargerThan500 ? "17px" : "13px"}
          fontFamily="Poppins"
          borderRadius="10px"
          bg="red.500"
          color="white"
          _hover={{ transform: "scale(1.2)" }}
        >
          Contact us
        </Button>
      </Flex>
      <Flex align="center" justify="space-between" direction="column" mt="5em">
        <Text
          textAlign="center"
          ref={techRefTitle}
          fontSize="30px"
          fontWeight="700"
        >
          Technologies We Use
        </Text>
        <SimpleGrid
          ref={techRef}
          alignItems="center"
          justifyItems="center"
          columns={[2, 3, 4]}
          mt="5em"
          gap={20}
        >
          <Img w={["5em", "7em"]} src={react} />
          <Img w={["3.5em", "5.5em"]} src={react_native} />
          <Img w={["8em", "12em"]} src={Nodejs} />
          <Img w={["5em", "7em"]} src={Expressjs} />
          <Img w={["6em", "8em"]} src={Nextjs} />
          <Img w={["6em", "8em"]} src={Solana} />
          <Img w={["6em", "8em"]} src={Solidity} />
          {/* <Img w={["5em", "7em"]} src={Sass} /> */}
          {/* <Img w={["4em", "7em"]} src={Html} /> */}
          {/* <Img w={["4em", "7em"]} src={Css} /> */}
          <Img w={["4em", "7em"]} src={JS} />
          <Img w="7em" src={Github} />
          <Img w={["5em", "7em"]} src={Slack} />
        </SimpleGrid>
      </Flex>
      {isLargerThan500 ? (
        <Flex justify="center" align="center" mt="5em">
          <Box ref={whyref}>
            <Text
              fontSize={{ base: "1em", md: "1.3em", lg: "1.5em", xl: "2em" }}
              fontWeight="700"
              fontFamily="Poppins"
              textAlign="center"
            >
              Why <span style={{ color: "red" }}>Gloriants</span> ?
            </Text>
            <Img w="100%" objectFit="contain" src={Map} />
            {/* <Box
            bgImage={Map}
            w="100svw"
            h="40em"
            bgPosition="center"
            bgSize="cover"
          ></Box> */}
          </Box>
        </Flex>
      ) : null}
    </Box>
  );
};

export default TechStack;
