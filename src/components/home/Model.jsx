// import React from 'react'
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { useRef } from "react";

const Keyboard = (props) => {
  const { scene } = useGLTF("/keyboard.glb");
  return <primitive object={scene} {...props} />;
};

const Model = () => {
  const canvasRef = useRef(null);

  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 90 }} ref={canvasRef}>
      <color />
      <PresentationControls
        speed={1.5}
        global
        zoom={1}
        // polar={[-0.1, Math.PI / 4]}
      >
        <Stage adjustCamera environment={null}>
          <Keyboard scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default Model;
