import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import MercuryTexture from "./textures/mercury.jpeg"; // Add textures for Mercury
import VenusTexture from "./textures/venus.jpeg"; // Add textures for Venus
import EarthTexture from "./textures/earth.jpg"; // Add textures for Earth
import MarsTexture from "./textures/mars.jpeg"; // Add textures for Mars
import JupiterTexture from "./textures/jupiter.jpeg"; // Add textures for Jupiter
import SaturnTexture from "./textures/saturn.jpeg"; // Add textures for Saturn
import UranusTexture from "./textures/uranus.jpeg"; // Add textures for Uranus
import NeptuneTexture from "./textures/neptune.jpeg"; // Add textures for Neptune
import SunTexture from "./textures/sun.webp"; // Add textures for Sun
import SpaceBackground from "./textures/space.png"; // Space background texture

// Sun component with texture
const Sun = () => {
  const sunTexture = useLoader(THREE.TextureLoader, SunTexture);
  return (
    <mesh>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={sunTexture} emissive="yellow" emissiveIntensity={1} />
    </mesh>
  );
};

// Mercury component with texture and orbit animation
const Mercury = () => {
  const mercuryRef = useRef();
  const mercuryTexture = useLoader(THREE.TextureLoader, MercuryTexture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mercuryRef.current.position.x = 5 * Math.cos(-t * 0.9);
    mercuryRef.current.position.z = 5 * Math.sin(-t * 0.9);
  });

  return (
    <mesh ref={mercuryRef}>
      <sphereGeometry args={[0.25, 32, 32]} />
      <meshStandardMaterial map={mercuryTexture} />
    </mesh>
  );
};

// Venus component with texture and orbit animation
const Venus = () => {
  const venusRef = useRef();
  const venusTexture = useLoader(THREE.TextureLoader, VenusTexture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    venusRef.current.position.x = 7 * Math.cos(t * 0.7);
    venusRef.current.position.z = 7 * Math.sin(t * 0.7);
  });

  return (
    <mesh ref={venusRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial map={venusTexture} />
    </mesh>
  );
};

// Earth component with texture and orbit animation
const Earth = () => {
  const earthRef = useRef();
  const earthTexture = useLoader(THREE.TextureLoader, EarthTexture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    earthRef.current.position.x = 10 * Math.cos(-t * 0.5);
    earthRef.current.position.z = 10 * Math.sin(-t * 0.5);
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

// Mars component with texture and orbit animation
const Mars = () => {
  const marsRef = useRef();
  const marsTexture = useLoader(THREE.TextureLoader, MarsTexture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    marsRef.current.position.x = 15 * Math.cos(-t * 0.4);
    marsRef.current.position.z = 15 * Math.sin(-t * 0.4);
  });

  return (
    <mesh ref={marsRef}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial map={marsTexture} />
    </mesh>
  );
};


// Jupiter component with texture and orbit animation
const Jupiter = () => {
  const jupiterRef = useRef();
  const jupiterTexture = useLoader(THREE.TextureLoader, JupiterTexture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    jupiterRef.current.position.x = 20 * Math.cos(-t * 0.25);
    jupiterRef.current.position.z = 20 * Math.sin(-t * 0.25);
  });

  return (
    <mesh ref={jupiterRef}>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshStandardMaterial map={jupiterTexture} />
    </mesh>
  );
};

// Saturn component with texture and orbit animation
const Saturn = () => {
  const saturnRef = useRef();
  const saturnTexture = useLoader(THREE.TextureLoader, SaturnTexture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    saturnRef.current.position.x = 24 * Math.cos(-t * 0.30);
    saturnRef.current.position.z = 24 * Math.sin(-t * 0.30);
  });

  return (
    <mesh ref={saturnRef}>
      <sphereGeometry args={[1.6, 32, 32]} />
      <meshStandardMaterial map={saturnTexture} />
    </mesh>
  );
};


// Uranus component with texture and orbit animation
const Uranus = () => {
  const uranusRef = useRef();
  const uranusTexture = useLoader(THREE.TextureLoader, UranusTexture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    uranusRef.current.position.x = 28 * Math.cos(-t * 0.24);
    uranusRef.current.position.z = 28 * Math.sin(-t * 0.24);
  });

  return (
    <mesh ref={uranusRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial map={uranusTexture} />
    </mesh>
  );
};


// Neptune component with texture and orbit animation
const Neptune = () => {
  const neptuneRef = useRef();
  const neptuneTexture = useLoader(THREE.TextureLoader, NeptuneTexture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    neptuneRef.current.position.x = 30 * Math.cos(-t * 0.20);
    neptuneRef.current.position.z = 30 * Math.sin(-t * 0.20);
  });

  return (
    <mesh ref={neptuneRef}>
      <sphereGeometry args={[1.4, 32, 32]} />
      <meshStandardMaterial map={neptuneTexture} />
    </mesh>
  );
};



// Space background component
const Space = () => {
  const spaceTexture = useLoader(THREE.TextureLoader, SpaceBackground);
  return (
    <mesh>
      <sphereGeometry args={[100, 64, 64]} />
      <meshBasicMaterial map={spaceTexture} side={THREE.BackSide} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={true} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <Space />
      <Sun />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
    
    </Canvas>
  );
};

export default App;
