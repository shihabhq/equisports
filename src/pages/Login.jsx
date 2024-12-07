import google from "../assets/google.png";
import { Link } from "react-router-dom";
import Input from "../shared/Input";

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center w-full text-black">
      <div className="bg-white  shadow-lg rounded-lg px-8 py-6 max-w-[35rem]">
        <h1 className="text-2xl font-bold text-center mb-4 text-black">
          Login
        </h1>
        <form action="#">
          <Input name={"email"} placeholder={"your@email.com"} type={"text"} />
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              style={{ backgroundColor: "white" }}
              required
            />
            <p className="mt-2">
              New User?{" "}
              <Link
                to="/auth/register"
                href="#"
                className="text-base text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Register an account
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
          <p className="text-center my-2 text-lg">or</p>
          <button className="flex gap-2 items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <img src={google} className="border-none w-5" alt="" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
