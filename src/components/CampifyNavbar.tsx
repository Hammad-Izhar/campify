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
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <a
                className="duration-400 block border-b border-gray-100 py-2 pr-4 pl-3 text-lg text-white transition-[background] hover:bg-gray-50 hover:text-black"
                href="/map"
              >
                Map
              </a>
            </li>
            <li>
              <a
                className="duration-400 block border-b border-gray-100 py-2 pr-4 pl-3 text-lg text-white hover:bg-gray-50 hover:text-black"
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CampifyNavbar;
