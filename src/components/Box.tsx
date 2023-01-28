import { type Mesh } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const ref = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.position.z += clock.getDelta();
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <meshBasicMaterial color="red" />
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

export default Box;
