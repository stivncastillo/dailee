import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardPage from "@/features/Admin/Dashboard/page";
import HabitsPage from "@/features/Admin/Habits/page";
import ErrorPage from "@/pages/ErrorPage";
import LoginPage from "@/pages/LoginPage";
import ProtectedRoute from "@/pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/admin/habits",
        element: <HabitsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const NavProvider = () => {
  return <RouterProvider router={router} />;
};

export default NavProvider;
