import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoadingScreen } from "src/components/loading-screen";
import { GuestGuard } from "src/guard";
import { DashboardLayout } from "src/layouts/dashboard";
import { AiSupportStateWrapper } from "src/pages/aichat/ai-support";

// Lazy loaded components
const Home = lazy(() => import("src/pages/aichat/aichat"));

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

const dashboardRoutes = [
  {
    path: "dashboard",
    element: <GuestGuard>{layoutContent}</GuestGuard>,
    children: [
      {
        path: "ai",
        element: <AiSupportStateWrapper/>,
        children: [{ path:"support", element: <Home /> }],
      },
    ],
  },
];

export default dashboardRoutes;
