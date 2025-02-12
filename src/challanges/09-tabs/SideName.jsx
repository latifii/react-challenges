export default function SideName({ name, onClick, isActive }) {
  return (
    <h3
      className={`text-gray-700 tracking-wide px-8 text-2xl cursor-pointer transition ease-in-out duration-300 
        ${
          isActive
            ? "border-l-2 border-blue-400 text-blue-400"
            : "hover:text-blue-400 hover:border-l-2 hover:border-blue-400"
        }
      `}
      onClick={onClick}
    >
      {name}
    </h3>
  );
}
