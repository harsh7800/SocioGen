import { Box, Flex, Img, Text } from "@chakra-ui/react";
import code from "../../assets/code.png";
import review from "../../assets/review.png";
import launch from "../../assets/launch.png";
import design from "../../assets/design.png";
import prototype from "../../assets/prototype.png";
import arrow from "../../assets/arrow.png";
import PropTypes from "prop-types";
import { SimpleGrid } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import Context from "../../Context";
gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const title = useRef();
  const { processTitle } = useContext(Context);

  useEffect(() => {
    gsap.fromTo(
      title.current,
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
          trigger: title.current,
          start: "100 600",
        },
      }
    );

    gsap.fromTo(
      processTitle.current?.children,
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
          trigger: processTitle.current?.children,
          start: "100 600",
        },
        delay: 0.5,
        stagger: 0.3,
      }
    );
  }, [title, processTitle]);

  return (
    <Flex
      direction="column"
      justifyContent="space-around"
      align="center"
      id="About"
      as="div"
      w="100svw"
      position="relative"
      mt="3em"
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
        ref={title}
      >
        Process
      </Text>
      <SimpleGrid
        ref={processTitle}
        mt="3em"
        // columns={[1, 2, 3, 4, 5]}
        minChildWidth="15em"
        w="90svw"
        justifyItems="center"
        gap="1.5vw"
        overflow="visible"
        alignItems="flex-start"
      >
        <Card
          img={design}
          title="Design"
          description="We meticulously analyze your vision and requirements to create visually captivating and user-friendly designs. Through iterative feedback and refinement, we deliver a final product that exceeds expectations, captivating your target audience."
        />
        <Card
          img={prototype}
          title="Prototype - Testing"
          description="After engaging in a thorough discussion to understand your idea. Then, we proceed to design and prototype it, enabling you to experience and evaluate its functionality firsthand with a simple click."
        />

        <Card
          img={code}
          title="Develop"
          description="Our development process brings your design to life, utilizing cutting-edge technologies and best practices to create a robust and functional solution. With a focus on quality and efficiency, we ensure seamless implementation and timely delivery of your project."
        />

        <Card
          img={review}
          title="Review"
          description="We value your input and offer a thorough review process, enabling you to provide feedback and request any desired changes to ensure the solution meets your exact specifications. Your satisfaction is our priority."
        />

        <Card
          HideArrow={true}
          img={launch}
          title="Launch"
          description="Once the solution is refined to your satisfaction, we assist in the smooth launch, ensuring all necessary preparations are made and providing support to ensure a successful deployment. Your project's successful launch is our ultimate goal."
        />
      </SimpleGrid>
    </Flex>
  );
};

export default Process;

const Card = ({ title, description, img, HideArrow }) => {
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    HideArrow: PropTypes.string.boolean,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  };
  return (
    <Flex
      align="center"
      gap="1em"
      flexDirection={{ base: "column", sm: "row" }}
      overflow="visible"
      h="auto"
    >
      <Box w="15em" position="relative">
        <Img src={img} w="65px" />
        <Text mt=".5em" fontWeight="700" fontFamily="Poppins">
          {title}
        </Text>
        <Text
          mt=".5em"
          fontWeight="500"
          textAlign="justify"
          fontFamily="Manrope"
          fontSize=".9em"
        >
          {description}
        </Text>
      </Box>
      {!HideArrow ? (
        <Img
          transform={{ base: "rotate(90deg)", sm: "none" }}
          w="2em"
          h="1.5em"
          src={arrow}
        />
      ) : null}
    </Flex>
  );
};
