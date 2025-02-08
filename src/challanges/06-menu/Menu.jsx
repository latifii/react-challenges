import { useState } from "react";
import TitlePage from "../../components/TitlePage";
import CardMenu from "./CardMenu";
import Categories from "./Categories";
import menu from "./data";

export default function Menu() {
  const [dataMenu, setDataMenu] = useState(menu);
  const category = ["all", ...new Set(menu.map((item) => item.category))];

  const handleCategory = (category) => {
    const filter =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setDataMenu(filter);
  };

  return (
    <div className="bg-blue-50 min-h-screen py-10 px-10">
      <TitlePage title="our menu" />
      <div className="flex justify-center items-center gap-3 my-14">
        {category.map((item) => (
          <Categories
            key={`name-${item}`}
            category={item}
            handleCategory={handleCategory}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-10">
        {dataMenu.map((item) => (
          <CardMenu key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
