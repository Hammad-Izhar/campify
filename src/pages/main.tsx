import { type NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";

const Main: NextPage = () => {
  return (
    <main>
      <Canvas>
        <Box />
      </Canvas>
    </main>
  );
};

export default Main;
