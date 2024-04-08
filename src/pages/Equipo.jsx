import '../index.css';
import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
import fotoIsa from "../assets/fotoIsa-removebg.png";
import fotoFondo from "../assets/blob-haikei.svg";
import { WhatsUpButton } from '../components/WhatsUpButton/WhatsUpButton.jsx';

export const Equipo = () => {
  return (
    <>
    <Header />
    <main>
        <div className="containerImgEquipo mb-20 mt-20 rounded-full mx-auto relative">
          <img className='absolute top-1/4 left-0 w-full h-full' src={fotoFondo} alt='fondo'/>
          <img className='absolute rounded-full imgEquipo object-contain' src={fotoIsa} alt='fotoIsa' />
        </div>
          <div className='ml-2 md:ml-20 p-10'>
            <h2 className='mx-auto mb-6 font-bold text-2xl md:text-4xl text-primary'>Isabel Rodríguez Sosa</h2>
            <h3 className='ml-4 mb-2 font-bold text-xl md:text-3xl'>Fisioterapeuta</h3>
            <p className='mx-10 max-w-2xl font-bold italic mb-10 text-center sm:text-left'>- Colegiada 3733 por COFIGA -</p>
            <h3 className='ml-24 mb-8 font-bold text-xl md:text-3xl text-primary'>ESTUDIOS</h3>
            <ul className='mb-10 md:text-2xl'>
              <li className='equipoList'><span className='font-bold'>Grado en Fisioterapia</span> por la facultad de Fisioterapia de la Universidad de Coruña (UDC)</li>
              <li className='equipoList '><span className='font-bold'>Máster Fisioterapia Manual del Aparato Locomotor</span> por la Universidad de Alcalá de Henares (UAH) (Segundo Curso)</li>
            </ul>
            <h3 className='ml-24 mb-8 font-bold text-xl md:text-3xl text-primary'>CURSOS</h3>
            <ul className='md:text-2xl'>
              <li className='equipoList'><span className='font-bold'>Curso experto internacional en Aparato Locomotor</span> por <span className='font-bold'>Fisiofocus</span> (en curso)</li>
              <li className='equipoList'><span className='font-bold'>Curso de aplicación del vendaje en la práctica clínica:</span> vendaje neuromuscular <span className='font-bold'>(kinesiotaping)</span> y vendaje funcional por <span className='font-bold'>Fisiofocus</span></li>
              <li className='equipoList'><span className='font-bold'>Curso vendaje funcional</span> por <span className='font-bold'>Qresformación</span></li>
              <li className='equipoList'><span className='font-bold'>Programa Formativo de Actualización en Ejercicio Terapéutico</span> por Consejo General de Colegios de Fisioterapeutas</li>
              <li className='equipoList'><span className='font-bold'>CO Actividad Física y Ejercicio Terapéutico En El Embarazo</span> por Fisiofocus</li>
              <li className='equipoList'><span className='font-bold'>Curso de Método Pilates</span> en suelo para fisioterapeutas por Fisiofocus</li>
              <li className='equipoList'><span className='font-bold'>Curso en punción seca</span> en el síndrome de dolor miofascial <span className='font-bold'>(puntos gatillo miofasciales)</span> por <span className='font-bold'>Fisiofocus</span></li>
              <li className='equipoList'><span className='font-bold'>Valoración y tratamiento de la ATM:</span> Disfunción <span className='font-bold'>Craneomandibular</span> por <span className='font-bold'>Fisiofocus</span></li>
            </ul>
          </div>
          <WhatsUpButton />
    </main>
    <Footer />
    </>
  );
};
