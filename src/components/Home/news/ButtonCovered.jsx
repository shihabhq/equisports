import { Link } from "react-router-dom";

const ButtonCovered = ({ name, to, onClick }) => {
  return (
    <Link
      className="block px-6 py-2 border border-btncol font-medium text-white bg-cyan-500 rounded-lg text-lg hover:bg-inherit font-poppins hover:text-cyan-500 transition-all text-center duration-200"
      to={to || "#"}
      onClick={onClick || null}>
      {name}
    </Link>
  );
};

export default ButtonCovered;