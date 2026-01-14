import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import { useStore } from "./store"; // 👈 Import Store

export function CustomLoader() {
  const { active, progress } = useProgress();
  const setStarted = useStore((state) => state.setStarted); // 👈 Get action

  const [text, setText] = useState("Initializing...");
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true); // Internal state to hide loader

  // 1. Force 3-second minimum wait
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Update text based on Progress
  useEffect(() => {
    if (progress < 10) setText("Filling up the void...");
    else if (progress < 20) setText("Setting up blocks...");
    else if (progress < 30) setText("Setting up the sun...");
    else if (progress < 40) setText("Oiling up the car...");
    else if (progress < 50) setText("Generating terrain...");
    else if (progress < 60) setText("Polishing pixels...");
    else if (progress < 70) setText("Spawning trees...");
    else if (progress < 80) setText("Constructing the isle...");
    else if (progress < 90) setText("Calibrating the music box...");
    else setText("Waking up the driver...");
  }, [progress]);

  // 3. Logic: Only ready if REAL loading is done AND 3 seconds passed
  const isReady = !active && minTimeElapsed;

  // 4. Handle Start Click
  const handleStart = () => {
    setStarted(true); // Tell the App we started
    setButtonVisible(false); // Hide the loader
  };

  if (!buttonVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "57.14%", // Scaling Fix
        height: "57.14%", // Scaling Fix
        transform: "scale(1.75)", // Scaling Fix
        transformOrigin: "top left",
        background: "#000000",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        transition: "opacity 0.5s ease",
      }}
    >
      <style>
        {`
          @font-face {
            font-family: 'Supercell';
            src: url('/Supercell-Magic Regular/Supercell-Magic Regular.ttf') format('truetype');
          }
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

      <h2
        style={{
          fontFamily: "'Supercell', serif",
          fontSize: "24px",
          marginBottom: "20px",
          textAlign: "center",
          textShadow: "2px 2px 0px #4a4a4a",
          letterSpacing: "1px",
        }}
      >
        {isReady ? "Ready to Explore!" : text}
      </h2>

      {!isReady ? (
        <>
          <div
            style={{
              width: "300px",
              height: "20px",
              border: "3px solid white",
              borderRadius: "10px",
              padding: "2px",
              boxShadow: "0 0 10px rgba(255,255,255,0.2)",
            }}
          >
            <div
              style={{
                width: `${!active ? 100 : progress}%`,
                height: "100%",
                backgroundColor: "#737ee8",
                borderRadius: "6px",
                transition: "width 0.2s ease-out",
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "'Supercell', sans-serif",
              fontSize: "14px",
              marginTop: "10px",
              opacity: 0.8,
            }}
          >
            {Math.round(!active ? 100 : progress)}%
          </p>
        </>
      ) : (
        <button
          onClick={handleStart}
          style={{
            fontFamily: "'Supercell', serif",
            fontSize: "20px",
            padding: "10px 40px",
            backgroundColor: "transparent",
            color: "white",
            border: "4px solid white",
            borderRadius: "12px",
            cursor: "pointer",
            textShadow: "2px 2px 0px #000",
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
            animation: "pulse 2s infinite ease-in-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "#000";
            e.currentTarget.style.textShadow = "none";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "white";
            e.currentTarget.style.textShadow = "2px 2px 0px #000";
          }}
        >
          START
        </button>
      )}
    </div>
  );
}
