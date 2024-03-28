import DataItem from "./DataItem";

export default function DataList({ items }) {
  return (
    <ul className="w-full flex flex-col justify-center items-center">
      {items.map((item, index) => (
        <DataItem key={index} {...item} />
      ))}
    </ul>
  );
}
