import { type NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";

const Main: NextPage = () => {
  return (
    <main className="h-screen w-screen">
      <h1>Campify</h1>
      <Canvas className="fixed -z-10">
        <Box />
      </Canvas>
    </main>
  );
};

export default Main;
