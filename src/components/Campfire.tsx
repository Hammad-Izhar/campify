import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React from "react";

const Campfire = () => {
  const gltf = useLoader(GLTFLoader, "/models/fire.gltf");

  return <primitive object={gltf.scene} />;
};

export default Campfire;
