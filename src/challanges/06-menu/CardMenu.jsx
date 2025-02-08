export default function CardMenu({ title, price, img, desc }) {
  return (
    <div className="grid grid-cols-[225px_1fr] gap-3">
      <div className="border-2 border-blue-900 rounded-md overflow-hidden">
        <img
          className="w-full h-40 object-cover"
          src={img}
          alt={`pic-${title}`}
        />
      </div>
      <div>
        <div className="flex justify-between border-b border-dashed mb-4">
          <h2 className="capitalize tracking-widest font-bold text-gray-800">
            {title}
          </h2>
          <span className="text-blue-900 font-bold"> ${price}</span>
        </div>
        <p className="text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
