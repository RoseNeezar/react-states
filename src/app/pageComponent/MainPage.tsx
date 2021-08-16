import React from "react";
import useNavigate from "../utils/useNavigate";

const MainPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
      <div className="flex flex-col items-center justify-between py-10 bg-gray-500 rounded-xl w-96 h-96">
        <button
          className="w-40 p-3 font-bold text-gray-200 bg-pink-800 rounded-xl"
          onClick={() => useNavigate?.push("/recoil")}
        >
          Recoil
        </button>
        <button
          className="w-40 p-3 font-bold text-gray-200 bg-pink-800 rounded-xl"
          onClick={() => useNavigate?.push("/zustand")}
        >
          Zustand
        </button>
        <button className="w-40 p-3 font-bold text-gray-200 bg-pink-800 rounded-xl">
          Jotai
        </button>
        <button className="w-40 p-3 font-bold text-gray-200 bg-pink-800 rounded-xl">
          Redux Toolkit
        </button>
        <button
          onClick={() => useNavigate?.push("/draw")}
          className="w-40 p-3 font-bold text-gray-200 bg-pink-800 rounded-xl"
        >
          Canvas
        </button>
        <button
          onClick={() => useNavigate?.push("/rxjs")}
          className="w-40 p-3 font-bold text-gray-200 bg-pink-800 rounded-xl"
        >
          Rxjs
        </button>
      </div>
    </div>
  );
};

export default MainPage;
