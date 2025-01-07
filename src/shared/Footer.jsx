import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content flex flex-col items-center gap-4 justify-center pb-8 pt-12 px-10 mt-24">
      <a href="/" className="text-4xl font-bold">
        EquiSports<span className="text-cyan-400">.</span>
      </a>
      <div className="text-center">
        <h2 className="text-lg font-semibold">
          EquiSports sports Ltd. Apparel
        </h2>
        <p>123 assertive Lane, Beside New Hospital, Dhaka 445</p>
        <p> call: 01715-123456</p>
      </div>
      <div className="flex gap-6 justify-center flex-wrap">
        <Link to={"/home"} className="hover:underline">
          Home
        </Link>
        <Link to={"/about"} className=" hover:underline">
          About Us
        </Link>
        <Link to={"/feedbacks"} className="hover:underline">
          Feedbacks
        </Link>
        <Link to="/products" className=" hover:underline">
          All Sports Equipment
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-center mt-8">
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebookF
            size={50}
            className="rounded-full p-2 border transition-all hover:bg-[#316ff6] hover:-translate-y-1"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <FaInstagram
            size={50}
            className="rounded-full p-2 border transition-all hover:bg-[#DD2A7B] hover:-translate-y-1"
          />
        </a>
        <a href="https://www.x.com" target="_blank">
          <FaXTwitter
            size={50}
            className="rounded-full p-2 border transition-all hover:bg-[#000] hover:-translate-y-1"
          />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <FaLinkedin
            size={50}
            className="rounded-full p-2 border transition-all hover:bg-[#0077B5] hover:-translate-y-1"
          />
        </a>
      </div>
      <div>
        <p>
          <span>
            Copyright © {new Date().getFullYear()} - All right reserved by
            EquiSports ltd.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
