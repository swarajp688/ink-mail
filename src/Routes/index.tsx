import {RouterProvider, createBrowserRouter} from "react-router-dom";
import App from "../App";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Routes;
