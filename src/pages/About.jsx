import React from "react";
import Header from "../shared/Header";
import aboutusimg from "../assets/about.svg";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";

const teamMembers = [
  {
    name: "Antonio Black",
    role: "Founder/CEO",
    image:
      "https://c.pxhere.com/photos/80/b3/andrew_ronalds_legislative_council_politician_melbourne_australia_man_person_portrait-866398.jpg!d",
    facebook: "#",
  },
  {
    name: "Jamie Cooper",
    role: "Sales Director",
    image:
      "https://th.bing.com/th/id/OIP.Rv5hzhHxzYHGKELo5TzKFQHaLH?rs=1&pid=ImgDetMain",
    facebook: "#",
  },
  {
    name: "Brooklyn Simmons",
    role: "Manager",
    image:
      "https://th.bing.com/th/id/OIP.U-0S3T_jyCobeTlmdi0wkwHaKT?w=198&h=276&c=7&r=0&o=5&pid=1.7",
    facebook: "#",
  },
  {
    name: "Thomas jack",
    role: "Product Manager",
    image:
      "https://th.bing.com/th/id/OIP.MeqPH-8qfxT0_m3G6sQb0gHaLE?w=198&h=296&c=7&r=0&o=5&pid=1.7",
    facebook: "#",
  },
];

const About = () => {
  return (
    <div>
      <div className="mt-24">
        <Header text={"About Us"} />
      </div>
      <div className="flex gap-4 flex-col lg:flex-row items-center justify-start">
        <div className="basis-2/4">
          <img className=" w-[80%] mx-auto" src={aboutusimg} alt="" />
        </div>
        <div className="basis-2/5  flex justify-start items-start h-full flex-col gap-4 w-[80%] max-w-2xl">
          <h1 className="text-3xl font-semibold">
            EquiSprots - Offering rare and awesome sports items worldwide
          </h1>
          <p className="text-justify">
            Welcome to Equisports, your premier destination for Sports and GYM
            equipments. We pride ourselves on offering a curated selection of
            rare and awesome items sourced both locally and globally. Our
            mission is to bring you the latest trendy and cool, ensuring every
            piece reflects quality . Discover the perfect addition to Closet and
            body with us
          </p>
          <Link
            className="px-4 py-3 rounded-lg bg-black hover:underline text-white text-sm font-bold w-fit"
            to={"/products"}>
            View Our Products
          </Link>
        </div>
      </div>
      <div className="mt-48 mb-24">
        <div className="my-24">
          <Header text={"Meet our team"} />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="mb-4 overflow-hidden bg-gray-100 rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium ">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                  <a
                    href={member.facebook}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors">
                    <FaFacebookF size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
