import React from "react";
import { useRecoilValue } from "recoil";
import { boundingState } from "../hooks/useBox";

const BoundingBox = () => {
  const bounding = useRecoilValue(boundingState);
  if (bounding.maxX === null) return null;
  return (
    <div
      className="absolute border-2 border-dashed border-yellow-200 flex justify-center items-center bg-red-300"
      style={{
        top: Number(bounding.minY) + 64,
        left: Number(bounding.minX),
        width: bounding.maxX - Number(bounding.minX) + 204,
        height: Number(bounding.maxY) - Number(bounding.minY) + 208,
      }}
    ></div>
  );
};

export default BoundingBox;
