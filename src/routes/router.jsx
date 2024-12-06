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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
            <MyEquipmentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: <AllEquipmentsPage />,
      },
      {
        path: "/product/:details",
        element: <ViewDetails />,
      },
      {
        path: "/product-update/:id",
        element: <UpdatePage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
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
