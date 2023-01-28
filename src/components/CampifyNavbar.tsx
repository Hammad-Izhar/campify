import { Navbar } from "flowbite-react";
import Image from "next/image";

const CampifyNavbar = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <Image
          src="/campify.jpg"
          className="mr-3 h-6"
          width={36}
          height={36}
          alt="Campify Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Campify
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/main">Home</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/map">Maps</Navbar.Link>
        <Navbar.Link href="/components">Components</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CampifyNavbar;
