import { type Mesh } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const ref = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime();
    ref.current.rotation.y = clock.getElapsedTime();
    ref.current.rotation.z = clock.getElapsedTime();
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <meshBasicMaterial color="red" />
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

export default Box;
