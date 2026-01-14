import React from "react";
import { useStore } from "./store";

export function Overlay() {
  const page = useStore((state) => state.page);
  const close = useStore((state) => state.close);
  const isOpen = page !== "intro";

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        // SCALE EVERYTHING 1.5x
        width: "66.66vw", // 100 / 1.5
        height: "66.66vh", // 100 / 1.5
        transform: "scale(1.5)",
        transformOrigin: "top left",
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      <style>
        {`
          @font-face {
            font-family: 'Supercell';
            src: url('/Supercell-Magic Regular/Supercell-Magic Regular.ttf') format('truetype');
          }
          
          /* --- CUSTOM SCROLLBAR CSS --- */
          ::-webkit-scrollbar {
            width: 8px; 
          }
          ::-webkit-scrollbar-track {
            background: transparent; 
            margin: 20px 0; 
          }
          ::-webkit-scrollbar-thumb {
            background: #dcd0e5; 
            border-radius: 20px; 
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #6a5a7a; 
          }
          ::-webkit-scrollbar-button {
            display: none;
          }
        `}
      </style>

      {/* --- TITLE (Adjusted Size) --- */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          pointerEvents: "auto",
        }}
      >
        <h1
          style={{
            fontFamily: "'Supercell', serif",
            // 👇 SIZE TWEAK: 40px -> 34px
            fontSize: "34px",
            fontWeight: "normal",
            color: "#ffffff",
            margin: 0,
            lineHeight: "1.2",
            textShadow: "3px 3px 0px #000000",
            letterSpacing: "1px",
          }}
        >
          SHREY-SCAPE
        </h1>
        <p
          style={{
            fontFamily: "'Supercell', sans-serif",
            // 👇 SIZE TWEAK: 16px -> 14px
            fontSize: "14px",
            color: "#ffffff",
            margin: "2px 0 0 2px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textShadow: "2px 2px 0px #000000",
          }}
        >
          ISLE
        </p>
      </div>

      {/* --- MODAL CONTAINER --- */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {isOpen && (
          <div
            style={{
              width: "90%",
              maxWidth: "600px",
              maxHeight: "55vh",

              backgroundColor: "#f0ebf5",
              borderRadius: "30px",
              padding: "0",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
              pointerEvents: "auto",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ flex: 1, overflowY: "auto", padding: "40px 50px" }}>
              {/* --- ABOUT PAGE --- */}
              {page === "about" && (
                <div
                  style={{
                    display: "flex",
                    gap: "60px",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 150px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        backgroundColor: "#ccc",
                        backgroundImage: 'url("/pfp.jpeg")',
                        backgroundSize: "cover",
                        backgroundPosition: "10% 10%",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        border: "4px solid white",
                      }}
                    ></div>
                    <p
                      style={{
                        fontStyle: "italic",
                        fontSize: "11px",
                        color: "#666",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      That's me!
                    </p>
                    <div style={{ marginTop: "15px", textAlign: "center" }}>
                      <h3
                        style={{
                          fontFamily: "serif",
                          fontSize: "14px",
                          color: "#4a4a4a",
                          margin: "0 0 8px 0",
                          fontWeight: "bold",
                        }}
                      >
                        Contact Me:
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "15px",
                        }}
                      >
                        <SocialButton href="mailto:bagulshreyas517@gmail.com">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24"
                            height="24"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </SocialButton>
                        <SocialButton href="https://www.linkedin.com/in/shreyas517">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="22"
                            height="22"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </SocialButton>
                        <SocialButton href="https://github.com/WetPlasma">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="22"
                            height="22"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </SocialButton>

                        {/* 👇 FIXED INSTAGRAM ICON */}
                        <SocialButton href="https://www.instagram.com/shreyassomewhat/">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="22"
                            height="22"
                          >
                            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          </svg>
                        </SocialButton>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      color: "#4a4a4a",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <h1
                      style={{
                        textAlign: "center",
                        fontFamily: "'Supercell', serif",
                        fontSize: "30px",
                        letterSpacing: "1px",
                        color: "#6a5a7a",
                        marginTop: 0,
                      }}
                    >
                      ABOUT ME
                    </h1>
                    <h2
                      style={{
                        fontFamily: "serif",
                        fontSize: "22px",
                        color: "#4a4a4a",
                        marginTop: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      Hi!
                    </h2>
                    <div style={{ fontSize: "13px", lineHeight: "1.6" }}>
                      <p style={{ marginBottom: "15px" }}>
                        I'm <strong>Shreyas</strong>. Welcome to my 3D
                        interactive portfolio!
                      </p>
                      <p style={{ marginBottom: "15px" }}>
                        I am a developer passionate about creating immersive web
                        experiences using React Three Fiber and Blender.
                      </p>
                      <p>
                        I'm currently pursuing my Bachelor's in Information
                        Technology at K.K.Wagh, Nashik, Maharashtra, India.
                      </p>
                      <p>
                        When I'm not coding or modeling low-poly worlds, you can
                        find me gaming or exploring new tech stacks.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* --- PROJECTS PAGE --- */}
              {page === "projects" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "50px",
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      fontFamily: "'Supercell', serif",
                      fontSize: "30px",
                      letterSpacing: "1px",
                      color: "#6a5a7a",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                    PROJECTS
                  </h1>
                  <section>
                    <h2
                      style={{
                        fontFamily: "serif",
                        fontSize: "20px",
                        color: "#4a4a4a",
                        margin: "0 0 15px 0",
                      }}
                    >
                      Skillset
                    </h2>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                    >
                      {[
                        "Blender",
                        "Three.js",
                        "React",
                        "R3F",
                        "MindAR",
                        "AR.js",
                        "Python",
                        "C",
                        "C++",
                      ].map((skill) => (
                        <div
                          key={skill}
                          style={{
                            padding: "8px 16px",
                            backgroundColor: "white",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#6a5a7a",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                            border: "1px solid rgba(106, 90, 122, 0.1)",
                          }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h2
                      style={{
                        fontFamily: "serif",
                        fontSize: "26px",
                        color: "#6a5a7a",
                        margin: "0 0 15px 0",
                      }}
                    >
                      Isle-folio
                    </h2>
                    <p
                      style={{
                        lineHeight: "1.5",
                        fontSize: "13px",
                        marginBottom: "20px",
                        maxWidth: "600px",
                      }}
                    >
                      A 3D interactive island built with three.js library react
                      Three Fiber, including low-poly models created with
                      blender.
                    </p>
                    <div style={{ width: "100%", height: "200px" }}>
                      <ProjectCard
                        image="/project1.jpg"
                        title=""
                        height="100%"
                      />
                    </div>
                  </section>
                  <section>
                    <h2
                      style={{
                        fontFamily: "serif",
                        fontSize: "26px",
                        color: "#6a5a7a",
                        margin: "0 0 15px 0",
                      }}
                    >
                      3D Renders
                    </h2>
                    <p
                      style={{
                        lineHeight: "1.5",
                        fontSize: "13px",
                        marginBottom: "20px",
                        maxWidth: "600px",
                      }}
                    >
                      Here are my 3D renders made with modeling. Check out more
                      on my Instagram: <br />
                      <a
                        href="https://www.instagram.com/caliberr.3d/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#6a5a7a",
                          fontWeight: "bold",
                          textDecoration: "none",
                          borderBottom: "1px solid #6a5a7a",
                        }}
                      >
                        @Caliberr.3d
                      </a>
                    </p>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "15px",
                      }}
                    >
                      <ProjectCard
                        image="/render1.png"
                        title=""
                        height="130px"
                      />
                      <ProjectCard
                        image="/render2.jpg"
                        title=""
                        height="130px"
                      />
                      <ProjectCard
                        image="/render3.jpg"
                        title=""
                        height="130px"
                      />
                      <ProjectCard
                        image="/render4.jpg"
                        title=""
                        height="130px"
                      />
                      <ProjectCard
                        image="/render5.jpg"
                        title=""
                        height="130px"
                      />
                      <ProjectCard
                        image="/render6.jpg"
                        title=""
                        height="130px"
                      />
                    </div>
                  </section>
                </div>
              )}
            </div>

            <div
              style={{
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
              }}
            >
              <button
                onClick={close}
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "#6a5a7a",
                  color: "white",
                  fontSize: "18px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SocialButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#6a5a7a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s, color 0.2s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.2)";
        e.currentTarget.style.color = "#4a3a5a";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.color = "#6a5a7a";
      }}
    >
      {children}
    </a>
  );
}

function ProjectCard({ color = "#ddd", image, title, height = "130px" }) {
  return (
    <div
      style={{
        backgroundColor: color,
        backgroundImage: image ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: height,
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: image ? "white" : "rgba(0,0,0,0.5)",
        textShadow: image ? "0 2px 4px rgba(0,0,0,0.8)" : "none",
        fontSize: "13px",
        cursor: "pointer",
        transition: "transform 0.2s, opacity 0.2s",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.opacity = "0.9";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.opacity = "1";
      }}
    >
      {title}
    </div>
  );
}
