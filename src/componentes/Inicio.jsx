
import GifTenor from "./GifTenor";
function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="inicio-texto">
        <p>Hola, soy</p>

        <h1>Joaquín Cárdenas</h1>

        <h3>Estudiante de Ingeniería en Informática</h3>

        <p>
          Actualmente estoy estudiando Ingeniería en Informática
          y aprendiendo diferentes tecnologías relacionadas con
          el área de la computación.
        </p>

        <a href="#sobre-mi" className="boton">
          Conocer más
        </a>
      </div>

        <div className="inicio-gif">
         <GifTenor postId="10104501972735095572" />
        </div>
    </section>
  );
}

export default Inicio;

