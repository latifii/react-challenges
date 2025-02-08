import { useState } from "react";
import ContainerPage from "../../components/ContainerPage";
import text from "./data";

export default function Lorem() {
  const [textData, setTextData] = useState([]);
  const [inputValue, setInputValue] = useState(1);

  const handleGenerate = (e) => {
    e.preventDefault();
    const newData = text.slice(0, inputValue);
    setTextData(newData);
  };

  return (
    <ContainerPage>
      <div className="w-3/5 mx-auto flex flex-col gap-3 justify-center items-center">
        <h1 className="uppercase text-2xl tracking-widest mb-4">
          tired of boring lorem ipsum?
        </h1>
        <form
          onSubmit={handleGenerate}
          className="flex gap-2 justify-center items-center mb-6"
        >
          <span className="text-xl">Paragraphs:</span>
          <input
            type="number"
            className="bg-gray-300 rounded-md w-24 h-10 px-3 text-xl"
            value={inputValue}
            max={text.length - 1}
            min={1}
            onChange={(e) => setInputValue(parseInt(e.target.value))}
          />
          <button className="bg-emerald-600 text-white w-24 px-3 h-10 rounded-md cursor-pointer hover:bg-emerald-900">
            Generate
          </button>
        </form>

        {textData.map((item, index) => (
          <p key={index} className="text-gray-900 leading-7">
            {item}
          </p>
        ))}
      </div>
    </ContainerPage>
  );
}
