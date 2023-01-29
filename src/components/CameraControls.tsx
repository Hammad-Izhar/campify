import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useRef } from "react";

// Black Magic, Compiler Complains but you shouldn't
extend({ OrbitControls });
const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef<OrbitControls>();

  useFrame(() => controls.current?.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      //maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2 - Math.PI / 6}
      //minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
      enablePan={false}
      minDistance={10}
      maxDistance={20}
    />
  );
};

export default CameraControls;