export default function BirthdayList({ image, name, age }) {
  return (
    <article className="flex grid- gap-x-3 mb-6 items-center">
      <img
        className="w-20 h-20 object-cover rounded-full"
        src={image}
        label={`pic-${name}`}
      />
      <div>
        <h4 className="text-l tracking-widest font-bold">{name}</h4>
        <p className="text-sm text-gray-600">{age} years</p>
      </div>
    </article>
  );
}
