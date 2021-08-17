import React, {
  MouseEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useDraw } from "./hooks/useDraw";

const CanvasPage = () => {
  const {
    canvasContext,
    canvasRef,
    draw,
    finishDrawing,
    initCanvas,
    startDrawing,
  } = useDraw();

  // const canvas = useRef<HTMLCanvasElement | null>(null);

  // let ballX = 50;
  // let ballSpeedX = 10;

  // function moveEverything() {
  //   if (!!canvas.current) {
  //     ballX = ballX + ballSpeedX;
  //     if (ballX > canvas.current!.width) {
  //       ballSpeedX = -ballSpeedX;
  //     }
  //   }
  // }

  // function drawEverything(canvasContext: CanvasRenderingContext2D) {
  //   canvasContext.fillStyle = "black";
  //   canvasContext.fillRect(0, 0, canvas.current!.width, canvas.current!.height);
  //   canvasContext.fillStyle = "white";
  //   canvasContext.fillRect(0, 210, 10, 100);
  //   canvasContext.fillStyle = "red";
  //   canvasContext.fillRect(ballX, 100, 10, 10);
  // }
  // useEffect(() => {
  //   if (!!canvas.current) {
  //     const canvasContext = canvas.current!.getContext(
  //       "2d"
  //     ) as CanvasRenderingContext2D;

  //     const framesPerSecond = 30;
  //     setInterval(function () {
  //       moveEverything();
  //       drawEverything(canvasContext);
  //     }, 1000 / framesPerSecond);
  //   }
  // });
  useEffect(() => {
    initCanvas();
    canvasContext();
  }, []);

  return (
    <div className="relative flex flex-row w-full h-screen bg-red-400">
      <div className="w-1/5 h-screen p-5 text-2xl text-gray-200 bg-gray-900">
        Sidebar #1
      </div>
      <canvas
        className="w-3/5 h-screen bg-gray-800"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        // ref={canvas}
      />
      <div className="w-1/5 h-screen p-5 text-2xl text-gray-200 bg-gray-900 ">
        Sidebar #1
      </div>
    </div>
  );
};

export default CanvasPage;
