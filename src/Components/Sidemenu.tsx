import {PropsWithChildren} from "react";
import {SidemenuType} from "./sidemenu.types";
import {GiHamburgerMenu} from "react-icons/gi";
import {NavLink} from "react-router-dom";

const Sidemenu = ({children}: PropsWithChildren) => {
  return (
    <div className="drawer drawer-mobile lg:drawer-open">
      <input id="side-menu" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
};

const SidemenuContent = ({children}: PropsWithChildren) => {
  return (
    <div className="drawer-content">
      <label
        htmlFor="side-menu"
        className="btn btn-circle btn-sm max-w-[50px] drawer-button lg:hidden"
      >
        <GiHamburgerMenu />
      </label>
      {children}
    </div>
  );
};

const SidemenuList = ({menuItems}: SidemenuType) => {
  return (
    <div className="drawer-side no-scrollbar z-50">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="h-full flex flex-col p-4 w-80 sm:w-48 bg-base-200">
        {menuItems.map((item) => (
          <NavLink
            className={({isActive}) =>
              isActive
                ? "bg-teal-500 rounded-md p-2 mb-2 text-white"
                : "mb-2 p-2 hover:bg-gray-300 hover:rounded-lg"
            }
            to={item.id}
            key={item.id}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

Sidemenu.Content = SidemenuContent;
Sidemenu.List = SidemenuList;

export default Sidemenu;
