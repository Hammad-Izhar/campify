import { type NextPage } from "next";
import { Alert } from "flowbite-react";
import CampifyNavbar from "../components/CampifyNavbar";

const Components: NextPage = () => {
  return (
    <>
      <CampifyNavbar />
      <Alert color="info">Alert!</Alert>
    </>
  );
};

export default Components;
