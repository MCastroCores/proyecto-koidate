import { createContext, useState } from "react";
// import Proptypes from 'prop-types';

export const ClickBurguerContext = createContext();

export const ClickBurguerProvider = ({ children }) => {
  // ESTADO QUE HACE REFERENCIA AL DESPLIEGUE DEL MENÚ DESPLEGABLE A PARTIR DE TABLET
  const [burguerClick, setBurguerClick] = useState(false);

  // FUNCIÓN PARA CAMBIAR EL BOLEANO DEL ESTADO ANTERIOR
  const handleClick = () => {
    setBurguerClick(!burguerClick);
  };

  return (
    <ClickBurguerContext.Provider value={{ burguerClick, handleClick, setBurguerClick }}>
      {children}
    </ClickBurguerContext.Provider>
  );
};
