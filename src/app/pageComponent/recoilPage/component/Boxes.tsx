import React from "react";
import { useRecoilValue } from "recoil";
import { boxIdsState } from "../hooks/useBox";
import DrawBoxes from "./DrawBoxes";

const Boxes = () => {
  const boxIds = useRecoilValue(boxIdsState);
  return (
    <>
      {boxIds.map((re) => (
        <DrawBoxes key={re} id={re} />
      ))}
    </>
  );
};

export default Boxes;
