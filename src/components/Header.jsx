import Search from "./Search";

export default function Header({ onSearch }) {
  return (
    <header className="w-full p-4 flex justify-center items-center border-b">
      <Search onSearch={onSearch} />
    </header>
  );
}
