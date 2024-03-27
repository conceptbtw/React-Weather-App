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
    setValue("");
  };

  return (
    <form
      className="max-w-64 w-full p-2 flex justify-center items-center gap-2 border border-white border-opacity-25 rounded-xl"
      onSubmit={handleSubmit}
    >
      <FaMagnifyingGlass />
      <input
        className="w-full outline-0 bg-transparent placeholder:text-white"
        placeholder="Search..."
        name="search"
        type="text"
        value={value}
        onChange={handleChange}
      ></input>
    </form>
  );
}
