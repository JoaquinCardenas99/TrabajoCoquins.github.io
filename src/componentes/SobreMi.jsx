
import GifTenor from "./GifTenor";

function SobreMi() {
  return (
    <section id="sobre-mi" className="seccion">
      <h2>Sobre mí</h2>

      <div className="sobre-mi-contenido">
        <div className="sobre-mi-texto">
          <p>
            Mi nombre es Joaquín Cárdenas, tengo 19 años y
            actualmente estoy cursando el cuarto semestre de
            Ingeniería en Informática en Duoc UC.
          </p>

          <p>
            Egresé del Colegio Marquel, ubicado en Quinta Normal,
            en el año 2024 y comencé mis estudios en Duoc UC
            durante el año 2025.
          </p>

          <p>
            Me interesa el área de la tecnología y los computadores.
            Actualmente me encuentro aprendiendo programación,
            desarrollo web y otros contenidos relacionados con
            la informática.
          </p>

          <p>
            Mi objetivo es seguir aprendiendo y adquirir experiencia
            para poder desarrollarme profesionalmente en el área
            de la informática.
          </p>
        </div>

        <div className="sobre-mi-gif">
          <GifTenor postId="13960118962480266903" />
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
