import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full  mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
//w-[95%] lg:w-[80%]
export default HomeLayout;
