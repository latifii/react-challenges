export default function TitlePage({ title }) {
  return (
    <h1 className="text-gray-800 text-4xl font-bold text-center capitalize mb-10 relative before:content-[''] before:absolute before:-bottom-4 before:left-0 before:right-0 before:mx-auto   before:w-1/10 before:h-1 before:bg-blue-400">
      {title}
    </h1>
  );
}
