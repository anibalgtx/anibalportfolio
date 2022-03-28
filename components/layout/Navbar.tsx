import React, { useState } from "react";
import Logo from "../common/Logo";
import { NavBarList } from "./NavBarList";

const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="flex items-center flex-wrap p-3">
      <a className="inline-flex items-center p-2 mr-4 ">
        <Logo></Logo>
      </a>
      <button
        className=" inline-flex p-3 lg:hidden text-black ml-auto outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <NavBarList active={active}></NavBarList>
    </nav>
  );
};

export default Navbar;
