import { Box, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
// import { Tilt } from "react-tilt";
import PropTypes from "prop-types";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import Context from "../../Context";
// import { useMediaQuery } from "@chakra-ui/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { aboutTitle } = useContext(Context);
  const subHeading = useRef();
  const keyFeaturesRef = useRef();
  // const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  // const defaultOptions = {
  //   reverse: false, // reverse the tilt direction
  //   max: 35, // max tilt rotation (degrees)
  //   perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  //   scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  //   speed: 1000, // Speed of the enter/exit transition
  //   transition: true, // Set a transition on enter/exit.
  //   axis: null, // What axis should be disabled. Can be X or Y.
  //   reset: true, // If the tilt effect has to be reset on exit.
  //   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  // };

  useEffect(() => {
    gsap.fromTo(
      aboutTitle.current,
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
          trigger: aboutTitle.current,
          start: "100 600",
        },
      }
    );
    gsap.fromTo(
      subHeading.current,
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
          trigger: subHeading.current,
          start: "100 600",
        },
        delay: 0.5,
      }
    );
    gsap.fromTo(
      keyFeaturesRef.current?.children,
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
          trigger: keyFeaturesRef.current,
          start: "100 550",
        },
        delay: 0.5,
        stagger: 0.3,
      }
    );
  }, [aboutTitle, subHeading, keyFeaturesRef]);

  return (
    <Flex
      direction="column"
      justifyContent="space-around"
      align="center"
      id="About"
      as="div"
      w="100svw"
      position="relative"
      gap="3em"
    >
      <Text
        w="100svw"
        ml={{ base: "2em", md: "4.5em" }}
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
        ref={aboutTitle}
      >
        About us
      </Text>
      <Flex direction="column" align="center" justify="center" ref={subHeading}>
        <Text
          fontSize={{
            base: "15px",
            sm: "20px",
            md: "25px",
            lg: "35px",
            xl: "45px",
          }}
          fontWeight="700"
          w={{ base: "100svw", lg: "80svw" }}
          textAlign="center"
        >
          We at <Link color="red">SocioGen</Link> provide you one-stop solution
          that perfectly align with your needs
        </Text>
      </Flex>
      <SimpleGrid
        minChildWidth="18em"
        spacing="1em"
        pb="2em"
        // columns={[1, 2, 3, 4]}
        alignItems="center"
        justifyItems="center"
        w="95svw"
        overflow="visible"
        h={{ base: "auto", lg: "20em" }}
        // spacing="1em"
        // overflow="visible"
        userSelect="none"
        // bg="#252525"
        ref={keyFeaturesRef}
      >
        <Card
          number="01"
          title="Customized Solutions"
          description={
            "Crafting Bespoke Solutions: We excel in customizing services to precisely meet your distinct needs, highlighting our flexibility and adaptability."
          }
        />
        <Card
          number="02"
          title="Comprehensive Services"
          description={
            "Emphasize that you offer a full range of services, covering all aspects of a project or problem, to demonstrate your capability as a one-stop solution provider."
          }
        />
        <Card
          number="03"
          title="Client-Centric Approach"
          description={
            "Showcase your commitment to understanding and addressing your clients' specific requirements, focusing on their success and satisfaction."
          }
        />
        <Card
          number="04"
          title="Strategic Alignment"
          description={
            "Communicate your expertise in aligning your solutions with your clients' goals and objectives, ensuring that your services are a perfect fit for their needs."
          }
        />
      </SimpleGrid>
    </Flex>
  );
};

export default About;

const Card = ({ description, number, title }) => {
  Card.propTypes = {
    reverse: PropTypes.bool,
    skill: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
  return (
    <Box
      bg="#FFF"
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
        // transform: "skew(.312rad)",
        // transform: "skewX(${x})`
      }}
      transition="box-Shadow .2s ease"
      // border="2px solid black"
      overflow={{ base: "visible", lg: "hidden" }}
      p="1em"
      borderRadius="10px"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      mt="1em"
    >
      <Flex gap=".5em" align="center">
        <Center w="2em" h="2em" bg="red" borderRadius="50%" color="white">
          <Text fontSize="1.2em" fontWeight="700" color="#fff">
            {number}
          </Text>
        </Center>
        <Text
          fontSize="1.2em"
          fontWeight="700"
          color="black"
          fontFamily="Manrope"
        >
          {title}
        </Text>
      </Flex>
      <Text
        fontSize={{ base: "13px", sm: "15px" }}
        // fontSize="18px"
        fontFamily="Manrope"
        mt="1em"
        fontWeight="600"
        textAlign="justify"
      >
        {description}
      </Text>
    </Box>
  );
};
