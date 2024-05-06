import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/Layouts";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import Register from "../pages/auth/Register";
import Catalog from "../pages/Catalog/Catalog";
import AddProductPage from "../pages/AddProduct/AddProductPage";
import EditProduct from "../pages/EditProduct/EditProduct";

export const router = createBrowserRouter([
  {
    id: "root",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/addProduct", element: <AddProductPage /> },
      { path: "/editPage/:id", element: <EditProduct /> },
    ],
  },
]);
