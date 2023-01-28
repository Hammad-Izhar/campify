import { type NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import CampifyNavbar from "../components/CampifyNavbar";
import Campfire from "../components/Campfire";
import CameraControls from "../components/CameraControls";

const Home: NextPage = () => {
  return (
    <main className="h-screen w-screen">
      <CampifyNavbar />
      <Canvas className="fixed">
        <CameraControls />
        <Campfire />
      </Canvas>
    </main>
  );
};

export default Home;
