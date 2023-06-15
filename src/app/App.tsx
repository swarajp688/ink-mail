import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Navigate, Outlet, useParams} from "react-router";
import Sidemenu from "../Components/Sidemenu";
import {SidemenuType} from "../Components/sidemenu.types";
import {sagaActions} from "../Redux/sagaActions";
import {FiInbox} from "react-icons/fi";
import {BsTrash} from "react-icons/bs";
import {RiSpam2Line} from "react-icons/ri";
import {MdOutlineDrafts, MdOutlineMarkEmailRead} from "react-icons/md";
import {validRoutes} from "../Routes/validRoutes";

const getMenuItems = (): SidemenuType["menuItems"] => {
  return [
    {
      id: "/inbox",
      name: "Inbox",
      Icon: <FiInbox />,
    },
    {
      id: "/draft",
      name: "Draft",
      Icon: <MdOutlineDrafts />,
    },
    {
      id: "/all",
      name: "All",
      Icon: <MdOutlineMarkEmailRead />,
    },
    {
      id: "/spam",
      name: "Spam",
      Icon: <RiSpam2Line />,
    },
    {
      id: "/trash",
      name: "Trash",
      Icon: <BsTrash />,
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
    return <Navigate to="/inbox" />;
  }

  if (mailBoxId !== undefined && !validRoutes.includes(mailBoxId)) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <Sidemenu>
        <Sidemenu.List menuItems={menuItems} />
        <Sidemenu.Content>
          <div className="h-full p-6">
            <Outlet />
          </div>
        </Sidemenu.Content>
      </Sidemenu>
    </div>
  );
}

export default App;
