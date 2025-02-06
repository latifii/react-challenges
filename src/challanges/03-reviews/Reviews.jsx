import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import reviews from "./data";
const backgroundClass = "bg-blue-50 min-h-screen py-10 px-10";

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const { image, job, name, text } = reviews[index];
  const lengthReviews = reviews.length;

  const checkNum = (num) => {
    if (num > lengthReviews - 1) return 0;
    if (num < 0) return lengthReviews - 1;

    return num;
  };

  const random = (max) => Math.floor(Math.random() * max);

  const nextPerson = () => setIndex((item) => checkNum(item + 1));
  const prevPerson = () => setIndex((item) => checkNum(item - 1));

  const randomPerson = () => {
    let newIndex = random(lengthReviews);

    if (newIndex === index) newIndex = index + 1;
    setIndex(newIndex);
  };

  return (
    <div className={backgroundClass}>
      <h1 className="text-gray-800 text-4xl font-bold text-center capitalize mb-10 relative before:content-[''] before:absolute before:-bottom-4 before:left-0 before:right-0 before:mx-auto   before:w-1/10 before:h-1 before:bg-blue-400">
        our reviews
      </h1>
      <div className="w-1/2 mx-auto  p-5 bg-white rounded-md shadow-2xl flex flex-col items-center">
        <div className="relative">
          <img
            className="w-40 h-40 rounded-full object-cover mb-5"
            src={image}
            alt={`name-${name}`}
          />
          <span className="bg-blue-400 text-white text-2xl rounded-full absolute top-0 left-0 p-3">
            <FaQuoteRight />
          </span>
        </div>
        <h2 className="font-bold capitalize tracking-widest text-md text-gray-700">
          {name}
        </h2>
        <p className="text-blue-400 uppercase mb-5 text-sm">{job}</p>
        <p className="text-gray-500 text-center mb-3">{text}</p>
        <div className="flex gap-5 mb-4">
          <button
            className="text-xl text-blue-300 cursor-pointer"
            onClick={prevPerson}
          >
            <FaAngleLeft />
          </button>
          <button
            className="text-xl text-blue-300 cursor-pointer"
            onClick={nextPerson}
          >
            <FaAngleRight className="text-xl text-blue-300 cursor-pointer" />
          </button>
        </div>
        <button
          className="capitalize text-blue-400 bg-blue-100 cursor-pointer rounded-sm text-sm p-1"
          onClick={randomPerson}
        >
          surprise me
        </button>
      </div>
    </div>
  );
}
