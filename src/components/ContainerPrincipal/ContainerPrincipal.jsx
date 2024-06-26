import "../../index.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// COMPONENTE PRINCIPAL PARA ENVOLVER LA PRIMERA SECCIÓN DE INICIO

export const ContainerPrincipal = ({ img }) => {
  return (
    <section className="bg-[url(C:\Users\castr\Desktop\DEVELOPER\GITHUB\proyecto-koidate\src\assets\isaMasaje.jpeg)] bg-cover flex flex-col justify-around items-center min-h-screen md:min-h-2xl md:w-3/4 md:max-w-[824px] md:mx-auto">
      <Link
        to="/contacto"
        className="hover:opacity-70 py-5 px-7 border border-primary bg-primary text-blanco mb-10 mt-10 rounded-full text-2xl font-semibold"
        href="./contacto"
      >
        PIDE TU CITA
      </Link>
    </section>
  );
};

ContainerPrincipal.propTypes = {
  img: PropTypes.string,
};
