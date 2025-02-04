import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/birthday" className="underline text-blue-500">
        Birthday reminder
      </Link>
    </>
  );
}
