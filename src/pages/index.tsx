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
    <main className="h-screen w-screen overflow-hidden ">
      <CampifyNavbar />
      <Canvas className="fixed">
        <color attach={"background"} args={["black"]} />
        <Campfire />
        <CameraControls />
        <pointLight position={[0, 0.8, 0]} color={"#FFA500"} intensity={0.6} />
        <ambientLight color={"#FEFCD7"} intensity={0.02} />
        <directionalLight
          color={"#FEFCD7"}
          position={[1, 1, 1]}
          intensity={0.05}
        />
      </Canvas>
    </main>
  );
};

export default Home;
