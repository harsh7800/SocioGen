import React, { useContext } from "react";
import "./style.scss";
import Context from "../../Context";
import { Box } from "@chakra-ui/react";
// import CustomCursorContext from "./context/CustomCursorContext";

// TODO: Hide if cursor not moved
const CustomCursor = () => {
  // const { type } = useContext(CustomCursorContext);
  const { over } = useContext(Context);
  const secondaryCursor = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current?.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current?.clientHeight / 2;
    });

    return () => {};
  }, []);

  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursor && secondaryCursor.current)
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);
  return (
    <Box
      display={{ base: "none", xl: "block" }}
      className={`cursor-wrapper default`}
    >
      {/* {!over ? (
        <div className="secondary-cursor" ref={secondaryCursor}></div>
      ) : null} */}
      <div
        className="secondary-cursor"
        ref={secondaryCursor}
        style={
          over
            ? { opacity: 0, transition: "all .5s ease-in no-repeat" }
            : { opacity: 1, transition: "all .5s ease-in no-repeat" }
        }
      ></div>
    </Box>
  );
};

export default CustomCursor;
