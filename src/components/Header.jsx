import Search from "./Search";

export default function Header({ onSearch }) {
  return (
    <header className="w-full p-4 flex justify-center items-center border-b border-white border-opacity-25 bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur">
      <Search onSearch={onSearch} />
    </header>
  );
}
