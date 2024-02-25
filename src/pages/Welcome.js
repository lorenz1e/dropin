import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Logo = require("../assets/logo.svg").default;

export default function Welcome() {
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col mb-10 items-center justify-center">
          <img
            src={Logo}
            className="h-16 cursor-pointer mt-2 mb-5"
            onClick={() => navigate("/")}
            alt="Logo"
          />
          <div className="text-2xl font-medium text-center">
            Create an account or sign in to an existing one
          </div>
        </div>
        <button
          onClick={() => navigate("/signup")}
          type="submit"
          className="w-96 h-14 my-2 rounded-lg bg-primary font-semibold text-lg text-white"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/signin")}
          type="submit"
          className="w-96 h-14 my-2 rounded-lg bg-primary font-semibold text-lg text-white"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
