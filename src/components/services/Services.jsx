import { Box, Flex, Img, Text } from "@chakra-ui/react";
import mobile_illustration from "../../assets/mobile_illutration.jpg";
import ui_ux_illustration from "../../assets/ui&ux_illutration.jpg";
import marketing_illustration from "../../assets/marketing_illutration.jpg";
import website_illustration from "../../assets/website_illutration.jpg";
import PropTypes from "prop-types";
import { useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Context from "../../Context";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { servicesTitle } = useContext(Context);

  const subHeading = useRef();
  const serviceRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      servicesTitle.current,
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
          trigger: servicesTitle.current,
          start: "100 600",
        },
        delay: 0.5,
      }
    );
    gsap.fromTo(
      subHeading.current,
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
          trigger: subHeading.current,
          start: "100 600",
        },
        delay: 1,
      }
    );
    gsap.fromTo(
      serviceRef.current,
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
          trigger: serviceRef.current?.children,
          start: "100 600",
        },
        delay: 0.5,
        stagger: 0.3,
      }
    );
  }, [servicesTitle, subHeading, serviceRef]);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      as="div"
      w="100svw"
    >
      <Text
        w="100svw"
        ml={{ base: "3em", md: "4.5em" }}
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
        ref={servicesTitle}
      >
        Services
      </Text>
      <Flex
        justify="space-around"
        align="center"
        gap={{ base: "0em", lg: "5em" }}
        flexDirection="column"
        w="90svw"
        mt={{ base: "2em", lg: "5em" }}
        ref={subHeading}
      >
        <Text
          // fontSize="30px"
          fontWeight="700"
          fontFamily="Roboto"
          fontSize={{
            base: "20px",
            md: "25px",
            lg: "35px",
            xl: "45px",
          }}
        >
          We are <span style={{ color: "red" }}> experts</span> in
        </Text>
        <Flex
          direction="column"
          justify="center"
          align="center"
          w="100svw"
          ref={serviceRef}
        >
          <Card
            num="1"
            reverse={false}
            img={website_illustration}
            skill="Static Websites"
            description=" Immerse your audience with our parallax websites featuring smooth
          animations, creating captivating user experiences that leave a lasting
          impression."
          />
          <Card
            num="2"
            reverse={true}
            img={mobile_illustration}
            skill="Mobile Applications"
            description=" Immerse your audience with our parallax websites featuring smooth
          animations, creating captivating user experiences that leave a lasting
          impression."
          />
          <Card
            reverse={false}
            num="3"
            img={ui_ux_illustration}
            skill="Ui & UX Designs"
            description=" Immerse your audience with our parallax websites featuring smooth
          animations, creating captivating user experiences that leave a lasting
          impression."
          />
          <Card
            num="4"
            reverse={true}
            img={marketing_illustration}
            skill="Social Media Marketing"
            description=" Immerse your audience with our parallax websites featuring smooth
          animations, creating captivating user experiences that leave a lasting
          impression."
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Services;

const Card = ({ reverse, skill, description, img, num }) => {
  const [isLargerThan766] = useMediaQuery("(min-width: 766px)");

  Card.propTypes = {
    reverse: PropTypes.bool,
    skill: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    ref: PropTypes.number.isRequired,
  };
  return (
    <Flex
      justify={{ base: "center", lg: "space-between" }}
      w={{ base: "900svw", lg: "80svw", xl: "60svw" }}
      align="center"
      flexDirection={{
        base: !isLargerThan766 ? "column" : null,
        md: reverse ? "row-reverse" : null,
      }}
    >
      <Img
        src={img}
        w={{ base: "12em", md: "20em", lg: "35em" }}
        h={{ base: "17em", lg: "25em" }}
        objectFit="contain"
      />
      <Box
        mt={{ base: "1em", lg: "0" }}
        mr={isLargerThan766 ? "3em" : "0em"}
        userSelect="none"
        w={{ base: "18em", md: "20em", lg: "25em" }}
      >
        <Text
          fontSize={{ base: "20px", md: "25px", lg: "30px" }}
          fontFamily="Roboto"
          fontWeight="500"
          position="relative"
          // _after={{
          //   content: `""`,
          //   position: "absolute",
          //   bg: "linear-gradient(90deg, rgba(255,50,54,1) 0%, rgba(251,63,119,1) 93%);",
          //   w: "85px",
          //   h: { base: "3.5px", lg: "5px" },
          //   borderRadius: "25px",
          //   bottom: "0",
          //   left: { base: "6%", md: "6.5%", lg: "9%" },
          // }}
        >
          <span style={{ color: "red" }}>{num}.&nbsp;</span>
          {skill}
        </Text>
        <Text
          mt="1em"
          fontSize={{ base: "15px", lg: "18px" }}
          fontFamily="Open Sans"
          textAlign="justify"
          fontWeight="600"
          opacity={{ base: 0.7, lg: 1 }}
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
};
