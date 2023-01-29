import { type NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import Campfire from "../components/Campfire";
import { OrbitControls } from "@react-three/drei";
import CampifyNavbar from "../components/CampifyNavbar";
import { Button } from "flowbite-react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Campify</title>
      </Head>
      <main className="relative flex h-screen w-screen justify-center">
        <CampifyNavbar />
        <Canvas className="absolute">
          <color attach={"background"} args={["black"]} />
          <Campfire />
          <pointLight
            position={[0, 0.8, 0]}
            color={"#FFA500"}
            intensity={0.5}
          />
          <ambientLight color={"#FEFCD7"} intensity={0.0} />
          <directionalLight
            color={"#FEFCD7"}
            position={[1, 1, 1]}
            intensity={0.0}
          />
          <OrbitControls
            maxPolarAngle={Math.PI * (1 / 2 - 1 / 10)}
            minPolarAngle={0}
            enablePan={false}
            minDistance={10}
            maxDistance={15}
          />
        </Canvas>
        <Button
          className="duration-400 absolute bottom-16 z-10 opacity-20 transition-[opacity] hover:opacity-100"
          size="md"
          gradientDuoTone="pinkToOrange"
          href="map"
        >
          Start Your Camping Adventure Today!
        </Button>
      </main>
    </>
  );
};

export default Home;
