import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openSide = () => setIsSideOpen(true);
  const closeSide = () => setIsSideOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isSideOpen,
        openSide,
        closeSide,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
