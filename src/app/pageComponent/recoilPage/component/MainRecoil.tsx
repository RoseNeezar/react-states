import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useNavigate from "../../../utils/useNavigate";
import { boxIdsState, totalsState } from "../hooks/useBox";
import BoundingBox from "./BoundingBox";
import Boxes from "./Boxes";

const MainRecoil = () => {
  const [boxIds, setBoxIds] = useRecoilState(boxIdsState);
  const boxTotal = useRecoilValue(totalsState);
  return (
    <div className=" items-center w-full h-screen bg-gray-500">
      <button
        className="p-3 m-2 font-bold text-gray-500 bg-green-300 rounded-md"
        onClick={() => useNavigate?.goBack()}
      >
        Go back
      </button>
      <button
        className="bg-red-300 p-3 rounded-xl text-gray-200"
        onClick={() => {
          const id = new Date().toISOString();
          setBoxIds([...boxIds, id]);
        }}
      >
        {boxTotal}
      </button>
      <Boxes />
      <BoundingBox />
    </div>
  );
};

export default MainRecoil;
