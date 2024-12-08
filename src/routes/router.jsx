import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import AddEquipmentPage from "../pages/AddEquipmentPage";
import PrivateRoute from "./PrivateRoute";
import MyEquipmentPage from "../pages/MyEquipmentPage";
import AllEquipmentsPage from "../pages/AllEquipmentsPage";
import ViewDetails from "../pages/ViewDetails";
import UpdatePage from "../pages/UpdatePage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../layouts/NotFound";
import MyProductsTable from "../pages/MyProductsTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("http://localhost:5000/home-products"),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddEquipmentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyProductsTable />
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: <AllEquipmentsPage />,
      },
      {
        path: "/product/:details",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/product-update/:id",
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
