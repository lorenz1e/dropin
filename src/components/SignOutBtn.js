import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Dots } from "react-activity";

export default function SignOutBtn() {
  const { signout } = useAuth();

  async function handleSignOut() {
    try {
      await signout();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <button
      onClick={() => handleSignOut()}
      type="submit"
      className="rounded-md bg-red-400 text-white font-medium py-1 px-8"
    >
      Sign out
    </button>
  );
}
