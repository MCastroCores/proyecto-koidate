import pilatesTerapeutico from "../assets/pilatesterapeutico.jpg";
import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
import { WhatsUpButton } from "../components/WhatsUpButton/WhatsUpButton.jsx";

export const ServicioPilatesTerapeutico = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <h2 className="text-center font-bold text-2xl mt-10 mb-10 text-primary md:text-4xl">
          Pilates Terapeutico
        </h2>
        <img
          className="my-10 w-48 md:w-60 self-center rounded-md"
          src={pilatesTerapeutico}
          alt="foto de una sesión de fisioterapia"
        />
        <p className="mb-5 mx-3 md:text-2xl md:mx-10">
          El pilates es un tipo de ejercicio de media- baja intensidad con
          amplias posibilidades de adaptarse a personas de cualquier edad, con o
          sin patología. Eso lo convierte en una muy buena opción de ejercicio
          para personas que quieran hacer ejercicio controlado sin gran impacto
          o intensidad.
        </p>
        <p className="mb-5 mx-3 md:text-2xl md:mx-10">
          Tiene amplios beneficios, entre ellos permite trabajar la fuerza de la
          musculatura superficial, pero sobre todo también de la musculatura
          profunda estabilizadora, permite trabajar la respiración, activación
          del suelo pélvico y faja abdominal, equilibrio, coordinación,
          flexibilidad, etc.
        </p>
        <h3 className="text-primary font-bold mb-5 mx-3 md:text-2xl md:mx-10">
          PILATES GRUPAL:
        </h3>
        <p className="mb-5 mx-3 md:text-2xl md:mx-10">
          Clases de pilates suelo con aparatos:
        </p>
        <ul className="mb-10 md:text-2xl md:mx-10">
          <li className="equipoList">Suelo</li>
          <li className="equipoList">Aro</li>
          <li className="equipoList">Softball</li>
          <li className="equipoList">Fitball</li>
          <li className="equipoList">Pesos</li>
          <li className="equipoList">Gomas/theraband</li>
          <li className="equipoList">Pica</li>
        </ul>
        <h3 className="text-primary font-bold mb-5 mx-3 md:text-2xl md:mx-10">
          HORARIOS:
        </h3>
        <ul className="mb-10 md:text-2xl md:mx-10">
          <li className="equipoList">
            Lunes: por las mañanas de 9:00 a 10:00h
          </li>
          <li className="equipoList">
            Martes: por las mañanas de 9:00 a 10:00h
          </li>
          <li className="equipoList">
            Miércoles: por las tardes de 20:30 a 21:30h
          </li>
          <li className="equipoList">
            Viernes: por las mañanas de 9:00 a 10:00h y de 10:00 a 11:00h
          </li>
        </ul>
        <p className="mb-5 mx-3 md:text-2xl md:mx-10">
          Si quieres asistir a mis clases de Pilates suelo con aparatos grupal,
          nos vemos en el Gimnasio Judo Club Coruña, situado en la Calle Pintor
          Seijo Rubio 19, 15006, A Coruña. Teléfono de contacto gimnasio: 981 29
          07 39
        </p>
        <WhatsUpButton />
      </main>
      <Footer />
    </>
  );
};
