import ContainerPage from "../../components/ContainerPage";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import people from "./data";
import { useEffect, useState } from "react";

const classButton =
  "absolute  top-1/2 transform -translate-y-1/2 cursor-pointer w-8 h-8 bg-gray-600 text-white rounded-md";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkNum = (num) => {
    if (num > people.length - 1) return 0;
    if (num < 0) return people.length - 1;
    return num;
  };

  const nextSlide = () => setCurrentIndex((prev) => checkNum(prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => checkNum(prev - 1));

  useEffect(() => {
    const slideInterval = setInterval(
      () => setCurrentIndex((prev) => checkNum(prev + 1)),
      3000
    );
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <ContainerPage>
      <div className="w-3/4  mt-10 mx-auto relative overflow-x-hidden flex">
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {people.map((item) => {
            return (
              <div
                className="flex flex-col items-center justify-center gap-2 min-w-full px-16"
                key={item.id}
              >
                <div className="border-4 border-gray-300 rounded-full overflow-hidden">
                  <img
                    className="w-26 h-26 object-cover"
                    src={item.image}
                    alt={`pic-${item.name}`}
                  />
                </div>
                <h2 className="text-blue-400 capitalize tracking-wider text-2xl">
                  {item.name}
                </h2>
                <p className="capitalize text-gray-700 mb-4">{item.title}</p>
                <p className="text-center text-gray-500">{item.quote}</p>
                <FaQuoteRight className="text-6xl text-blue-400" />
              </div>
            );
          })}
        </div>
        <button className={`${classButton} right-0`} onClick={nextSlide}>
          <FaAngleRight className="text-2xl mx-auto" />
        </button>
        <button className={`${classButton} left-0`} onClick={prevSlide}>
          <FaAngleLeft className="text-2xl mx-auto " />
        </button>
      </div>
    </ContainerPage>
  );
}
