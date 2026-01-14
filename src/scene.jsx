import React from "react";
import { Center } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useControls } from "leva";
import { Model } from "./assets/isotry";

export function Scene() {
  const { bgColor } = useControls("Environment", {
    bgColor: "#9bad57", // Updated to your specific Green
  });

  return (
    <>
      <color attach="background" args={[bgColor]} />

      <Center position={[-0.5, 0, -0.5]}>
        <Model />
      </Center>

      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} mipmapBlur intensity={1.2} radius={0.5} />
      </EffectComposer>
    </>
  );
}
