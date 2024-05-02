import { Header } from "../components/Header/Header.jsx";
import { ContainerPrincipal } from "../components/ContainerPrincipal/ContainerPrincipal.jsx";
import { ContainerServicios } from "../components/ContainerServicios/ContainerServicios.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

import fotoGemelo from "../assets/masajeGemelo.png";
import fotoEspalda from "../assets/masajeEspalda.png";
import fotoFitball from "../assets/estiramientoFitball.png";
import logoFondoRojo from "../assets/pegatinaunica.png";
import fotoCasa from "../assets/casa.png";
import { WhatsUpButton } from "../components/WhatsUpButton/WhatsUpButton.jsx";
import { ClickBurguerContext } from "../contexts/ClickBurguerContext.jsx";
import { useContext } from "react";

export const Inicio = () => {
  const { burguerClick, handleClick } = useContext(ClickBurguerContext);
  return (
    <>
      <div onClick={burguerClick ? handleClick : null}>
        <Header />
        <main>
          <ContainerPrincipal img={logoFondoRojo} />
          <h2 className="text-3xl text-blanco font-bold text-center mt-10 bg-primary p-10 md:text-5xl">
            SERVICIOS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <ContainerServicios
              img={fotoEspalda}
              service="SESIÓN DE FISIOTERAPIA"
              price="35"
              servicelink="/servicios/sesionfisioterapia"
            />
            <ContainerServicios
              img={fotoGemelo}
              service="EJERCICIO TERAPÉUTICO"
              price="36"
              servicelink="/servicios/ejercicioterapeutico"
            />
            <ContainerServicios
              img={fotoFitball}
              service="PILATES TERAPÉUTICO (INDIVIDUAL)"
              price="30"
              servicelink="/servicios/pilatesterapeutico"
            />
            <ContainerServicios
              img={fotoCasa}
              service="SESIÓN A DOMICILIO"
              price="40"
              servicelink="/servicios/sesionadomicilio"
            />
          </div>
          <WhatsUpButton />
        </main>
        <Footer />
      </div>
    </>
  );
};