import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <Link to="/birthday" className="underline text-blue-500">
        Birthday reminder
      </Link>
      <Link to="/tours" className="underline text-blue-500">
        Tours
      </Link>
      <Link to="/reviews" className="underline text-blue-500">
        Reviews
      </Link>
      <Link to="/accordion" className="underline text-blue-500">
        Accordion
      </Link>
      <Link to="/accordion-II" className="underline text-blue-500">
        Accordion II
      </Link>
      <Link to="/menu" className="underline text-blue-500">
        Menu
      </Link>
      <Link to="/tabs" className="underline text-blue-500">
        Tabs
      </Link>
      <Link to="/slider" className="underline text-blue-500">
        Slider
      </Link>
      <Link to="/lorem" className="underline text-blue-500">
        Lorem ipsup generate
      </Link>
      <Link to="/color-generator" className="underline text-blue-500">
        Color Generator
      </Link>
      <Link to="/todo-list" className="underline text-blue-500">
        To Do List
      </Link>
    </div>
  );
}
