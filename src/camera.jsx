import React, { useRef, useMemo } from "react";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import { locations } from "./locations";
import { useStore } from "./store";

export function Camera() {
  const cameraRef = useRef();

  // Connect to store to lock rotation when menu is open
  const page = useStore((state) => state.page);
  const isMenuOpen = page !== "intro";

  // Calculate "Golden Angle"
  const initialAzimuth = useMemo(() => {
    const { position, target } = locations.intro;
    const x = position[0] - target[0];
    const z = position[2] - target[2];
    return Math.atan2(x, z);
  }, []);

  return (
    <>
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        position={locations.intro.position} // Hardcoded from your saved locations
        zoom={locations.intro.zoom}
        near={-50}
        far={200}
      />

      <OrbitControls
        target={locations.intro.target}
        // Lock interaction if menu is open
        enableRotate={!isMenuOpen}
        enableZoom={!isMenuOpen}
        enablePan={false}
        // Visual limits
        minAzimuthAngle={initialAzimuth - 0.2}
        maxAzimuthAngle={initialAzimuth + 0.2}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 3}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </>
  );
}
