import { useEffect, useState } from "react";
import Values from "values.js";
import ContainerPage from "../../components/ContainerPage";
import SingleColor from "./Colors";

export default function ColorGenerator() {
  const [color, setColor] = useState("#000");
  const [colors, setColors] = useState();
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleGenerateColor = (e) => {
    e.preventDefault();
    const colorValue = new Values(color);
    const shadesAndTints = colorValue.all(10);
    setColors(shadesAndTints);
    console.log(shadesAndTints);
  };

  useEffect(() => {}, []);
  return (
    <ContainerPage>
      <form className="flex items-center mb-8" onSubmit={handleGenerateColor}>
        <h1 className="text-2xl mr-6 tracking-wider">Color Generator</h1>
        <input
          type="color"
          value={color}
          onChange={handleChangeColor}
          className="w-14 h-12 bg-white pl-1"
        />
        <input
          type="text"
          className="bg-white text-gray-700 h-12 text-lg px-3"
          placeholder="#f115025"
          onChange={handleChangeColor}
          value={color}
        />
        <button
          className="text-white h-12 px-4 cursor-pointer rounded-e-lg"
          style={{ background: color }}
        >
          Submit
        </button>
      </form>
      {colors && (
        <div className="grid grid-cols-5 p-5">
          {colors.map((color) => (
            <SingleColor key={color.hex} {...color} hex={color.hex} />
          ))}
        </div>
      )}
    </ContainerPage>
  );
}
