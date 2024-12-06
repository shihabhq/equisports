import { FaMoon, FaSun } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="night" />

      {/* sun icon */}
      <div className="swap-off h-10 w-10 fill-current">
        <MdOutlineLightMode size={40} />
      </div>

      {/* moon icon */}
      <div className="swap-on h-10 w-10 fill-current">
        <MdOutlineDarkMode size={40} />
      </div>
    </label>
  );
};

export default ThemeToggle;
