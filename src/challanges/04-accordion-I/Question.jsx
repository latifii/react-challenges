import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function Question({ title, info }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <div className="border border-gray-300 shadow-lg rounded-sm p-3 mb-4">
      <div
        className="flex gap-4 justify-between cursor-pointer"
        onClick={handleShow}
      >
        <h2 className="font-bold text-gray-700 tracking-wider text-md py-2 ">
          {title}
        </h2>
        <button className="bg-gray-200 text-lg text-purple-900 rounded-full w-9 h-9 cursor-pointer">
          {!show ? (
            <AiOutlinePlus className="mx-auto" />
          ) : (
            <AiOutlineMinus className="mx-auto" />
          )}
        </button>
      </div>
      {show && <p className="text-gray-700">{info}</p>}
    </div>
  );
}
