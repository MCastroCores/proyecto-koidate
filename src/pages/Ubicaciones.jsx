import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import fotoDedoPie1 from "../assets/dedopie1.jpg";
import fotoDedoPie2 from "../assets/dedopie2.jpg";
import fotoNeoPod1 from "../assets/neopod1.jpg";
import fotoNeoPod2 from "../assets/neopod2.jpg";
import { WhatsUpButton } from "../components/WhatsUpButton/WhatsUpButton.jsx";

export const Ubicaciones = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2 className="text-3xl text-blanco font-bold text-center my-10 bg-primary p-10 md:text-5xl">
            KOIDATE
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center font-bold text-xl md:text-2xl">
            <TfiLocationPin />
            <p className="p-5 text-center">
              {" "}
              Plaza da Gaiteira 2 Bajo Izq 2 A Coruña 15006 (En el interior de
              Clínica Dedopie Podología)
            </p>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center sm:flex-row ">
            <article className="containerImgUbicaciones">
              <img
                className="rounded-md"
                src={fotoDedoPie1}
                alt="Fotos de las clínicas"
              />
            </article>
            <article className="containerImgUbicaciones">
              <img
                className="rounded-md"
                src={fotoDedoPie2}
                alt="Fotos de las clínicas"
              />
            </article>
          </div>
          <Link
            className="text-center text-blanco font-bold p-3 bg-primary mx-auto block w-52 mt-10"
            to="../proyecto-koidate/registro_sanitario_neopod.pdf"
            target="_blank"
          >
            Registro sanitario Clínica Dedopie PDF
          </Link>
        </section>
        <section>
          <h2 className="text-3xl text-blanco font-bold text-center my-10 bg-primary p-10 md:text-5xl">
            KOIDATE FISIOTERAPIA
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center font-bold text-xl md:text-2xl">
            <TfiLocationPin />
            <p className="p-5 text-center">
              Oidor Gregorio Tovar 17 bajo Izq A Coruña 15007 (En el interior de
              Neopod Clínica Podológica)
            </p>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center sm:flex-row ">
            <article className="containerImgUbicaciones">
              <img
                className="rounded-md"
                src={fotoNeoPod1}
                alt="Fotos de las clínicas"
              />
            </article>
            <article className="containerImgUbicaciones">
              <img
                className="rounded-md"
                src={fotoNeoPod2}
                alt="Fotos de las clínicas"
              />
            </article>
          </div>
          <Link
            className="text-center text-blanco font-bold p-3 bg-primary mx-auto block w-52 mt-10"
            to="../proyecto-koidate/registro_sanitario_neopod.pdf"
            target="_blank"
          >
            Registro sanitario Clínica Neopod PDF
          </Link>
        </section>
        <WhatsUpButton />
      </main>
      <Footer />
    </>
  );
};
