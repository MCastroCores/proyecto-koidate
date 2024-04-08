import "../../index.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// COMPONENTE PRINCIPAL PARA ENVOLVER LA PRIMERA SECCIÓN DE INICIO

export const ContainerPrincipal = ({ img }) => {
  return (
    <section className="containerPrincipal flex flex-col justify-center items-center w-3/4 mx-auto mt-20">
      <div className="containerPrincipalImg max-w-xl">
        <img src={img} alt="" />
      </div>
      <h2 className="text-3xl font-extrabold text-center p-3">
        FISIOTERAPEUTA EN A CORUÑA
      </h2>
      <Link
        to="/contacto"
        className="hover:opacity-70 py-5 px-7 border border-primary bg-primary text-blanco mb-10 mt-10 rounded-full text-2xl"
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
