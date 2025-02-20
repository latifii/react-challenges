import { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import ModalContext from "./Context";
import { links, social } from "./data";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const { closeSide, isSideOpen } = useContext(ModalContext);

  return (
    <aside
      className={`fixed top-0 left-0 w-72 bg-white p-4 h-dvh border-r border-gray-300 flex flex-col transition-all duration-300 ease-in  ${
        !isSideOpen ? "-translate-x-96" : "translate-x-0"
      } `}
    >
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800">Sidebar</h2>
        <button
          onClick={closeSide}
          className="cursor-pointer text-2xl text-red-700 block text-center"
        >
          <FaXmark />
        </button>
      </div>
      <ul className="grow">
        {links.map((link) => {
          return (
            <li key={link.id} className="mb-4">
              <Link
                to={link.url}
                className="flex items-center gap-4 text-xl text-gray-600"
              >
                <span>{link.icon}</span>
                <span className="capitalize">{link.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="flex justify-center gap-2 m-auto">
        {social.map((item) => {
          return (
            <li key={item.id}>
              <Link className="text-blue-400 text-2xl" to={item.url}>
                {item.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
