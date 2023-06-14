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

export default Sidemenu;
