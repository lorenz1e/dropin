import React, { useState } from "react";
import { Dots } from "react-activity";
import { useAuth } from "../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function CompleteProfile() {
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  async function onSave() {
    setLoading(true)
    try {
        await updateProfile(currentUser, { displayName: displayName});
        setLoading(false)
        navigate("/")
    } catch (error) {
        alert(error)
        setLoading(false)
    }
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">Complete your profile</div>

        <div className="flex items-center justify-between w-full mt-4">
          <input
            className="bg-gray-100 rounded-full h-20 w-20"
            type="file"
            id="img"
            name="img"
            accept="image/*"
          ></input>
          <input
            className="bg-gray-100 h-14 px-5 rounded-lg"
            type="text"
            onChange={(input) => setDisplayName(input.target.value)}
            value={displayName}
            placeholder="Name"
          />
        </div>

        <button
          onClick={() => onSave()}
          type="submit"
          className="w-96 h-14 my-2 rounded-lg bg-primary font-semibold text-lg text-white"
        >
          {loading ? <Dots /> : "Save"}
        </button>
      </div>
    </div>
  );
}
