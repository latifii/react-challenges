import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Tour from "./Tour";
import TitlePage from "../../components/TitlePage";

const url = "https://course-api.com/react-tours-project";

const backgroundClass = "bg-blue-50 min-h-screen py-14 px-10";

export default function Tours() {
  const [dataTours, setDataTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    const data = dataTours.filter((item) => item.id !== id);
    setDataTours(data);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setDataTours(data);
      setLoading(false);
      console.log("data", data);

      return data;
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <Loading />;

  if (dataTours.length === 0)
    return (
      <div className={backgroundClass}>
        <div className="my-20 mx-auto w-52">
          <p className="text-3xl font-bold text-gray-800 mb-4">No Tours Left</p>
          <button
            className="p-1 rounded-md text-white bg-blue-400 font-bold cursor-pointer"
            onClick={fetchTours}
          >
            Refresh
          </button>
        </div>
      </div>
    );

  return (
    <div className={backgroundClass}>
      <TitlePage title="our tours" />
      <div className="grid grid-cols-3 gap-5">
        {dataTours.map((tour) => (
          <Tour key={tour.id} {...tour} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
