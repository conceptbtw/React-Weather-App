export default function DataItem({ src, primary, secondary }) {
  return (
    <li className="w-full flex justify-between items-center border-b border-white border-opacity-25">
      <img className="w-8" src={src} alt="Weather"></img>
      <div>
        <span>{primary}</span>
        {secondary && <span>/</span>}
        {secondary && <span className="opacity-75">{secondary}</span>}
      </div>
    </li>
  );
}
