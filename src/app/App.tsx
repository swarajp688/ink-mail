import {Navigate, Outlet, useParams} from "react-router";
import Sidemenu from "../Components/Sidemenu";
import {SidemenuType} from "../Components/sidemenu.types";

const getMenuItems = (): SidemenuType["menuItems"] => {
  return [
    {
      id: "/inbox",
      name: "Inbox",
    },
    {
      id: "/primary",
      name: "Primary",
    },
    {
      id: "/spam",
      name: "Spam",
    },
    {
      id: "/bin",
      name: "Bin",
    },
  ];
};

function App() {
  const menuItems = getMenuItems();
  const {mailBoxId} = useParams();
  console.log(mailBoxId);
  if (mailBoxId === undefined) {
    return <Navigate to={"/inbox"} />;
  }

  return (
    <div>
      <Sidemenu>
        <Sidemenu.List menuItems={menuItems}></Sidemenu.List>
        <Sidemenu.Content>
          <div className="w-full h-full p-6 bg-slate-100">
            <Outlet />
          </div>
        </Sidemenu.Content>
      </Sidemenu>
    </div>
  );
}

export default App;
