import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/Layouts";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import Register from "../pages/auth/Register";

export const router = createBrowserRouter([
  {
    id: "root",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
