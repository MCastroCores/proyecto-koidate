import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
import { TfiLocationPin } from "react-icons/tfi";

import fotoDedoPie1 from "../assets/dedopie1.jpg";
import fotoDedoPie2 from "../assets/dedopie2.jpg";
import fotoNeoPod1 from "../assets/neopod1.jpg";
import fotoNeoPod2 from "../assets/neopod2.jpg";
import { WhatsUpButton } from "../components/WhatsUpButton/WhatsUpButton.jsx";

export const Ubicaciones = () => {
  return (
    <>
    <Header />
    <main>
      <div>
        <h2 className="text-3xl text-blanco font-bold text-center my-10 bg-primary p-10 md:text-5xl">CLÍNICA DEDOPIE</h2>
        <div className="flex flex-col md:flex-row justify-center items-center font-bold text-xl md:text-2xl">
          <TfiLocationPin /><p className="p-5 text-center"> Plaza da Gaiteira 2 Bajo Izq 2 A Coruña 15006</p>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center sm:flex-row ">
          <div className="containerImgUbicaciones"><img src={fotoDedoPie1} alt="Fotos de las clínicas" /></div>
          <div className="containerImgUbicaciones"><img src={fotoDedoPie2} alt="Fotos de las clínicas" /></div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-blanco font-bold text-center my-10 bg-primary p-10 md:text-5xl">CLÍNICA NEOPOD</h2>
        <div className="flex flex-col md:flex-row justify-center items-center font-bold text-xl md:text-2xl">
          <TfiLocationPin /><p className="p-5 text-center">Oidor Gregorio Tovar 17 bajo Izq A Coruña 15007</p>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center sm:flex-row ">
          <div className="containerImgUbicaciones"><img src={fotoNeoPod1} alt="Fotos de las clínicas" /></div>
          <div className="containerImgUbicaciones"><img src={fotoNeoPod2} alt="Fotos de las clínicas" /></div>
        </div>
      </div>
      <WhatsUpButton />
    </main>
    <Footer />
    </>
  );
};
