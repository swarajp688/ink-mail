import {PropsWithChildren} from "react";
import {Sidemenu} from "./sidemenu.types";
import {GiHamburgerMenu} from "react-icons/gi";
const Sidemenu = ({children}: PropsWithChildren) => {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
};

const SidemenuContent = ({children}: PropsWithChildren) => {
  return (
    <div className="drawer-content flex flex-col items-center justify-center">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-primary drawer-button lg:hidden"
      >
        <GiHamburgerMenu />
      </label>
      {children}
    </div>
  );
};

const SidemenuList = ({menuItems}: Sidemenu) => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        {menuItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidemenu;
