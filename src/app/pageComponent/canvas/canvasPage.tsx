import React, { MouseEvent, useEffect, useRef, useState } from "react";

const CanvasPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas!.width = window.innerWidth * 2;
    canvas!.height = window.innerHeight * 2;
    canvas!.style.width = `${window.innerWidth}px`;
    canvas!.style.height = `${window.innerHeight}px`;

    const context = canvas!.getContext("2d");
    context!.scale(2, 2);
    context!.lineCap = "round";
    context!.strokeStyle = "green";
    context!.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }: MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef!.current!.beginPath();
    contextRef.current!.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current!.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }: MouseEvent) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current!.lineTo(offsetX, offsetY);
    contextRef.current!.stroke();
  };
  return (
    <div className="relative h-screen">
      <div className="h-screen p-5 text-2xl text-gray-200 bg-gray-900 w-60">
        Sidebar
      </div>
      <canvas
        className="absolute top-0 left-60"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
};

export default CanvasPage;
