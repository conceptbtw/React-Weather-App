import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(value);
  };

  return (
    <form
      className="p-2 flex justify-center items-center gap-2 border rounded-xl"
      onSubmit={handleSubmit}
    >
      <FaMagnifyingGlass />
      <input
        className="outline-0 bg-transparent placeholder:text-white"
        placeholder="Search..."
        type="text"
        value={value}
        onChange={handleChange}
      ></input>
    </form>
  );
}
