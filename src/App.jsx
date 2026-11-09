
import NavegacionBar from "./componentes/NavegacionBar";
import Inicio from "./componentes/Inicio";
import SobreMi from "./componentes/SobreMi";
import Estudios from "./componentes/Estudios";
import Habilidades from "./componentes/Habilidades";
import "./App.css";
import Proyectos from "./componentes/Proyectos";

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

        <section id="experiencia" className="seccion gris">
          <h2>Experiencia</h2>
          <p>Próximamente agregaremos mi experiencia.</p>
        </section>

        <section id="contacto" className="seccion">
          <h2>Contacto</h2>
          <p>Próximamente agregaremos el formulario de contacto.</p>
        </section>
      </main>

      <footer>
        <p>Joaquín Cárdenas - Portafolio</p>
        <p>Ingeniería en Informática - Duoc UC</p>
      </footer>
    </>
  );
}

export default App;
