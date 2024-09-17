import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import "./TextCrousel.css";

const TextCrousel = () => {
  const text1 = useRef();
  const text2 = useRef();
  useEffect(() => {
    const elts = {
      text1: text1.current,
      text2: text2.current,
    };

    const texts = ["Block Chain ", "Hyperledger Solutions", "Solana Solutions"];

    const morphTime = 1;
    const cooldownTime = 0.75;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }, []);
  return (
    <Box
      pl={{ base: ".8em", lg: "1em" }}
      // pt={{ base: "1.8em", sm: "2em", md: "1.5em", lg: "1em", xl: ".5em" }}
      pt={{ base: ".1em", md: ".3em", lg: "1.3em", xl: ".4em" }}
      w={{ base: "13em", md: "auto", xl: "33vw" }}
      h={{ base: "2em", md: "3em", lg: "5em" }}
      overflow="visible"
      textOverflow="ellipsis"
      // border={{ base: "2px solid red", md: "2px solid black" }}
    >
      <Text
        // textAlign="left"
        //   w="fit-content"
        id="container"
        fontSize={{ base: "20px", sm: "20px", md: "25px", xl: "3vw" }}
      >
        <span id="text1" ref={text1} style={{ color: "red" }}></span>
        <span id="text2" ref={text2} style={{ color: "red" }}></span>
      </Text>

      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </Box>
  );
};

export default TextCrousel;
