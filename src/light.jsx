import React from "react";

export function Light() {
  return (
    <>
      {/* 1. Fill Light: Softened so it doesn't wash out shadows */}
      <hemisphereLight
        skyColor="#b1e1ff"
        groundColor="#000000"
        intensity={0.5}
      />

      {/* 2. Main Sun: High intensity to create crisp shadows */}
      <directionalLight
        position={[10, 20, 10]}
        intensity={2.5} // Increased brightness
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0005} // Adjusted to prevent shadow detachment
      >
        <orthographicCamera attach="shadow-camera" args={[-50, 50, 50, -50]} />
      </directionalLight>
    </>
  );
}
