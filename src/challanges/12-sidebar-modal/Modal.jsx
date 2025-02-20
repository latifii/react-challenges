import { useContext } from "react";
import ModalContext from "./Context";
import { FaXmark } from "react-icons/fa6";

export default function Modal({ children }) {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen) return;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black opacity-75  "
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-10 border rounded-lg w-2/5">
        <button
          onClick={closeModal}
          className="cursor-pointer text-2xl text-red-700 block ml-auto"
        >
          <FaXmark />
        </button>
        <div className="text-center font-bold text-2xl my-6">{children}</div>
      </div>
    </div>
  );
}
