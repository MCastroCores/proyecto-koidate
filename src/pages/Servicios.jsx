import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
import { ContainerServicios } from "../components/ContainerServicios/ContainerServicios.jsx";

import fotoGemelo from "../assets/masajeGemelo.png";
import fotoEspalda from "../assets/masajeEspalda.png";
import fotoFitball from "../assets/estiramientoFitball.png";
import fotoCasa from "../assets/casa.png";
import { WhatsUpButton } from "../components/WhatsUpButton/WhatsUpButton.jsx";

export const Servicios = () => {
  return (
    <>
      <Header />
      <main>
        <h2 className="text-3xl text-primary font-bold text-center mt-10 p-10 md:text-5xl">
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
    </>
  );
};
