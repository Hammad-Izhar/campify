import { type NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import CampifyNavbar from "../components/CampifyNavbar";

const Main: NextPage = () => {
  return (
    <main className="h-screen w-screen">
      <CampifyNavbar />
      <Canvas className="fixed -z-10">
        <Box />
      </Canvas>
    </main>
  );
};

export default Main;
