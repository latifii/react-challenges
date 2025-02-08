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
    </div>
  );
}
