import {PropsWithChildren} from "react";
import {Sidemenu} from "./sidemenu.types";

const Sidemenu = ({children}: PropsWithChildren) => {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
};

export default Sidemenu;
