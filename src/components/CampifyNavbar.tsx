const CampifyNavbar = () => {
  return (
    <nav className="absolute z-10 w-full rounded border-gray-200 bg-white bg-opacity-5 px-2 py-2.5 text-white backdrop-blur-xl">
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <a className="flex" href="/">
          <img src="/campify.png" className="mr-3 w-12" alt="Campify Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Campify
          </span>
        </a>
      </div>
    </nav>
  );
};

export default CampifyNavbar;
