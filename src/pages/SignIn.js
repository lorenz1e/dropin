import { useState } from "react";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Logo = require("../assets/logo.svg").default;

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const { signin } = useAuth();
  async function handleSignIn() {
    if (email == "" || password == "") {
    }
    setLoading(true);
    try {
      await signin(email, password);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  }

  if (currentUser) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex-col flex items-center">
       
        <div className="flex flex-col mb-10 items-center">
          <img
            src={Logo}
            className="h-8 mr-5 mb-4 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="text-4xl font-bold">Sign In to your account</div>
        </div>
        <input
          className="bg-gray-100 w-96 h-14 px-5 mb-5 rounded-lg"
          type="text"
          onChange={(input) => setEmail(input.target.value)}
          value={email}
          placeholder="E-Mail"
          typeof="email"
        />
        <input
          className="bg-gray-100 w-96 h-14 px-5 mb-5 rounded-lg"
          type="text"
          onChange={(input) => setPassword(input.target.value)}
          value={password}
          placeholder="Password"
          typeof="password"
        />
        <button
          onClick={() => handleSignIn()}
          type="submit"
          className="w-96 h-14 my-2 rounded-lg bg-primary font-semibold text-lg text-white "
        >
          {loading == true ? <Dots /> : "Sign In"}
        </button>
      </div>
    </div>
  );
}
