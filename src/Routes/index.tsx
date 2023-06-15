import {RouterProvider, createBrowserRouter} from "react-router-dom";
import App from "../app/App";
import MailContainer from "../app/MailContainer";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/:mailBoxId",
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
