import {RouterProvider, createBrowserRouter} from "react-router-dom";
import App from "../App";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/:mailBoxId",
          element: <p>Unknown</p>,
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
