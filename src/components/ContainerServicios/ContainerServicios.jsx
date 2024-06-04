import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "../../index.css";
import PropTypes from "prop-types";

// CONTAINER PARA MOSTRAR LOS SERVICIOS OFERTADOS

export const ContainerServicios = ({ img, service, price, servicelink }) => {
  const handleNavLinkClick = () => {
    scroll.scrollToTop();
  };
  return (
    <section className="containerServicios border border-primary flex flex-col justify-center items-center w-3/4 mx-auto mt-20">
      <div className="containerLogoFondoRojo mt-5 w-1/2">
        <img className="rounded-md" src={img} alt="" />
      </div>
      <h2 className="p-3 my-3 font-semibold text-center text-3xl md:text-4xl text-blanco bg-primary">
        {service}
      </h2>
      <div>
        <p className=" text-5xl p-4 text-center tracking-tighter font-semibold">
          {price}
          <sup className="text-2xl"> €</sup>
        </p>
      </div>
      <Link
        className="hover:opacity-70 py-4 px-6 border border-primary bg-primary text-blanco mb-10 mt-10 rounded-full text-xl md:text-3xl"
        to={servicelink}
        onClick={handleNavLinkClick}
      >
        SABER MÁS
      </Link>
    </section>
  );
};

ContainerServicios.propTypes = {
  img: PropTypes.string,
  service: PropTypes.string,
  price: PropTypes.string,
  servicelink: PropTypes.string,
};
