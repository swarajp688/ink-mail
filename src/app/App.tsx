import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Navigate, Outlet, useParams} from "react-router";
import Sidemenu from "../Components/Sidemenu";
import {SidemenuType} from "../Components/sidemenu.types";
import {sagaActions} from "../Redux/sagaActions";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: sagaActions.FETCH_EMAIL});
  }, []);

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
