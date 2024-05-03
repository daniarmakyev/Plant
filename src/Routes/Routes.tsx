import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/Layouts";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
      id: "root",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home/> },
      ],
    },
  ]);