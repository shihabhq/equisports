import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-[95%] lg:w-[80%] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
