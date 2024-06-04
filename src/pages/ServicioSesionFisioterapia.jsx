import "../index.css";
import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
import { WhatsUpButton } from "../components/WhatsUpButton/WhatsUpButton.jsx";
import sesionFisioterapia from "../assets/sesionfisioterapia.jpg";

export const ServicioSesionFisioterapia = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <h2 className="text-center font-bold text-2xl mt-10 mb-10 text-primary md:text-4xl">
          Sesion Fisioterapia
        </h2>
        <img
          className="my-10 w-48 md:w-60 self-center rounded-md"
          src={sesionFisioterapia}
          alt="foto de una sesión de fisioterapia"
        />
        <p className="mb-5 mx-3 md:text-2xl md:mx-10">
          Sesiones y tratamientos personalizados para cada caso.
        </p>
        <ul className="mb-10 md:text-2xl md:mx-10">
          <li className="equipoList">
            Terapia manual: masaje, movilizaciones vertebrales, neuronamia, etc.
          </li>
          <li className="equipoList">Fisioterapia invasiva: punción seca</li>
          <li className="equipoList">Ejercicio terapéutico</li>
          <li className="equipoList">Educación en dolor</li>
          <li className="equipoList">
            ATM, y dolores mandibulares, cefaleas, dolor orofacial
          </li>
          <li className="equipoList">Lesiones deportivas</li>
          <li className="equipoList">Rehabilitación</li>
        </ul>
        <WhatsUpButton />
      </main>
      <Footer />
    </>
  );
};
