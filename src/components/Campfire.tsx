import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Group, Mesh } from "three";

const Campfire = () => {
  const gltf = useLoader(GLTFLoader, "/models/non_reflective.glb");
  let mixer: THREE.AnimationMixer;
  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return <primitive object={gltf.scene} scale={1} />;
};

export default Campfire;
