import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ forMobile }) => {
  const computer = useGLTF("./planet_earth/scene.gltf");
  console.log(forMobile);
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={0.75} />
      <spotLight
        position={[-40, 70, 40]}
        angle={0.34}
        penumbra={1}
        intensity={1}
        castShadow:true
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={forMobile ? 0.35 : 0.75}
        position={forMobile ? [0, -1.7, -1.1] : [0, -3.75, -1.3]}
        rotation={[-0.01, -0.5, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [forMobile, setForMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setForMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setForMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 2, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers forMobile={forMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
