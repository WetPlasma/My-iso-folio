import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations, useCursor } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber"; // 👈 Added useLoader
import { AudioLoader } from "three"; // 👈 Added AudioLoader
import * as THREE from "three";
import { useStore } from "../store";

// --- POP COMPONENT ---
function Pop({ children, scale = 1, onClick, ...props }) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);
  useCursor(hovered);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const targetScale = hovered ? scale * 1.1 : scale;
    ref.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      delta * 10
    );
  });

  return (
    <group
      ref={ref}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHover(false);
      }}
      onClick={onClick}
    >
      {children}
    </group>
  );
}

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/isotry.glb");
  const { actions } = useAnimations(animations, group);

  // Store
  const openProjects = useStore((state) => state.openProjects);
  const openAbout = useStore((state) => state.openAbout);
  const started = useStore((state) => state.started); // 👈 Check if Start button clicked

  // --- AUDIO LOADING ---
  // 1. Force the loader to wait for music.mp3
  useLoader(AudioLoader, "/music.mp3");

  // 2. Setup Audio Logic
  const [musicOn, setMusicOn] = useState(true);
  const [audio] = useState(() => new Audio("/music.mp3"));

  useEffect(() => {
    // Only play if the User has clicked START (started === true)
    if (started && musicOn) {
      audio.currentTime = 0;
      audio.volume = 0.5;
      audio
        .play()
        .catch((e) => console.log("Audio play blocked (browser policy):", e));
    } else {
      audio.pause();
    }

    // Animation Sync
    const action = actions["NoteWiggle"] || Object.values(actions)[0];
    if (action) {
      if (started && musicOn) {
        action.reset().fadeIn(0.5).play();
      } else {
        action.fadeOut(0.5);
      }
    }
  }, [started, musicOn, actions, audio]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* ... (SCENE GEOMETRY - COPY EXACTLY AS BEFORE or KEEP WHAT YOU HAD) ... */}
        {/* I'm keeping the structure identical to your previous file for brevity */}

        <mesh
          name="base"
          castShadow
          receiveShadow
          geometry={nodes.base.geometry}
          material={materials["base.002"]}
        />
        <group name="Plane001">
          <mesh
            name="Plane007"
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials["ground.001"]}
          />
          <mesh
            name="Plane007_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials.path}
          />
        </group>
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.water}
          position={[0, -0.047, 0]}
        />

        <group name="lowvpoly_stylized_homeobjcleanermaterialmergergles">
          <mesh
            name="Object_10"
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_11"
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_12"
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_13"
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_14"
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_15"
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_16"
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_17"
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_3"
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_4"
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_5"
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_6"
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_6002"
            castShadow
            receiveShadow
            geometry={nodes.Object_6002.geometry}
            material={materials["Material.001"]}
            position={[0, 0, 3.719]}
          />
          <mesh
            name="Object_7"
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_8"
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_9"
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials["Material.001"]}
          />
        </group>

        {/* HOUSE (Pop ONLY, No Click) */}
        <Pop name="house" position={[-4.022, 1.546, -0.746]}>
          <mesh
            name="Object_0"
            castShadow
            receiveShadow
            geometry={nodes.Object_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Object_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Object_0_1.geometry}
            material={materials["Material.011"]}
          />
        </Pop>

        {/* TREES (Pop ONLY) */}
        <Pop name="Pine5_Pine4_0" position={[-4.683, 0.677, -4.574]}>
          <mesh
            name="Pine5_Pine4_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0_1.geometry}
            material={materials.Pine4}
          />
          <mesh
            name="Pine5_Pine4_0_2"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0_2.geometry}
            material={materials.SmallBranch}
          />
        </Pop>
        <mesh
          name="Pine3_Trunk2_0"
          castShadow
          receiveShadow
          geometry={nodes.Pine3_Trunk2_0.geometry}
          material={materials.Trunk2}
        />
        <Pop name="Pine1_Pine4_0" position={[-4.817, -0.012, 4.438]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pine1_Pine4_0.geometry}
            material={materials.Pine4}
          />
        </Pop>
        <mesh
          name="Pine5_SmallBranch_0004"
          castShadow
          receiveShadow
          geometry={nodes.Pine5_SmallBranch_0004.geometry}
          material={materials.SmallBranch}
        />
        <Pop name="Pine5_Pine4_0004" position={[-4.169, 0.677, -3.242]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0004.geometry}
            material={materials.Pine4}
          />
        </Pop>
        <mesh
          name="Pine5_SmallBranch_0005"
          castShadow
          receiveShadow
          geometry={nodes.Pine5_SmallBranch_0005.geometry}
          material={materials.SmallBranch}
        />
        <Pop name="Pine5_Pine4_0005" position={[-3.216, 0.677, -4.456]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0005.geometry}
            material={materials.Pine4}
          />
        </Pop>
        <mesh
          name="Pine5_SmallBranch_0006"
          castShadow
          receiveShadow
          geometry={nodes.Pine5_SmallBranch_0006.geometry}
          material={materials.SmallBranch}
        />
        <Pop name="Pine5_Pine4_0006" position={[-2.884, 0.677, -2.004]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0006.geometry}
            material={materials.Pine4}
          />
        </Pop>
        <Pop name="Pine5_Pine4_0001" position={[-3.216, 0.677, -4.456]}>
          <mesh
            name="Pine5_Pine4_0008_1"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0008_1.geometry}
            material={materials.Pine4}
          />
          <mesh
            name="Pine5_Pine4_0008_2"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0008_2.geometry}
            material={materials.SmallBranch}
          />
        </Pop>
        <Pop name="Pine5_Pine4_0002" position={[-2.591, 0.671, -3.292]}>
          <mesh
            name="Pine5_Pine4_0009_1"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0009_1.geometry}
            material={materials.Pine4}
          />
          <mesh
            name="Pine5_Pine4_0009_2"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0009_2.geometry}
            material={materials.SmallBranch}
          />
        </Pop>
        <Pop name="Pine5_Pine4_0003" position={[-3.802, 0.988, 1.888]}>
          <mesh
            name="Pine5_Pine4_0010"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0010.geometry}
            material={materials.Pine4}
          />
          <mesh
            name="Pine5_Pine4_0010_1"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0010_1.geometry}
            material={materials.SmallBranch}
          />
        </Pop>
        <Pop name="Pine5_Pine4_0009" position={[-2.357, 0.664, 4.042]}>
          <mesh
            name="Pine5_Pine4_0013"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0013.geometry}
            material={materials.Pine4}
          />
          <mesh
            name="Pine5_Pine4_0013_1"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0013_1.geometry}
            material={materials.SmallBranch}
          />
        </Pop>
        <group name="fence">
          <group name="fenceobjcleanergles001">
            <mesh
              name="Object_2003"
              castShadow
              receiveShadow
              geometry={nodes.Object_2003.geometry}
              material={materials.WoodLog_Plank}
            />
          </group>
        </group>
        <Pop name="Pine5_Pine4_0007" position={[-2.722, 0.988, 2.05]}>
          <mesh
            name="Pine5_Pine4_0014"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0014.geometry}
            material={materials.Pine4}
          />
          <mesh
            name="Pine5_Pine4_0014_1"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0014_1.geometry}
            material={materials.SmallBranch}
          />
        </Pop>
        <Pop name="Pine5_Pine4_0008" position={[-3.617, 0.732, 3.38]}>
          <mesh
            name="Pine5_Pine4_0016"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0016.geometry}
            material={materials.Pine4}
          />
          <mesh
            name="Pine5_Pine4_0016_1"
            castShadow
            receiveShadow
            geometry={nodes.Pine5_Pine4_0016_1.geometry}
            material={materials.SmallBranch}
          />
        </Pop>
        <group name="GLTF_SceneRootNode">
          <group name="Cube001_3" />
          <group name="Cube002_4" />
          <group name="Cube004_5" />
          <group name="Cube005_6" />
          <group name="Cube_0" />
        </group>

        {/* BUSHES (Pop ONLY) */}
        <Pop name="Cube001" position={[1.966, 0.436, -3.773]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.bush}
          />
        </Pop>
        <Pop name="Cube002" position={[-1.811, 0.656, 2.604]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.bush}
          />
        </Pop>

        <group name="Box001" />
        <group name="Box006" />
        <group name="Box007" />
        <group name="Stand">
          <group name="Box">
            <group name="Lid" />
          </group>
        </group>

        {/* MAILBOX (CLICKABLE - ABOUT) */}
        <Pop
          name="mailbox"
          position={[1.606, 1.416, 4.513]}
          scale={1}
          onClick={(e) => {
            e.stopPropagation();
            openAbout();
          }}
        >
          <mesh
            name="Lid_Box_0"
            castShadow
            receiveShadow
            geometry={nodes.Lid_Box_0.geometry}
            material={materials.material}
          />
          <mesh
            name="Lid_Box_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Lid_Box_0_1.geometry}
            material={materials.Brown}
          />
          <mesh
            name="Lid_Box_0_2"
            castShadow
            receiveShadow
            geometry={nodes.Lid_Box_0_2.geometry}
            material={materials.material_2}
          />
        </Pop>

        <group name="sketchboar">
          <group name="root001">
            <group name="GLTF_SceneRootNode001">
              <group name="Support_2">
                <mesh
                  name="Object_8002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8002.geometry}
                  material={materials.Support}
                />
              </group>
              <group name="Wood_Stand_1">
                <mesh
                  name="Object_6003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6003.geometry}
                  material={materials.Wood_Stand}
                />
              </group>
            </group>
          </group>
        </group>

        {/* WHITEBOARD (CLICKABLE - PROJECTS) */}
        <Pop
          name="whiteboard_pop"
          position={[-1.876, 1.894, -4.051]}
          onClick={(e) => {
            e.stopPropagation();
            openProjects();
          }}
        >
          <mesh
            name="whiteboard"
            castShadow
            receiveShadow
            geometry={nodes.whiteboard.geometry}
            material={materials.White_Board}
          />
        </Pop>

        <mesh
          name="mail"
          castShadow
          receiveShadow
          geometry={nodes.mail.geometry}
          material={materials.Material}
          position={[1.612, 1.932, 4.507]}
        />
        <mesh
          name="pier"
          castShadow
          receiveShadow
          geometry={nodes.pier.geometry}
          material={materials.pier}
          position={[2.549, 0.837, -1.683]}
          scale={[0.938, 1.335, 0.562]}
        />

        {/* MUSIC BOX (CLICKABLE - TOGGLE) */}
        <Pop
          name="Musicbox"
          position={[3.093, 0.919, -1.948]}
          rotation={[-Math.PI / 2, 0, 1.758]}
          scale={0.495}
          onClick={(e) => {
            e.stopPropagation();
            setMusicOn(!musicOn);
          }}
        >
          <group
            name="12a618c50f814844a3fb0720c841b45afbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode002">
              <group
                name="Antenna"
                position={[31.458, 59.055, -3.087]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <group
                name="Handle"
                position={[0, 50.08, 0.618]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Handle_Simpsons_Radio_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Handle_Simpsons_Radio_0.geometry}
                  material={materials.Simpsons_Radio}
                />
              </group>
              <group name="Radio" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="Radio_Simpsons_Radio_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Radio_Simpsons_Radio_0.geometry}
                  material={materials.Simpsons_Radio}
                  position={[-0.101, -0.226, 0.461]}
                />
              </group>
            </group>
          </group>
        </Pop>

        {/* MUSIC NOTES (ANIMATED) */}
        <group
          name="music_notes"
          position={[3.254, 1.562, -2.477]}
          rotation={[-Math.PI / 2, 0, 1.858]}
          scale={0.303}
        >
          <group
            name="5a0291bcd079466bb7c95bdda0b72545fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="notes">
              <group
                name="SM_MusicNote_01"
                position={[66.283, 0, 0]}
                scale={1.514}
              >
                <group
                  name="SM_MusicNote_01_lambert3_0"
                  position={[-55.567, 13.253, -4.989]}
                >
                  <mesh
                    name="SM_MusicNote_01_lambert3_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.SM_MusicNote_01_lambert3_0_1.geometry}
                    material={materials.lambert3}
                  />
                  <mesh
                    name="SM_MusicNote_01_lambert3_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.SM_MusicNote_01_lambert3_0_2.geometry}
                    material={materials.lambert1}
                  />
                  <mesh
                    name="SM_MusicNote_01_lambert3_0_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.SM_MusicNote_01_lambert3_0_3.geometry}
                    material={materials.lambert2}
                  />
                </group>
              </group>
              <group
                name="SM_MusicNote_02"
                position={[-47.1, -13.463, 0]}
                scale={2.532}
              />
              <group name="SM_MusicNote_03" />
            </group>
          </group>
        </group>

        {/* CAR (Pop ONLY) */}
        <Pop
          name="car"
          position={[-0.022, 0.948, 2.211]}
          rotation={[-Math.PI / 2, 0, 2.793]}
        >
          <group
            name="9cf5c0df61c04d4d9bc145b59bbe6204fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.002}
          >
            <group name="Object_2">
              <group name="RootNode004">
                <group
                  name="Camera001"
                  position={[735.889, 495.831, 692.579]}
                  rotation={[-Math.PI, 0.756, 2.68]}
                  scale={100}
                >
                  <group name="Object_17001" />
                </group>
                <group
                  name="Light"
                  position={[407.625, 590.386, -100.545]}
                  rotation={[1.89, 0.881, -2.045]}
                  scale={100}
                >
                  <group name="Object_14001" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_15001" />
                  </group>
                </group>
                <group
                  name="Plane"
                  position={[0, 222.413, 0]}
                  rotation={[-Math.PI / 2, 0, 0.262]}
                  scale={[120.529, 100, 100]}
                >
                  <mesh
                    name="Plane_calota_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_calota_0.geometry}
                    material={materials.calota}
                  />
                  <mesh
                    name="Plane_espelho_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_espelho_0.geometry}
                    material={materials.espelho}
                  />
                  <mesh
                    name="Plane_farol_frente_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_farol_frente_0.geometry}
                    material={materials.farol_frente}
                  />
                  <mesh
                    name="Plane_lanterna_tarseira_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_lanterna_tarseira_0.geometry}
                    material={materials.lanterna_tarseira}
                  />
                  <mesh
                    name="Plane_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_Material_0.geometry}
                    material={materials["Material.012"]}
                  />
                  <mesh
                    name="Plane_pneu_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_pneu_0.geometry}
                    material={materials.pneu}
                  />
                  <mesh
                    name="Plane_principal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_principal_0.geometry}
                    material={materials.principal}
                  />
                  <mesh
                    name="Plane_seta_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_seta_0.geometry}
                    material={materials.seta}
                  />
                </group>
              </group>
            </group>
          </group>
        </Pop>

        {/* STUMP */}
        <group
          name="stump"
          position={[-0.161, 0.991, 4.517]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.002}
        >
          <group
            name="4a6491e2471849648c2cb4437172ce5dfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode005">
              <group
                name="BluePrint"
                position={[31.428, 99.635, 40.582]}
                rotation={[-Math.PI / 2, 0, 0.073]}
                scale={100}
              >
                <mesh
                  name="BluePrint_BluePrint_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.BluePrint_BluePrint_0.geometry}
                  material={materials.BluePrint}
                />
              </group>
              <group
                name="HandSaw"
                position={[-139.36, 64.537, -35.794]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="HandSaw_HandSaw_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.HandSaw_HandSaw_0.geometry}
                  material={materials.HandSaw}
                />
              </group>
              <group
                name="TapeMeasure"
                position={[-55.8, 105.647, -42.267]}
                rotation={[0, 0.387, 0]}
                scale={100}
              >
                <mesh
                  name="TapeMeasure_Tape_Measure_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.TapeMeasure_Tape_Measure_0.geometry}
                  material={materials.Tape_Measure}
                />
              </group>
              <group
                name="TreeTrunk"
                position={[-0.925, 11.508, 9.306]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="TreeTrunk_Tree_Trunk_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.TreeTrunk_Tree_Trunk_0.geometry}
                  material={materials.Tree_Trunk}
                />
              </group>
              <group
                name="WoodPencil"
                position={[19.804, 99.243, -38.592]}
                rotation={[0, 0.978, -Math.PI / 2]}
                scale={100}
              >
                <mesh
                  name="WoodPencil_WoodPencil_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.WoodPencil_WoodPencil_0.geometry}
                  material={materials.WoodPencil}
                />
              </group>
            </group>
          </group>
        </group>

        {/* CLOUDS */}
        <group name="clouds" rotation={[-Math.PI / 2, 0, 0]} scale={0.149}>
          <group name="aac6d3af1717478786bd50f7c006ca5estlcleanermaterialmergergle">
            <mesh
              name="Object_2001"
              castShadow
              receiveShadow
              geometry={nodes.Object_2001.geometry}
              material={materials["Scene_-_Root"]}
              position={[-24.131, -21.919, 32.034]}
            />
            <mesh
              name="Object_2002"
              castShadow
              receiveShadow
              geometry={nodes.Object_2002.geometry}
              material={materials["Scene_-_Root"]}
              position={[-27.647, 44.957, 30.116]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/isotry.glb");
