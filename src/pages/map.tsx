import { type NextPage } from "next";
import dynamic from "next/dynamic";
import CampifyNavbar from "../components/CampifyNavbar";

const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

const Map: NextPage = () => {
  return (
    <>
      <CampifyNavbar />
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-slate-500"></div>
        <MapWithNoSSR className="h-screen" center={[43.5309812, -73.5544169]} />
      </div>
    </>
  );
};

export default Map;
