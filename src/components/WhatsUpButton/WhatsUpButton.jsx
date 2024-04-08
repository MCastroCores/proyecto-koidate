import { useContext } from 'react';

import { ClickBurguerContext } from '../../contexts/ClickBurguerContext.jsx';
import logoWhatsUp from '../../assets/logoWhatsUp.svg';

export const WhatsUpButton = () => {
  // USAMOS EL CONTEXTO PARA TRAERNOS EL ESTADO DEL BURGUERCLICK Y LA FUNCIÓN QUE HACE EL CAMBIO ENTRE BOOLEANOS
  const { burguerClick } = useContext(ClickBurguerContext);

  return (
    <div className="hover:animate-bounce max-w-10 fixed bottom-5 right-5">
      {!burguerClick && <a href="https://api.whatsapp.com/send?phone=34665843492&text=Hola%20tengo%20inter%C3%A9s%20en%20concertar%20una%20sesi%C3%B3n%20de%20fisioterapia%20contigo." target='_blank'><img src={logoWhatsUp} alt="" /></a>}
    </div>
  );
};
