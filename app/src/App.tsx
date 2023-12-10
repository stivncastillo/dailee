import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import Providers from "./providers";

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
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export const App = () => {
  return (
    // @ts-ignore
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};
