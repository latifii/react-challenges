import { useState } from "react";
import questions from "../04-accordion-I/data";
import QuestionII from "./QuestionII";

export default function AccordionII() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleQuestion = (id) => {
    setActiveIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-purple-900 min-h-screen py-10 px-10">
      <div className="w-3/4 bg-white rounded-sm  mx-auto p-8 grid grid-cols-[250px_1fr] gap-4">
        <h1 className="capitalize text-2xl text-gray-700 font-semibold">
          questions and answers about login
        </h1>
        <div className="">
          {questions.map((question) => (
            <QuestionII
              key={question.id}
              {...question}
              isActive={activeIndex === question.id}
              toggleQuestion={toggleQuestion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
