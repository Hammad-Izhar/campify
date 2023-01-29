import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { Stars, useGLTF } from "@react-three/drei";

const Campfire = () => {
  const gltf = useLoader(GLTFLoader, "/models/full_test.glb");
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

  return (
    <>
      <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <primitive
        object={gltf.scene}
        scale={1}
        rotation={[0, Math.PI * (-1 / 5), 0]}
      />
      <fogExp2 density={0.025} color="#000000" attach={"fog"} />
    </>
  );
};

export default Campfire;
