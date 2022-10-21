import React, { useState } from "react";
import { useQuery, Mutation, useQueryClient, useMutation } from "react-query";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  addTodo,
  getTodos,
  deleteTodo,
  todosApi,
  updateTodo,
} from "../../api/todoApi";
import { AiOutlineUpload } from "react-icons/ai";
import "./style.css";
import Skeleton from "./Skeleton";

const Todos = () => {
  const [todo, setTodo] = useState("");
  // const [input, setInput] = useState("");
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos);

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      //invalidate cache
      queryClient.invalidateQueries("todos");
    },
  });
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  function handleEdit(id, text) {
    deleteTodoMutation.mutate({ id: id });
    setTodo(text);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.trim() == "") return;
    addTodoMutation.mutate({ userId: 0, title: todo, completed: false });
    setTodo("");
  }

  const newItems = (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="buat aktivitas"
        className="p-2"
      />
      <button className=" justify-center gap-2 p-2 flex items-center bg-slate-400 text-white hover:opacity-80">
        <AiOutlineUpload />
        add todos
      </button>
    </form>
  );
  let content;
  if (isLoading) {
    content = <Skeleton />;
  } else if (isError) {
    content = <p className="text-xl text-red">{error.message}</p>;
  } else {
    content = todos.map((item) => {
      return (
        <li
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
          className="flex gap-2 items-center"
          key={item.id}
        >
          <span>{item.title}</span>
          <div className="edit flex items-center  ml-auto">
            <input
              checked={item.completed}
              id={item.id}
              onChange={() =>
                updateTodoMutation.mutate({
                  ...item,
                  completed: !item.completed,
                })
              }
              type="checkbox"
              name=""
            />
            <button
              onClick={() => deleteTodoMutation.mutate({ id: item.id })}
              className=" text-2xl text-gray-500 hover:opacity-70 flex items-center"
            >
              <AiFillDelete />
            </button>
            <button
              onClick={() => handleEdit(item.id, item.title)}
              className="text-2xl text-gray-500 hover:opacity-70 flex items-center"
            >
              <AiFillEdit />
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="wrapper max-w-sm gap-3 mx-auto mt-10 rounded-md p-3 shadow-md">
      {!isLoading && newItems}
      <ul className="space-y-2 text-gray-700 mt-2 divide-y-2 list-none">
        {content}
      </ul>
    </div>
  );
};

export default Todos;
