import { Link } from "react-router-dom";
import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";

export const NotFound = () => {
  return (
    <>
    <Header />
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-5">Error 404</h1>
      <p className="text-2xl font-bold text-center mb-5">No hemos podido encontrar la página que buscas</p>
      <Link to='/' className="hover:opacity-70 py-5 px-7 border border-primary bg-primary text-blanco mb-10 mt-10 rounded-full text-2xl" href="./contacto">VUELVE A INICIO</Link>
    </main>
    <Footer />
    </>
  );
};
