import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { DefaultLayout } from "./@layouts/DefaultLayout";
import { AdminLayout } from "./@layouts/AdminLayout";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <App /> },
      ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { path: "", element: <Home /> },
        ]
    }
  ]);