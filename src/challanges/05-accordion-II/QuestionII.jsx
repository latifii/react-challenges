import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function QuestionII({
  title,
  info,
  id,
  toggleQuestion,
  isActive,
}) {
  return (
    <div className="border border-gray-300 shadow-lg rounded-sm p-3 mb-4">
      <div
        className="flex gap-4 justify-between cursor-pointer"
        onClick={() => toggleQuestion(id)}
      >
        <h2 className="font-bold text-gray-700 tracking-wider text-md py-2 ">
          {title}
        </h2>
        <button className="bg-gray-200 text-lg text-purple-900 rounded-full w-9 h-9 cursor-pointer">
          {isActive ? (
            <AiOutlineMinus className="mx-auto" />
          ) : (
            <AiOutlinePlus className="mx-auto" />
          )}
        </button>
      </div>
      {isActive && <p className="text-gray-700">{info}</p>}
    </div>
  );
}
