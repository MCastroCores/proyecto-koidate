import "../index.css";
import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
import { WhatsUpButton } from "../components/WhatsUpButton/WhatsUpButton.jsx";
import ejercicioTerapeutico from "../assets/ejercicioterapeutico.jpg";

export const ServicioEjercicioTerapeutico = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <h2 className="text-center font-bold text-2xl mt-10 mb-10 text-primary md:text-4xl">
          Ejercicio Terapeutico
        </h2>
        <img
          className="my-10 w-48 md:w-60 self-center rounded-md"
          src={ejercicioTerapeutico}
          alt="foto de una sesión de fisioterapia"
        />
        <p className="mb-5 mx-3 md:text-2xl md:mx-10">
          Actualmente sabemos que el ejercicio es una de las mejores
          herramientas que tenemos desde la fisioterapia para mejorar el dolor y
          la calidad de vida de las personas. Entre los beneficios que aporta
          son: mejoras en el sistema músculo esquelético, mejoras en la
          tolerancia a la carga, mejora del dolor agudo y crónico, mejoras a
          nivel cardiorrespiratorio y vascular, mejoras en procesos
          psicológicos, etc.
        </p>
        <p className="mb-5 mx-3 md:text-2xl md:mx-10">
          Precisamos que nuestro cuerpo esté bien adaptado y en unas buenas
          condiciones para hacer frente a las cargas y a las demandas físicas de
          nuestro día a día, para así evitar la aparición de posibles dolores y
          lesiones. En Koi-date realizamos sesiones de ejercicio totalmente
          individualizadas, guiadas por la fisioterapeuta.
        </p>
        <h3 className="text-primary font-bold mb-5 mx-3 md:text-2xl md:mx-10">
          OBJETIVOS:
        </h3>
        <ul className="mb-10 md:text-2xl md:mx-10">
          <li className="equipoList">Tratamiento de patologías</li>
          <li className="equipoList">Prevención</li>
          <li className="equipoList">Corrección de alteraciones</li>
          <li className="equipoList">
            Factores de riesgo relacionados con la salud
          </li>
        </ul>
        <WhatsUpButton />
      </main>
      <Footer />
    </>
  );
};
