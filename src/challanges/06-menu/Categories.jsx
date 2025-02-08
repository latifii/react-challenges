export default function Categories({ category, handleCategory }) {
  return (
    <button
      className="text-lg text-blue-700 hover:bg-blue-200 py-1 px-2 hover:rounded-md cursor-pointer capitalize"
      key={`item-${category}`}
      onClick={() => handleCategory(category)}
    >
      {category}
    </button>
  );
}
