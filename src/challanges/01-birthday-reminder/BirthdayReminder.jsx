import { useState } from "react";
import BirthdayList from "./BirthdayList";
import data from "./data";

export default function BirthdayReminder() {
  const [dataUser, setDataUser] = useState(data);
  const clearAllHandler = () => setDataUser([]);
  return (
    <div className="bg-blue-950 min-h-screen py-14">
      <div className="w-96 bg-white rounded-2xl shadow-2xl  mx-auto p-10">
        <h1 className="mb-6 text-2xl">{dataUser.length} birthdays today</h1>
        {dataUser.map((person) => (
          <BirthdayList key={person.id} {...person} />
        ))}
        <button
          className="bg-blue-950 py-4 rounded-xl w-full text-white cursor-pointer"
          onClick={clearAllHandler}
        >
          CLEAR ALL
        </button>
      </div>
    </div>
  );
}
