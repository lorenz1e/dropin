import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FIREBASE_AUTH } from "../firebase/firebaseConfig";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import { useAuth } from "../contexts/AuthContext";

const Logo = require("../assets/logo.svg").default;

export default function SignUp() {
  const navigate = useNavigate();

  const { signup } = useAuth();
  const { currentUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    if (password1 == "" || password2 == "") {
    }

    if (password1 == password2) {
      setLoading(true);
      try {
        await signup(email, password1);
        setLoading(false);
        navigate("/");
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    } else {
      alert("passwords do not match");
    }
  }

  if (currentUser) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="flex justify-center h-screen items-center cursor-default">
      <div className="flex flex-col">
        <div className="flex flex-col mb-10 items-center">
          <img
            src={Logo}
            className="h-8 mr-5 mb-4 cursor-pointer"
            onClick={() => navigate("/")}
          ></img>
          <div className="text-4xl font-bold">Create an account</div>
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
          onChange={(input) => setPassword1(input.target.value)}
          value={password1}
          placeholder="Password"
          typeof="password"
        />
        <input
          className="bg-gray-100 w-96 h-14 px-5 rounded-lg mb-6"
          type="text"
          onChange={(input) => setPassword2(input.target.value)}
          value={password2}
          placeholder="Confirm password"
          typeof="password"
        />
        <button
          onClick={() => handleSignUp()}
          type="submit"
          className="w-96 h-14 my-2 rounded-lg bg-primary font-semibold text-lg text-white "
        >
          {loading == true ? <Dots /> : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
