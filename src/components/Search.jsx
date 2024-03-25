import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  return (
    <form className="p-2 flex justify-center items-center gap-2 border rounded-xl">
      <FaMagnifyingGlass />
      <input
        className="outline-0 bg-transparent placeholder:text-white"
        placeholder="Search..."
        type="text"
      ></input>
    </form>
  );
}
