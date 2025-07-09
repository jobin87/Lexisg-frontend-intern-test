import { Navigate, useRoutes } from "react-router-dom";

import { paths } from "../paths";
import dashboardRoutes from "./dashboard";
import { mainRoutes } from "./main";

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={paths.dashboard.AiChat} replace />,
    },

    // Dashboard
    ...dashboardRoutes,

    // Main
    ...mainRoutes,

    // No match
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
