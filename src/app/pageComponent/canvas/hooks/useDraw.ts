import { MouseEvent, useRef, useState } from "react";

export const useDraw = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const initCanvas = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    canvas!.width = window.innerWidth * 2;
    canvas!.height = window.innerHeight * 2;
    canvas!.style.width = `${window.innerWidth}px`;
    canvas!.style.height = `${window.innerHeight}px`;
  };
  const canvasContext = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    context!.scale(2, 2);
    context!.lineCap = "round";
    context!.strokeStyle = "gray";
    context!.lineWidth = 5;
    contextRef.current = context;
  };
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

  return {
    canvasRef,
    initCanvas,
    canvasContext,
    startDrawing,
    finishDrawing,
    draw,
  };
};
