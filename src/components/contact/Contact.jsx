import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Contact_illustration from "../../assets/form_illustration.jpg";
import { useMediaQuery } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
import Context from "../../Context";
import emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const profile = <i className="fa-solid fa-user"></i>;
  const email = <i className="fa-solid fa-envelope"></i>;
  const phone = <i className="fa-solid fa-phone"></i>;
  const whatsapp = (
    <i className="fa-brands fa-whatsapp" style={{ color: "white" }}></i>
  );
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const { contactTitle } = useContext(Context);
  const ImageRef = useRef();
  const subheadingRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const PhoneRef = useRef();
  const msgRef = useRef();
  const branding = useRef();
  const button = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const emailContents = {
    firstname: firstName,
    lastname: lastName,
    email: Email,
    phoneNumber: phoneNum,
    message: message,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_326pvig",
        "template_vr4dvyf",
        emailContents,
        "DGyFBPxebdpPb8MEf"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Messaage Sent Successfully");
          // window.location.reload();
        },
        (error) => {
          alert(error.text);
        }
      );
    form.current.reset();
  };
  useEffect(() => {
    gsap.fromTo(
      contactTitle.current,
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
          trigger: contactTitle.current,
          start: "100 600",
        },
        delay: 1,
      }
    );
    gsap.fromTo(
      ImageRef.current,
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
          trigger: contactTitle.current,
          start: "100 600",
        },
        delay: 1,
      }
    );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: subheadingRef.current,
        start: "100 600",
      },
    });
    timeline
      .fromTo(
        subheadingRef.current?.children,
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

          stagger: 0.1,
          delay: 2,
        }
      )
      .fromTo(
        nameRef.current?.children,
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
          stagger: 0.1,
        }
      )
      .fromTo(
        [emailRef.current, PhoneRef.current, msgRef.current],
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
          stagger: 0.1,
        }
      )
      .to(button.current, {
        duration: 1,
        ease: "power3.out",
        y: "0",
        opacity: 1,
      })
      .fromTo(
        branding.current?.children,
        {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          y: "-50",
        },
        {
          opacity: 0.3,
          duration: 1,
          ease: "power3.out",
          y: "0",
          stagger: 0.1,
          delay: 1,
        }
      );
  }, [contactTitle, ImageRef, subheadingRef]);
  return (
    <Box
      justify="center"
      align="center"
      w="100svw"
      h="fit-content"
      position="relative"
      bg="black"
      mt="2em"
    >
      <Text
        mt="1em"
        w="100svw"
        ml={{ base: "1em", md: "4.5em" }}
        fontSize={{ base: "1.3em", sm: "", lg: "1.5em", xl: "2em" }}
        fontFamily="Roboto"
        fontWeight="500"
        color="white"
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
        ref={contactTitle}
      >
        Contact
      </Text>
      <Flex
        mt="3em"
        w={isLargerThan1000 ? "80svw" : "95svw"}
        h={{ base: "fit-content", lg: "40em" }}
        justify="center"
        align="center"
        // border="2px solid red"
        px="2em"
        borderRadius="5px"
        bg="white"
        gap="2em"
      >
        {isLargerThan1000 ? (
          <Flex
            ref={ImageRef}
            direction="column"
            justify="space-between"
            gap="2em"
            align="center"
            // border="2px solid black"
            overflow="visible"
          >
            <Img w={{ base: "25em", lg: "30em" }} src={Contact_illustration} />
            {/* <Flex gap="2em" overflow="visible">
              <Btn className="Btn-1" svg="instagram" name="instagram" />
              <Btn className="Btn-2" name="Twitter" svg="twitter" />
              <Btn className="Btn-3" name="Discord" svg="discord" />
            </Flex> */}
          </Flex>
        ) : null}
        <Flex
          as="form"
          ref={form}
          onSubmit={sendEmail}
          direction="column"
          h={{ base: "fit-content", lg: "40em" }}
          py={{ base: "2em", lg: "0" }}
          align="center"
          justify="center"
          overflow="visible"
          gap="2em"
        >
          <Box ref={subheadingRef}>
            <Text fontFamily="Manrope" fontWeight="700" fontSize="30px">
              Lets <span style={{ color: "red" }}>Connect</span> !
            </Text>
            <Text fontFamily="Manrope">
              We will be responding you asap, Thank you for your patience
            </Text>
          </Box>
          <Flex
            w={{ base: "80svw", lg: "35svw" }}
            flexDirection={{ base: "column", md: "row" }}
            gap="1em"
            align="center"
            ref={nameRef}
          >
            <InputGroup alignItems="center" overflow="visible">
              <InputLeftAddon h="3em" bg="none" borderRight="none">
                {profile}
              </InputLeftAddon>
              <Input
                isRequired
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                size="lg"
                borderLeft="none"
                _placeholder={{ fontFamily: "Manrope" }}
                inputMode="text"
              />
            </InputGroup>
            <InputGroup alignItems="center" overflow="visible">
              <InputLeftAddon h="3em" bg="none" borderRight="none">
                {profile}
              </InputLeftAddon>
              <Input
                isRequired
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                size="lg"
                borderLeft="none"
                _placeholder={{ fontFamily: "Manrope" }}
                inputMode="text"
              />
            </InputGroup>
          </Flex>
          <InputGroup alignItems="center" ref={emailRef} overflow="visible">
            <InputLeftAddon h="3em" bg="none" borderRight="none">
              {email}
            </InputLeftAddon>
            <Input
              isRequired
              value={Email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              size="lg"
              borderLeft="none"
              inputMode="email"
              _placeholder={{ fontFamily: "Manrope" }}
            />
          </InputGroup>
          <Text
            w={{ base: "80svw", lg: "35svw" }}
            pl="1em"
            mt="-1em"
            zIndex="10"
            position="relative"
            color="red"
            fontSize="1em"
            display={Email === "" || Email.endsWith(".com") ? "none" : "block"}
            textAlign="start"
            fontWeight="700"
            fontFamily="Manrope"
          >
            Enter a valid Email
          </Text>
          <InputGroup alignItems="center" ref={PhoneRef} overflow="visible">
            <InputLeftAddon h="3em" bg="none" borderRight="none">
              {phone}
            </InputLeftAddon>
            <Input
              isRequired
              type="number"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              placeholder="Phone"
              size="lg"
              borderLeft="none"
              _placeholder={{ fontFamily: "Manrope" }}
              inputMode="numeric"
            />
          </InputGroup>
          <Text
            w={{ base: "80svw", lg: "35svw" }}
            pl="1em"
            mt="-1em"
            zIndex="10"
            position="relative"
            color="red"
            fontSize="1em"
            textAlign="start"
            fontWeight="700"
            fontFamily="Manrope"
            display={
              phoneNum === "" || phoneNum.length === 10 ? "none" : "block"
            }
          >
            {phoneNum.length === 10 ? "" : "Enter a valid number"}
          </Text>
          <Textarea
            overflow="visible"
            ref={msgRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            alignItems="center"
            position="relative"
            // position="absolute"
            h="10em"
            inputMode="text"
            opacity=".5"
            fontFamily="Manrope"
            placeholder="Please describe your need"
            isRequired
          />
          <Button
            isDisabled={
              firstName === "" ||
              lastName === "" ||
              message === "" ||
              email === "" ||
              !Email.endsWith(".com")
            }
            value="Send"
            type="submit"
            fontFamily="Poppins"
            borderRadius="25px"
            bg="red.500"
            color="white"
            _hover={{ transform: "scale(1.2)" }}
            ref={button}
            opacity={
              firstName === "" ||
              lastName === "" ||
              message === "" ||
              email === "" ||
              !Email.endsWith(".com")
                ? 0.5
                : 1
            }
          >
            Submit
          </Button>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" ref={branding}>
        <Text
          fontSize={{ base: "4em", sm: "7em", md: "10em", lg: "13em" }}
          fontWeight="500"
          fontFamily="Manrope"
          color="white"
        >
          S
        </Text>

        <Text
          fontSize={{ base: "4em", sm: "7em", md: "10em", lg: "13em" }}
          fontWeight="500"
          fontFamily="Manrope"
          color="white"
        >
          O
        </Text>

        <Text
          fontSize={{ base: "4em", sm: "7em", md: "10em", lg: "13em" }}
          fontWeight="500"
          fontFamily="Manrope"
          color="white"
        >
          C
        </Text>

        <Text
          fontSize={{ base: "4em", sm: "7em", md: "10em", lg: "13em" }}
          fontWeight="500"
          fontFamily="Manrope"
          color="white"
        >
          I
        </Text>
        <Text
          fontSize={{ base: "4em", sm: "7em", md: "10em", lg: "13em" }}
          fontWeight="500"
          fontFamily="Manrope"
          color="white"
        >
          O
        </Text>
        <Text
          fontSize={{ base: "4em", sm: "7em", md: "10em", lg: "13em" }}
          fontWeight="500"
          fontFamily="Manrope"
          color="white"
        >
          G
        </Text>
        <Text
          fontSize={{ base: "4em", sm: "7em", md: "10em", lg: "13em" }}
          fontWeight="500"
          fontFamily="Manrope"
          color="white"
        >
          E
        </Text>
        <Text
          fontSize={{ base: "4em", sm: "7em", md: "10em", lg: "13em" }}
          fontWeight="500"
          fontFamily="Manrope"
          color="white"
        >
          N
        </Text>
      </Flex>
      <Flex
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=%2B918010193621&text&type=phone_number&app_absent=0",
            "_black"
          )
        }
        bg="#25D366"
        w="50px"
        borderRadius="50%"
        cursor="pointer"
        h="50px"
        position="fixed"
        right="3%"
        bottom="5%"
        fontSize="35px"
        justify="center"
        align="center"
        color="#ffffff"
      >
        {whatsapp}
      </Flex>
    </Box>
  );
};

export default Contact;
