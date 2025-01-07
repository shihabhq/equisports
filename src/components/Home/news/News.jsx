// import Heading from "../../../../shared/Heading";
// import image1 from "../../../../assets/news/image1.png";
// import image2 from "../../../../assets/news/image2.png";
import Header from "../../../shared/Header";
import ButtonCovered from "./ButtonCovered";
// import ButtonCovered from "../../../../shared/ButtonCovered";

const News = () => {
  return (
    <div className="my-40 container mx-auto">
      <Header text={"Latest News"} />
      <div className="flex flex-col md:flex-row items-start gap-6 justify-center mx-auto">
        <img
          src="https://th.bing.com/th/id/R.79a5dedbaffd1139d95e16b553ce5e42?rik=l%2b8ScqtfmZBdqw&pid=ImgRaw&r=0"
          alt=""
          className="w-[80%] md:w-1/2 mx-auto"
        />
        <div>
          <div className="text-start flex flex-col gap-2 max-w-2xl mx-auto">
            <h3 className="text-btncol font-poppins text-lg ">News</h3>
            <h1 className="font-bold uppercase font-Roboto text-3xl">
              New Items We Found in 2024
            </h1>
            <p className="text-base text-gray-400 font-poppins text-justify">
              We are thrilled to announce that our dedicated team has delivered
              wonderful result to make a great impact on the society state
              transition in sports welbeing...
            </p>
          </div>
          <div className="w-52 mt-4">
            <ButtonCovered name="Read More" />
          </div>
        </div>
      </div>
      <div className="flex mt-24 flex-col-reverse md:flex-row items-start gap-6 justify-center  mx-auto">
        <div>
          <div className="text-start flex flex-col gap-2 max-w-2xl mx-auto">
            <h3 className="text-btncol font-poppins text-lg ">News</h3>
            <h1 className="font-bold uppercase font-Roboto text-3xl">
              Why you should avoid large scale buffy dumbbells?
            </h1>
            <p className="text-base text-gray-400 font-poppins text-justify">
              Doing dumbbell exercises are amazing. it increases your byceps and
              overall body shape is maintained. However Our research shows that
              some of the brand`s butty dumbbells are needs to be avoided by...
            </p>
          </div>
          <div className="w-52 mt-4">
            <ButtonCovered name="Read More" />
          </div>
        </div>
        <img
          src="https://cdn.shoplightspeed.com/shops/643683/files/45605395/best-exercise-equipment-for-building-muscle.jpg"
          alt=""
          className="w-[80%] md:w-1/2"
        />
      </div>
    </div>
  );
};

export default News;
