import cycle from "../../../assets/category/cycle.png";
import dumbell from "../../../assets/category/dumbell.png";
import gymEquipment from "../../../assets/category/gymequipment.png";
import outdoor from "../../../assets/category/outdoor.png";
import sneaker from "../../../assets/category/sneakers.png";
import sportswear from "../../../assets/category/sportswear.png";
import Header from "../../../shared/Header";
import SingleCategoryCard from "./SingleCategoryCard";

const categories = [
  {
    image: cycle,
    text: "Exercise Cycle",
    delay: 0,
  },
  {
    image: dumbell,
    text: "Dumbells",
    dellay: 100,
  },
  {
    image: gymEquipment,
    text: "Gym Equipments",
    delay: 200,
  },
  {
    image: outdoor,
    text: "Outdoor Kits",
    delay: 250,
  },
  {
    image: sneaker,
    text: "Sneakers",
    delay: 300,
  },
  {
    image: sportswear,
    text: "Sportswear",
    delay: 400,
  },
];

const SportsCategoryHome = () => {
  return (
    <div className="w-[80%] my-24  mx-auto">
      <Header text={"Featured Categories"} />
      <div className="grid gap-8 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-1">
        {categories.map((category, idx) => {
          return (
            <SingleCategoryCard
              key={idx}
              image={category.image}
              text={category.text}
              delay={category.delay}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SportsCategoryHome;
