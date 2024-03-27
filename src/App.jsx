import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [city, setCity] = useState("");

  const handleSearch = (c) => {
    setCity(c);
  };

  return (
    <div className="min-h-svh flex flex-col justify-center items-center text-white bg-black">
      <Header onSearch={handleSearch} />
      <Main city={city} />
      <Footer />
    </div>
  );
}
