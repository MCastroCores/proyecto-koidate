import { Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio.jsx";
import { Servicios } from "./pages/Servicios.jsx";
import { Equipo } from "./pages/Equipo.jsx";
import { Contacto } from "./pages/Contacto.jsx";
import { Privacidad } from "./pages/Privacidad.jsx";
import { AvisoLegal } from "./pages/AvisoLegal.jsx";
import { Cookies } from "./pages/Cookies.jsx";
import { Ubicaciones } from "./pages/Ubicaciones.jsx";
import { ClickBurguerProvider } from "./contexts/ClickBurguerContext.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { ServicioSesionFisioterapia } from "./pages/ServicioSesionFisioterapia.jsx";
import { ServicioEjercicioTerapeutico } from "./pages/ServicioEjercicioTerapeutico.jsx";
import { ServicioPilatesTerapeutico } from "./pages/ServicioPilatesTerapeutico.jsx";
import { ServicioAtencionDomicilio } from "./pages/ServicioAtencionDomicilio.jsx";

function App() {
  return (
    <ClickBurguerProvider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route
          path="/servicios/sesionfisioterapia"
          element={<ServicioSesionFisioterapia />}
        />
        <Route
          path="/servicios/ejercicioterapeutico"
          element={<ServicioEjercicioTerapeutico />}
        />
        <Route
          path="/servicios/pilatesterapeutico"
          element={<ServicioPilatesTerapeutico />}
        />
        <Route
          path="/servicios/sesionadomicilio"
          element={<ServicioAtencionDomicilio />}
        />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/avisolegal" element={<AvisoLegal />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ClickBurguerProvider>
  );
}

export default App;
