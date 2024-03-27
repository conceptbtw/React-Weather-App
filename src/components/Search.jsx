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
      className="max-w-64 w-full p-4 flex justify-between items-center gap-2 border border-white border-opacity-25 rounded-full bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur"
      onSubmit={handleSubmit}
    >
      <i className="fa-solid fa-magnifying-glass opacity-75"></i>
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
