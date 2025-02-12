import { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import "./alert.css";

export default function Alert({ type, msg, showAlert }) {
  const alertClasses = {
    success: "bg-green-600",
    delete: "bg-red-600",
    default: "bg-gray-600",
  };

  useEffect(() => {
    const alertInterval = setInterval(() => showAlert(), 3000);

    return () => clearInterval(alertInterval);
  }, [showAlert]);
  const alertTypeClass = alertClasses[type] || alertClasses.default;
  return (
    <div className="fixed top-10 left-10 w-auto p-5 text-center rounded-lg shadow-2xl bg-white  flex transform transition-all duration-500 ease-in-out scale-100 fade-in">
      <span
        className={`text-lg w-6 h-6 flex items-center justify-center  text-white rounded-full mr-3 ${alertTypeClass}`}
      >
        {type === "success" && <FaCheck />}
        {type === "delete" && <FaXmark />}
      </span>
      <p className="text-gray-800">{msg}</p>
      <button
        className="text-gray-400 absolute top-2 right-2 cursor-pointer text-sm"
        onClick={showAlert}
      >
        <FaXmark />
      </button>
    </div>
  );
}
