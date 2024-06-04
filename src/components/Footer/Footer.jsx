import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import dedoPie from "../../assets/dedopie.png";
import neoPod from "../../assets/neopodlogo.jpg";
import mapfre from "../../assets/mapfre.png";
import unionMad from "../../assets/unionmadrilena.png";

// COMPONENTE QUE ENGLOBA EL PIE DE PÁGINA

export const Footer = () => {
  const handleNavLinkClick = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="flex flex-col md:flex-row justify-around p-5 gap-5 items-center bg-primary text-blanco border-t border-primary text-sm mt-20">
      <nav className="flex flex-col">
        <Link
          className="hover:border-b border-blanco"
          to="/cookies"
          onClick={handleNavLinkClick}
        >
          POLÍTICA DE COOKIES
        </Link>
        <Link
          className="hover:border-b border-blanco"
          to="/privacidad"
          onClick={handleNavLinkClick}
        >
          POLÍTICA DE PRIVACIDAD
        </Link>
        <Link
          className="hover:border-b border-blanco"
          to="/avisolegal"
          onClick={handleNavLinkClick}
        >
          AVISO LEGAL
        </Link>
      </nav>
      <ul className="flex gap-5">
        <a
          className="text-3xl hover:text-gris"
          href="https://www.instagram.com/"
        >
          <FaInstagramSquare />
        </a>
        <a className="text-3xl  hover:text-gris" href="https://twitter.com/">
          <FaSquareXTwitter />
        </a>
      </ul>
      <ul className="flex flex-col gap-3 sm:flex-row sm:gap-5 items-center">
        <a
          className="text-3xl hover:text-gris"
          href="https://www.instagram.com/"
        >
          <img className="w-24" src={dedoPie} alt="" />
        </a>
        <a className="text-3xl  hover:text-gris" href="https://twitter.com/">
          <img className="w-24" src={neoPod} alt="" />
        </a>
        <a className="text-3xl  hover:text-gris" href="https://twitter.com/">
          <img className="w-24" src={mapfre} alt="" />
        </a>
        <a className="text-3xl  hover:text-gris" href="https://twitter.com/">
          <img className="w-24" src={unionMad} alt="" />
        </a>
      </ul>
      <p>Todos los derechos reservados © 2024 </p>
    </footer>
  );
};
