import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Camera } from "./camera";
import { Scene } from "./scene";
import { Light } from "./light";
import { Overlay } from "./overlay";
import { CustomLoader } from "./CustomLoader";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#1a1a1a" }}>
      <CustomLoader />

      {/* 👇 SCALING FIX: fov lowered to ~17 (30 / 1.75) */}
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 17 }}>
        <Suspense fallback={null}>
          <Camera />
          <Light />
          <Scene />
        </Suspense>
      </Canvas>

      <Overlay />
    </div>
  );
}
