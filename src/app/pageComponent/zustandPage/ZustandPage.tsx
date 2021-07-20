import React, { useCallback, useRef } from "react";
import useNavigate from "../../utils/useNavigate";
import { useTodoStore } from "./store/useTodo";
import Todo from "./Todo";

const ZustandPage = () => {
  const { addTodo } = useTodoStore(
    useCallback((state) => ({ addTodo: state.addTodo }), [])
  );

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current?.value) {
      if (newTodoRef.current.value.length > 0) {
        addTodo(newTodoRef.current.value);
        newTodoRef.current.value = "";
      }
    }
  }, [addTodo]);
  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-500">
      <button
        className="p-3 m-2 font-bold text-gray-500 bg-green-300 rounded-md"
        onClick={() => useNavigate?.goBack()}
      ></button>
      <div className="p-5 mt-40 bg-gray-400 rounded-xl">
        <input className="h-12 p-2 rounded-md" type="text" ref={newTodoRef} />
        <button
          className="p-3 m-2 font-bold text-gray-500 bg-green-300 rounded-md"
          onClick={onAddTodo}
        >
          Add Todo
        </button>
      </div>
      <Todo />
    </div>
  );
};

export default ZustandPage;
