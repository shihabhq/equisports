import "./navbar.css";
import ThemeToggle from "./themeToggle";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 left-0 bg-base-100 z-50">
      <div className="navbar bg-base-100 w-[95%] mx-auto max-w-[1360px] py-4 rounded-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-1">
              <li>
                <a className="py-2 text-base">Home</a>
              </li>
              <li>
                <a className="py-2 text-base">My Equipments</a>
              </li>
              <li>
                <a className="py-2 text-base">Add Equipment</a>
              </li>
              <li>
                <a className="py-2 text-base">All Sports Equipment</a>
              </li>
              <a className="btn bg-info text-white hover:bg-info font-semibold sm:hidden hover:underline">
                Login
              </a>
              <a className="btn sm:hidden bg-black text-white font-semibold hover:bg-[#080c0e]">
                Register
              </a>
            </ul>
          </div>
          <a className="cursor-pointer text-3xl font-bold">
            EquiSports<span className="text-info">.</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="horizontal-list">
              <a>Home</a>
            </li>
            <li className="horizontal-list">
              <a>My Equipments</a>
            </li>
            <li className="horizontal-list">
              <a>Add Equipment</a>
            </li>
            <li className="horizontal-list">
              <a>All Sports Equipment</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn bg-info hidden sm:inline-flex text-white hover:bg-info font-semibold hover:underline">
            Login
          </a>
          <a className="btn hidden sm:inline-flex bg-black text-white font-semibold hover:bg-[#080c0e]">
            Register
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
