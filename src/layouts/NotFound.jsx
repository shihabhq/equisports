import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-[95%] lg:w-[80%] mx-auto">
        <h1 className="text-center mt-32 text-2xl font-semibold sm:text-5xl ">
          404-No Data Found.
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
