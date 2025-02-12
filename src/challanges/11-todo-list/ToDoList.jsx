import { useEffect, useState } from "react";
import ContainerPage from "../../components/ContainerPage";
import ToDoItem from "./ToDoItem";
import Alert from "./Alert";

export default function ToDoList() {
  const getLocalstorage = JSON.parse(localStorage.getItem("todo"));
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const [nameTodo, setNameTodo] = useState("");
  const [todo, setTodo] = useState(getLocalstorage ? getLocalstorage : []);

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameTodo) return;

    const todoItem = {
      id: new Date().toISOString(),
      name: nameTodo,
      complete: false,
    };
    setTodo((prev) => [...prev, todoItem]);
    showAlert(true, "success", "Item added to the list");

    setNameTodo("");
  };

  const handleDelete = (id) => {
    const newItem = todo.filter((item) => item.id !== id);
    setTodo(newItem);
    showAlert(true, "delete", "Item deleted");
  };

  const handleChangeComplate = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <ContainerPage>
      {alert.show && <Alert {...alert} showAlert={showAlert} />}
      <div className="border border-gray-300 rounded-sm shadow-lg p-8 w-2/5 flex flex-col gap-5 items-center justify-center bg-white mx-auto">
        <h1 className=" font-bold text-2xl text-gray-700">To-Do List</h1>
        <form
          onSubmit={handleSubmit}
          className="flex border border-gray-300 rounded-sm overflow-hidden w-full mb-5"
        >
          <input
            type="text"
            className="px-4 py-1 bg-gray-50 grow"
            value={nameTodo}
            onChange={(e) => setNameTodo(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-5 text-sm py-1 cursor-pointer">
            Add Item
          </button>
        </form>
        {todo &&
          todo.map((item) => (
            <ToDoItem
              key={item.id}
              {...item}
              handleDelete={handleDelete}
              handleChangeComplate={handleChangeComplate}
            />
          ))}
      </div>
    </ContainerPage>
  );
}
