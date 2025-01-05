import jerseaybg from "../../../assets/jerseybg.jpg";
import jersey from "../../../assets/jersey.png";

const JerseaySlider = () => {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${jerseaybg})` }}>
      <div className="w-[95%] lg:w-[80%] h-full flex flex-col md:flex-row items-center md:justify-between justify-center gap-4 mx-auto ">
        <div className="basis-2/5 flex flex-col gap-5  items-start justify-center">
          <h1 className="font-bold text-3xl md:text-6xl">
            Exclusive offers on <br />
            Jerseys
          </h1>
          <h2 className="text-lg md:text-2xl font-medium">
            Starting from 45$ only
          </h2>
          <button className="btn btn-outline text-white text-lg">
            See Details
          </button>
        </div>
        <div className="basis-1/2">
          <img src={jersey} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default JerseaySlider;
