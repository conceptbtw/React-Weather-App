import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-svh flex flex-col text-white bg-black">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
