import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />
      <Navbar />

      <main className="flex-grow w-[95%] lg:w-[80%] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
