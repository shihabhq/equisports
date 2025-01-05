import { Link } from "react-router-dom";
import "./navbar.css";
import ThemeToggle from "./themeToggle";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
                <Link to="/" className="py-2 text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/my-products"} className="py-2 text-base">
                  My Equipments List
                </Link>
              </li>
              <li>
                <Link to={"/add-product"} className="py-2 text-base">
                  Add Equipment
                </Link>
              </li>
              <li>
                <Link to="/products" className="py-2 text-base">
                  All Sports Equipment
                </Link>
              </li>
              {user && user?.email ? (
                <div className="flex flex-col gap-2 sm:hidden">
                  <div className="flex justify-center items-center">
                    {user?.photoURL ? (
                      <>
                        <img
                          src={user.photoURL}
                          data-tooltip-id="profile-tooltip"
                          data-tooltip-content={user.displayName}
                          className="w-12 h-12 rounded-full border shadow-lg cursor-pointer"
                        />
                        <Tooltip id="profile-tooltip" place="bottom" />
                      </>
                    ) : (
                      ""
                    )}
                  </div>

                  <button
                    onClick={logOut}
                    className="btn bg-cyan-500 text-white hover:bg-cyan-400">
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to={"/auth/login"}
                    className="btn bg-info text-white hover:bg-info font-semibold sm:hidden hover:underline">
                    Login
                  </Link>
                  <Link
                    to={"/auth/register"}
                    className="btn sm:hidden bg-black text-white font-semibold hover:bg-[#080c0e]">
                    Register
                  </Link>
                </>
              )}
            </ul>
          </div>
          <a className="cursor-pointer text-3xl font-bold">
            EquiSports<span className="text-info">.</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="horizontal-list">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="horizontal-list">
              <Link to={"/my-products"}>My Equipment List</Link>
            </li>
            <li className="horizontal-list">
              <Link to={"/add-product"}>Add Equipment</Link>
            </li>
            <li className="horizontal-list">
              <Link to={"/products"}>All Sports Equipment</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {user && user?.email ? (
            <div className="hidden sm:flex items-center gap-2">
              <div className="flex justify-center items-center ">
                {user?.photoURL ? (
                  <>
                    <img
                      src={user.photoURL}
                      data-tooltip-id="profile-tooltip"
                      data-tooltip-content={user.displayName}
                      className="w-12 h-12 rounded-full border shadow-lg cursor-pointer"
                    />
                    <Tooltip id="profile-tooltip" place="bottom" />
                  </>
                ) : (
                  ""
                )}
              </div>

              <button
                onClick={logOut}
                className="btn bg-cyan-500 text-white hover:bg-cyan-400">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to={"/auth/login"}
                className="btn bg-info hidden sm:inline-flex text-white hover:bg-info font-semibold hover:underline">
                Login
              </Link>
              <Link
                to={"/auth/register"}
                className="btn hidden sm:inline-flex bg-black text-white font-semibold hover:bg-[#080c0e]">
                Register
              </Link>
            </>
          )}

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
