import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "../../index.css";

import { ClickBurguerContext } from "../../contexts/ClickBurguerContext.jsx";
import { BurguerButton } from "../BurguerButton/BurguerButton.jsx";
import { InformacionContacto } from "../InformacionContacto/InformacionContacto.jsx";
import koidateLogo from "../../assets/logoblancokoidateModificado.png";
import logoRojo from "../../assets/logo-rojo.png";

// COMPONENTE QUE ENGLOBA EL ENCABEZADO

export const Header = () => {
  // USAMOS EL CONTEXTO PARA TRAERNOS EL ESTADO DEL BURGUERCLICK Y LA FUNCIÓN QUE HACE EL CAMBIO ENTRE BOOLEANOS
  const { burguerClick, setBurguerClick, handleClick } =
    useContext(ClickBurguerContext);

  // FUNCIÓN PARA QUE AL PULSAR EN UNO DE LOS NAVLINKS EL SCROLL RETOME EL INICIO DE LA PÁGINA
  const handleNavLinkClick = () => {
    setBurguerClick(!burguerClick);
    scroll.scrollToTop();
  };

  return (
    <>
      <InformacionContacto />
      <header className="flex justify-between items-center my-5">
        <div className="containerImg bg-primary">
          <img className="logo" src={logoRojo} alt="logo" />
        </div>
        <nav
          className={`headerNavBar flex mr-20 list-none gap-5 self-end p-5 font-bold text-primary ${
            burguerClick ? "active" : ""
          }`}
        >
          <NavLink
            to="/"
            className="hover:border-b border-primary"
            onClick={window.innerWidth < 768 ? handleNavLinkClick : null}
          >
            INICIO
          </NavLink>
          <NavLink
            to="/servicios"
            className="hover:border-b border-primary"
            onClick={window.innerWidth < 768 ? handleNavLinkClick : null}
          >
            SERVICIOS
          </NavLink>
          <NavLink
            to="/equipo"
            className="hover:border-b border-primary"
            onClick={window.innerWidth < 768 ? handleNavLinkClick : null}
          >
            EQUIPO
          </NavLink>
          <NavLink
            to="/ubicaciones"
            className="hover:border-b border-primary"
            onClick={window.innerWidth < 768 ? handleNavLinkClick : null}
          >
            UBICACIONES
          </NavLink>
          <NavLink
            to="/contacto"
            className="hover:border-b border-primary"
            onClick={window.innerWidth < 768 ? handleNavLinkClick : null}
          >
            CONTACTO
          </NavLink>
        </nav>
        <div className="burguer self-end p-5">
          <BurguerButton click={burguerClick} handleClick={handleClick} />
        </div>
      </header>
    </>
  );
};
