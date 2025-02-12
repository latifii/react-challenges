export default function SingleColor({ type, weight, hex }) {
  console.log(hex);

  return (
    <div
      className=" min-h-14 p-6"
      style={{
        backgroundColor: "#" + hex,
        color: type === "tint" ? "#000" : "#fff",
      }}
    >
      <p> {weight}%</p>
      <p> #{hex}</p>
    </div>
  );
}
