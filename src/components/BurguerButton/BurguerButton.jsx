import './BurguerButton.css';
import PropTypes from 'prop-types';

// BOTÓN PARA MONSTRAR UN MENÚ DESPLEGABLE A PARTIR DE MEDIA QUERY PARA TABLET

export const BurguerButton = ({ click, handleClick }) => {
  return (
    <div onClick={handleClick} className={`nav-icon-2 ${click ? 'open' : ''}`}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  );
};

BurguerButton.propTypes = {
  click: PropTypes.bool,
  handleClick: PropTypes.func
};
