import { Box, Flex, Img, Text } from "@chakra-ui/react";
// import mobile_illustration from "../../assets/mobile_illutration.jpg";
// import ui_ux_illustration from "../../assets/ui&ux_illutration.jpg";
// import marketing_illustration from "../../assets/marketing_illutration.jpg";
// import website_illustration from "../../assets/website_illutration.jpg";
import smart_contract from "../../assets/smart_contract.jpg";
import high_performance from "../../assets/high_performance.jpg";
import blockchain from "../../assets/blockchain.jpg";
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
          bottom: "-5%",
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
          {/* <Card
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
            description="Elevate your mobile experience with our expert mobile app development services. From productivity tools to entertainment, our apps cater to your unique needs. Seamlessly integrate innovation into your daily life with us."
          />
          <Card
            reverse={false}
            num="3"
            img={ui_ux_illustration}
            skill="Ui & UX Designs"
            description="Transform your mobile experience with our expert mobile app development and cutting-edge UI/UX design services. From sleek interfaces to seamless interactions, we craft apps that cater to your unique needs. Seamlessly integrate innovation into your daily life with us."
          />
          <Card
            num="4"
            reverse={true}
            img={marketing_illustration}
            skill="Social Media Marketing"
            description="
Boost your brand's online presence with our expert social media marketing services. We create engaging content and strategic campaigns to connect you with your audience effectively. Elevate your digital strategy with us and achieve meaningful results."
          /> */}
          <Card
            num="1"
            reverse={false}
            img={blockchain}
            skill="Enterprise-Grade Blockchain"
            description="
 Harness the power of Hyperledger to build secure, scalable, and permissioned blockchain networks tailored to your enterprise needs.
Supply Chain Management: Optimize and secure your supply chain operations with transparent, traceable, and tamper-proof blockchain solutions.
Smart Contracts: Develop and deploy robust smart contracts that automate business processes with precision and reliability.
Solana Development:
."
          />
          <Card
            num="2"
            reverse={true}
            img={high_performance}
            skill="High-Performance DApps"
            description="
Leverage Solana’s unparalleled speed and low transaction costs to create decentralized applications that scale seamlessly.
Token Development: Launch your custom tokens on Solana, designed for speed, efficiency, and easy integration with the growing Solana ecosystem.
NFT Marketplaces: Build your own NFT marketplace on Solana, offering fast and affordable transactions for creators and collectors"
          />
          <Card
            num="3"
            reverse={false}
            img={smart_contract}
            skill="Smart Contracts & DApps"
            description="
Develop secure and versatile smart contracts on the world’s most popular blockchain platform, Ethereum, powering the decentralized web.
DeFi Platforms: Launch and manage decentralized finance applications that bring innovation and accessibility to global financial systems.
Layer 2 Solutions: Optimize your Ethereum-based applications with Layer 2 scaling solutions, ensuring lower costs and higher efficiency."
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
          // whiteSpace="nowrap"
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
