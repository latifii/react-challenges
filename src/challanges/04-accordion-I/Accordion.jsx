import questions from "./data";
import Question from "./Question";

export default function Accordion() {
  return (
    <div className="bg-purple-900 min-h-screen py-10 px-10">
      <div className="w-3/4 bg-white rounded-sm  mx-auto p-8 grid grid-cols-[250px_1fr] gap-4">
        <h1 className="capitalize text-2xl text-gray-700 font-semibold">
          questions and answers about login
        </h1>
        <div className="">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </div>
      </div>
    </div>
  );
}
