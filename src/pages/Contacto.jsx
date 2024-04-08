import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
import { ContainerContacto } from "../components/ContainerContacto/ContainerContacto.jsx";
import { WhatsUpButton } from "../components/WhatsUpButton/WhatsUpButton.jsx";
export const Contacto = () => {
  return (
    <>
    <Header />
    <main className="flex flex-col gap-5 justify-center items-center mx-3">
      <h2 className="text-4xl font-bold text-center mt-10">PONTE EN CONTACTO CON NOSOTROS:</h2>
      <h3 className="text-xl md:text-2xl font-bold bg-primary text-blanco py-2 px-4 rounded-full">TELÉFONO: 644769541</h3>
      <h3 className="text-xl md:text-2xl font-bold bg-primary text-blanco py-2 px-4 rounded-full">koidatefisioterapia@gmail.com</h3>
      <h2 className="text-4xl font-bold text-center mt-10">O A TRAVÉS DE ESTE FORMULARIO:</h2>
     <ContainerContacto />
     <WhatsUpButton />
    </main>
    <Footer />
    </>
  );
};
