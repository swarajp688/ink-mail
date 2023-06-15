import {RouterProvider, createBrowserRouter} from "react-router-dom";
import App from "../app/App";
import MailContainer from "../app/MailContainer";
import MailListContainer from "../app/MailListContainer";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/:mailBoxId",
          element: <MailListContainer />,
        },
        {
          path: "/:mailBoxId/mail/:mailId",
          element: <MailContainer />,
        },
      ],
    },
    {
      path: "error",
      element: <p>Error</p>,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Routes;
