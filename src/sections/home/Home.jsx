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
    </div>
  );
}
