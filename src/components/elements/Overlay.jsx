import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import Context from "../../Context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Overlay = () => {
  const { overlayRef, loading } = useContext(Context);

  // useEffect(() => {
  //   const timeLine = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: overlayRef.current,
  //     },
  //   });
  //   const overlayAnimation = timeLine
  //     .fromTo(
  //       overlayRef.current.children,
  //       { duration: 1, delay: 1, top: 0, ease: "power3.in" },
  //       {
  //         duration: 1, delay: 1, top: "-100%", ease: "power3.in", stagger: 0.3, scrollTrigger: {
  //         trigger: overlayRef.current
  //       }}
  //     )

  //   return () => {
  //     overlayAnimation.kill();
  //   };
  // }, []);
  return (
    <Box
      className="overlay-wrapper"
      border="2px solid black"
      w="100svw"
      position="relative"
      h="100dvh"
      ref={overlayRef}
      bg="transparent"
    >
      <Box
        w="100svw"
        h="100dvh"
        bg="black"
        position="absolute"
        zIndex="3"
      ></Box>
      <Box
        w="100svw"
        h="100dvh"
        bg="white"
        position="absolute"
        zIndex="2"
      ></Box>
      <Box w="100svw" h="100dvh" bg="red" position="absolute" zIndex="1"></Box>
    </Box>
  );
};

export default Overlay;
