import { useState } from "react";

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
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="w-full outline-0 bg-transparent placeholder:text-white placeholder:opacity-75"
        placeholder="Lviv, UA"
        name="search"
        type="text"
        value={value}
        onChange={handleChange}
      ></input>
    </form>
  );
}
