import google from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import Input from "../shared/Input";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    createNewUser,
    updateUserProfile,
    setLoading,
    loginWithGoogle,
    user,
    setUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // regex
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !photoUrl || !email || !password) {
      setError("Please fill up all the fields");
      toast.error("Please fill up all the fields", { position: "top-center" });
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      toast.error("Password must be at least 6 characters long", {
        position: "top-center",
      });
      return;
    }
    if (!lowercaseRegex.test(password)) {
      setError("Password must contain one lowercase letter");
      toast.error("Password must contain one lowercase letter", {
        position: "top-center",
      });
      return;
    }
    if (!uppercaseRegex.test(password)) {
      setError("Password must contain one uppercase letter");
      toast.error("Password must contain one uppercase letter", {
        position: "top-center",
      });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            toast.error("Unexpected Error Occured" + err, {
              position: "top-center",
            });
          });
      })
      .catch((err) => {
        toast.error("Unexpected Error Occured" + err, {
          position: "top-center",
        });
      })
      .finally(() => {
        setLoading(false);
        setError("");
      });
  };

  const handleGoogleRegistration = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Account Created Successfully", {
          position: "top-center",
        });
        navigate("/");
      })
      .catch((err) => {
        toast.error("Unexpected Error Occured" + err, {
          position: "top-center",
        });
      })
      .finally(() => {
        setLoading(false);
        setError("");
      });
  };
  if (user) {
    return (
      <>
        <div className=" flex items-center flex-col">
          <h1 className="mt-48 mb-8 text-center text-5xl font-bold md:text-2xl">
            You are already registered
          </h1>
          <Link
            to={"/"}
            className="font-bold text-lg bg-green-400 px-4 py-2 rounded-lg text-white transition-all
          hover:bg-green-500 hover:-translate-y-1
          ">
            Go to Home
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center w-full text-black">
      <div className="bg-white  shadow-lg rounded-lg px-8 py-6 max-w-[35rem]">
        <h1 className="text-2xl font-bold text-center mb-4 text-black">
          Register Account
        </h1>
        <form action="#">
          <Input
            changeVal={setName}
            value={name}
            name={"name"}
            text={"Name"}
            placeholder={"your name"}
            type={"text"}
          />
          <Input
            changeVal={setEmail}
            value={email}
            name={"email"}
            placeholder={"your@email.com"}
            type={"text"}
            text={"Email Address"}
          />
          <Input
            value={photoUrl}
            changeVal={setPhotoUrl}
            name={"photo"}
            placeholder={"https://www.yourimage.png"}
            type={"text"}
            text={"Your Photo Url"}
          />
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900 mb-2">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              style={{ backgroundColor: "white" }}
              required
            />
            <p className="text-sm text-red-500 ">{error && error}</p>
            <p className="mt-2">
              Already have an accoutn?{" "}
              <Link
                to="/auth/login"
                href="#"
                className="text-base text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </Link>
            </p>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
          <p className="text-center my-2 text-lg">or</p>
          <button
            onClick={handleGoogleRegistration}
            className="flex gap-2 items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <img src={google} className="border-none w-5" alt="" />
            Register with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
