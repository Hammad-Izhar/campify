import { type NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import CampifyNavbar from "../components/CampifyNavbar";
import Campfire from "../components/Campfire";
import { OrbitControls, Stats } from "@react-three/drei";

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
        <pointLight position={[0, 0.8, 0]} color={"#FFA500"} intensity={0.6} />
        <ambientLight color={"#FEFCD7"} intensity={0.02} />
        <directionalLight
          color={"#FEFCD7"}
          position={[1, 1, 1]}
          intensity={0.05}
        />
        <OrbitControls
          maxPolarAngle={Math.PI * (1 / 2 - 1 / 6)}
          minPolarAngle={0}
          enablePan={false}
          minDistance={10}
          maxDistance={20}
        />
        <Stats />
      </Canvas>
    </main>
  );
};

export default Home;
