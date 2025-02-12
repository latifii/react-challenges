import { FaRegTrashCan } from "react-icons/fa6";

export default function ToDoItem({
  id,
  name,
  complete,
  handleChangeComplate,
  handleDelete,
}) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex  gap-3">
        <input
          type="checkbox"
          value={complete}
          onChange={() => handleChangeComplate(id)}
          checked={complete}
          id={name}
        />
        <label
          htmlFor={name}
          style={{ textDecoration: complete && "line-through" }}
        >
          {name}
        </label>
      </div>
      <button
        className="text-red-700 cursor-pointer text-lg"
        onClick={() => handleDelete(id)}
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
}
