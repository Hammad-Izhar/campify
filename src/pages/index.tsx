import { type NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import CampifyNavbar from "../components/CampifyNavbar";
import Campfire from "../components/Campfire";
import CameraControls from "../components/CameraControls";

const Home: NextPage = () => {
  if (typeof window === undefined) {
    return <div></div>;
  }

  return (
    <main className="h-screen w-screen">
      <CampifyNavbar />
      <Canvas className="fixed">
        <Campfire />
        <CameraControls />
      </Canvas>
    </main>
  );
};

export default Home;
