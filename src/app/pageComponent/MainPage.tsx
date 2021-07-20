import React from "react";
import useNavigate from "../utils/useNavigate";

const MainPage = () => {
  return (
    <div className="flex h-screen bg-gray-600 justify-center items-center">
      <div className="bg-gray-500 flex  rounded-xl flex-col items-center justify-between py-10 w-96 h-96">
        <button
          className="bg-pink-800 rounded-xl p-3 text-gray-200 font-bold w-40"
          onClick={() => useNavigate?.push("/recoil")}
        >
          Recoil
        </button>
        <button
          className="bg-pink-800 rounded-xl p-3 text-gray-200 font-bold w-40"
          onClick={() => useNavigate?.push("/zustand")}
        >
          Zustand
        </button>
        <button className="bg-pink-800 rounded-xl p-3 text-gray-200 font-bold w-40">
          Jotai
        </button>
        <button className="bg-pink-800 rounded-xl p-3 text-gray-200 font-bold w-40">
          Redux Toolkit
        </button>
      </div>
    </div>
  );
};

export default MainPage;
