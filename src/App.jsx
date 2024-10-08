import { Box, Flex, Text } from "@chakra-ui/react";
import "./App.css";
// import CustomCursor from "./components/customCursor";
// import { Box } from "@chakra-ui/react";
import Btn from "./components/elements/Btn";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import { useContext, useEffect, useRef, useState } from "react";
import Process from "./components/process/Process";
import TechStack from "./components/technologies/TechStack";
// import Career from "./components/carrer/Career";
import Contact from "./components/contact/Contact";
import Context from "./Context";
import { useMediaQuery } from "@chakra-ui/react";
// import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import IframeResizer from "iframe-resizer-react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const wrapper = useRef();
  const [over, setOver] = useState(false);
  const navRef = useRef();
  const headingRef = useRef();
  const bannerImgRef = useRef();
  const overlayRef = useRef();
  const socials = useRef();
  const aboutTitle = useRef();
  const servicesTitle = useRef();
  const processTitle = useRef();
  const contactTitle = useRef();
  const careerTitle = useRef();
  const name1 = useRef();
  // const name2 = useRef();
  const hamburgerRef = useRef();
  // const nameWrapper = useRef();

  const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);
  useEffect(() => {
    // window.onload = () => {
    setloading(false); // Set loading to false to trigger the animation

    const timeLine = gsap.timeline({});

    const scroll = timeLine
      .to(name1.current, {
        x: 0,
        opacity: 1,
        delay: 1,
        ease: "Power.Out",
        duration: 0.5,
      })
      // .to(name2.current, {
      //   x: 0,
      //   opacity: 1,
      //   delay: 0.5,
      //   ease: "Power.Out",
      //   duration: 0.5,
      // })
      .to([name1.current], {
        opacity: 0,
        ease: "Power.Out",
        duration: 0.5,
        delay: 0.5,
      })
      .to(overlayRef.current.children, {
        duration: 0.6,
        delay: 0.5,
        top: "-100%",
        ease: "power3.in",
        stagger: 0.2,
      })
      .fromTo(
        navRef.current?.children,
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
          stagger: 0.1, // Adjust the stagger value to control the spacing between each item
          delay: 2,
        }
      )
      .fromTo(
        hamburgerRef.current,
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
        }
      )
      .fromTo(
        headingRef.current?.children,
        { opacity: 0, duration: 0.5, ease: "power3.out", y: -10 },
        { opacity: 1, duration: 0.5, ease: "power3.out", y: 10, stagger: 0.1 }
      )
      .fromTo(
        bannerImgRef.current,
        {
          opacity: 0,
          ease: "power3.out",
          transform: "scale(0)",
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          transform: "scale(1)",
        }
      );
    // .fromTo(
    //   socials.current?.children,
    //   {
    //     opacity: 0,
    //     duration: 1,
    //     ease: "power3.out",
    //     y: "-100",
    //   },
    //   {
    //     opacity: 1,
    //     duration: 0.5,
    //     ease: "power1.out",
    //     y: "0",
    //     stagger: 1,
    //   }
    // );
    return () => {
      scroll.kill();
    };
    // };
  }, [loading]);
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const pageBounds = wrapper.current?.getBoundingClientRect();
  //     if (
  //       e?.clientX >= pageBounds.left &&
  //       e?.clientX <= pageBounds.right &&
  //       e?.clientY >= pageBounds.top &&
  //       e?.clientY <= pageBounds.bottom
  //     ) {
  //       const newX = e?.clientX - window.innerWidth / 2;
  //       const newY = e?.clientY - window.innerHeight / 2;
  //       setX(newX);
  //       setY(newY);
  //     }
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  // }, []);
  return (
    <Context.Provider
      value={{
        over,
        setOver,
        navRef,
        headingRef,
        bannerImgRef,
        overlayRef,
        loading,
        socials,
        aboutTitle,
        servicesTitle,
        processTitle,
        contactTitle,
        careerTitle,
        hamburgerRef,
      }}
    >
      <Box position="relative" ref={wrapper}>
        <Box ref={overlayRef}>
          <Flex
            position="fixed"
            zIndex="102"
            bg="black"
            w="100svw"
            h="100dvh"
            justify="center"
            align="center"
          >
            <Text
              ref={name1}
              opacity="0"
              transform="translateX(-50px)"
              color="white"
              fontFamily="Shantell Sans"
              fontWeight="800"
              fontSize="25px"
            >
              Gloriants
            </Text>
            {/* <Text
              opacity="0"
              transform="translateX(-50px)"
              ref={name2}
              color="red"
              fontFamily="Shantell Sans"
              fontWeight="800"
              fontSize="25px"
            >
              Gen
            </Text> */}
          </Flex>
          <Box
            position="fixed"
            zIndex="101"
            bg="red"
            w="100svw"
            h="100dvh"
          ></Box>
        </Box>
        {/* {isLargerThan700 ? <CustomCursor size="small" /> : null} */}
        <Navbar />
        <Home />
        <About />
        {isLargerThan700 ? <SocialHandles /> : null}
        <Services />
        <Process />
        <TechStack />
        {/* <Career /> */}
        {/* <Box> */}
        <IframeResizer
          src="https://embed-v2.testimonial.to/w/sociogen?theme=light&card=base&loadMore=on&initialCount=20&tag=all"
          style={{ width: "1px", minWidth: "100%", height: "400px" }}
        />
        {/* </Box> */}
        <Contact />
      </Box>
    </Context.Provider>
  );
}

export default App;

const SocialHandles = () => {
  const { socials } = useContext(Context);
  return (
    <Flex
      display="none"
      ref={socials}
      direction="column"
      justify="center"
      align="center"
      gap="1em"
      position="fixed"
      right="1%"
      top="40%"
      zIndex="1000"
    >
      <Btn
        // link="www.sixpep.com"
        className="Btn-1"
        svg="instagram"
        name="instagram"
      />

      <Btn
        // link="www.sixpep.com"
        className="Btn-2"
        name="Twitter"
        svg="twitter"
      />

      <Btn link="" className="Btn-3" name="Discord" svg="discord" />
    </Flex>
  );
};
