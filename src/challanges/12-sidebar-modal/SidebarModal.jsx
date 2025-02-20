import { useContext } from "react";
import ModalContext from "./Context";
import Modal from "./Modal";
import ContainerPage from "../../components/ContainerPage";
import { FaBars } from "react-icons/fa6";
import Sidebar from "./SIdebar";

export default function SidebarModal() {
  const { openModal, openSide } = useContext(ModalContext);
  return (
    <ContainerPage>
      <div className="flex items-center">
        <button
          className="rounded-md bg-blue-800 text-white px-3 py-2 text-center cursor-pointer text-2xl"
          onClick={openSide}
        >
          <FaBars />
        </button>
        <button
          className="rounded-md bg-blue-800 text-white px-3 py-2 text-center cursor-pointer m-auto"
          onClick={openModal}
        >
          Show Modal
        </button>
      </div>
      <Modal>Modal Content</Modal>
      <Sidebar />
    </ContainerPage>
  );
}
