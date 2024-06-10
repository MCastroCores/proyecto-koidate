import { useContext } from "react";

import { ClickBurguerContext } from "../../contexts/ClickBurguerContext.jsx";
import logoWhatsUp from "../../assets/logoWhatsUp.svg";

export const WhatsUpButton = () => {
  // USAMOS EL CONTEXTO PARA TRAERNOS EL ESTADO DEL BURGUERCLICK Y LA FUNCIÓN QUE HACE EL CAMBIO ENTRE BOOLEANOS
  const { burguerClick } = useContext(ClickBurguerContext);

  return (
    <div className="hover:animate-bounce max-w-10 fixed bottom-5 right-5">
      {!burguerClick && (
        <a href={import.meta.env.VITE_WHATSAPP_URL} target="_blank">
          <img
            src={logoWhatsUp}
            alt="Enlace a número de contacto en WhatsApp"
          />
        </a>
      )}
    </div>
  );
};
