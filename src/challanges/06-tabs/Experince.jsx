export default function Experince({ job }) {
  const { dates, duties, title, company } = job;
  return (
    <article>
      <h2 className="text-2xl font-semibold capitalize tracking-wider mb-3">
        {title}
      </h2>
      <span className="py-1 px-2 font-bold bg-gray-300 text-gray-500 tracking-widest mb-2 inline-block rounded-md">
        {company}
      </span>
      <p className="font-light text-gray-500 tracking-widest mb-4">{dates}</p>
      <ul className="pl-6 list-disc space-y-3">
        {duties.map((item, i) => (
          <li className="text-md text-gray-500" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
