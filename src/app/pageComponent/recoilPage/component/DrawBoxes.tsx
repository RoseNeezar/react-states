import React, { FC, memo, useRef } from "react";
import Draggable from "react-draggable";
import { useRecoilState } from "recoil";
import { getBoxState } from "../hooks/useBox";

interface IDrawBoxes {
  id: string;
}
const DrawBoxes: FC<IDrawBoxes> = ({ id }) => {
  const [box, setBox] = useRecoilState(getBoxState(id));
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Draggable
      nodeRef={ref}
      position={{ x: box.x, y: box.y }}
      onDrag={(e, data) => {
        console.log(data.x, data.y);
        setBox({ ...box, x: data.x, y: data.y });
      }}
      bounds="parent"
    >
      <div ref={ref} className="absolute z-10">
        <div className="w-52 h-52 bg-gray-700" />
      </div>
    </Draggable>
  );
};

export default memo(DrawBoxes);
