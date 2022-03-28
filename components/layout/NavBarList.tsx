import React, { useState } from "react";
import { Items } from "../../fixtures/navbarItems";

interface NavBarListInterface {
  active: boolean;
}
export const NavBarList: React.FC<NavBarListInterface> = ({ active }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const handleClick = (value: string) => () => {
    setActiveItem(value);
  };
  return (
    <div
      className={`${
        active ? "" : "hidden"
      } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
    >
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto lg:gap-16">
        {Items.map((item, index) => {
          return (
            <a
              key={index}
              onClick={handleClick(item)}
              className={`lg:inline-flex lg:w-auto w-full py-2  text-black  items-center justify-center text-2xl cursor-pointer ${
                activeItem === item ? "lg:border-b-2" : ""
              } lg:border-b-orange-400`}
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};
