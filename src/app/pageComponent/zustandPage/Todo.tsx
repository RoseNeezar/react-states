import React, { useCallback } from "react";
import { useTodoStore } from "./store/useTodo";

const Todo = () => {
  const { todos, removeTodo: remove } = useTodoStore(
    useCallback(
      (state) => ({
        todos: state.todos,
        removeTodo: state.removeTodo,
      }),
      []
    )
  );

  const removeTodo = useCallback(
    (id: number) => {
      remove(id);
    },
    [remove]
  );
  return (
    <div className="mt-7">
      {todos ? (
        todos.map((re) => (
          <div
            key={re.id}
            className="flex items-center justify-between mt-2 bg-gray-300 rounded-md w-80 h-14 "
          >
            <p className="ml-4 text-2xl font-bold text-gray-500">{re.title}</p>
            <button
              onClick={() => removeTodo(Number(re.id))}
              className="p-2 m-4 text-white bg-red-400 rounded-md"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <h1>No todo</h1>
      )}
    </div>
  );
};

export default Todo;
