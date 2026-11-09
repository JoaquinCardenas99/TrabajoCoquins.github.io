
import NavegacionBar from "./componentes/NavegacionBar";
import Inicio from "./componentes/Inicio";
import SobreMi from "./componentes/SobreMi";
import Estudios from "./componentes/Estudios";
import Habilidades from "./componentes/Habilidades";
import "./App.css";
import Proyectos from "./componentes/Proyectos";
import Experiencia from "./componentes/Experiencia";
import Contacto from "./componentes/Contacto";

function App() {
  return (
    <>
      <NavegacionBar />

      <main>
        <Inicio />
        <SobreMi />
        <Estudios />
        <Habilidades />
        <Proyectos />
        <Experiencia />
        <Contacto />

      </main>
      <footer>
        <p>Joaquín Cárdenas - Portafolio</p>
        <p>Ingeniería en Informática - Duoc UC</p>
      </footer>
    </>
  );
}

export default App;
