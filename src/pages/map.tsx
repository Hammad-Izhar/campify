import { type NextPage } from "next";
import dynamic from "next/dynamic";
import CampifyNavbar from "../components/CampifyNavbar";

const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

const Map: NextPage = () => {
  return (
    <>
      <CampifyNavbar />
      <MapWithNoSSR />
    </>
  );
};

export default Map;
