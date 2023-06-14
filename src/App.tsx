import Sidemenu from "./Components/Sidemenu";
import {SidemenuType} from "./Components/sidemenu.types";

const getMenuItems = (): SidemenuType["menuItems"] => {
  return [
    {
      id: "/",
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

  return (
    <div>
      <Sidemenu>
        <Sidemenu.List menuItems={menuItems}></Sidemenu.List>
        <Sidemenu.Content></Sidemenu.Content>
      </Sidemenu>
    </div>
  );
}

export default App;
