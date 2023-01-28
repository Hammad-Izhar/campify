import { type NextPage } from "next";
import dynamic from "next/dynamic";
import CampifyNavbar from "../components/CampifyNavbar";

const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

const Map: NextPage = () => {
  return (
    <>
      <CampifyNavbar />
      <MapWithNoSSR center={[43.5309812, -73.5544169]} />
    </>
  );
};

export default Map;
