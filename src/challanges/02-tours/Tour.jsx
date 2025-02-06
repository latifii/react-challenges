import { useState } from "react";

export default function Tour({ id, name, info, image, price, handleDelete }) {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-2xl overflow-hidden relative">
      <img className="h-60 object-cover" src={image} alt={`name-${name}`} />
      <div className="p-8 ">
        <h2 className="font-bold text-l text-zinc-800 tracking-widest mb-4">
          {name}
        </h2>
        <p className="text-gray-500 mb-4">
          {readMore ? <span>{info.slice(0, 200)}... </span> : info}
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-blue-500"
          >
            {readMore ? "Read more" : "Show less"}
          </button>
        </p>
        <button
          className="border block border-red-800 text-red-800 rounded p-2 w-full cursor-pointer font-medium"
          onClick={() => handleDelete(id)}
        >
          Not Interested
        </button>
      </div>
      <span className="absolute top-0 right-0 bg-blue-100 text-blue-600 rounded-bl-lg  p-3">
        {price} $
      </span>
    </div>
  );
}
