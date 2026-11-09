
import TarjetaProyecto from "./TarjetaProyecto";

const proyectos = [
  {
    icono: "⚖️",
    titulo: "LexMóvil",
    descripcion:
      "Aplicación académica para facilitar la consulta de legislación chilena.",
    tecnologias: ["Desarrollo de software", "Proyecto académico"],
    enlace: "https://github.com/JoaquinCardenas99/EV2_LexM-vil"
  },
  {
    icono: "🖥️",
    titulo: "Tienda Anonymus",
    descripcion:
      "Página web de productos tecnológicos, componentes de computadores y periféricos.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    enlace: "https://github.com/ignaciosaavedra18/Anonymus.git"
  },
  {
    icono: "🐾",
    titulo: "Sistema Veterinaria",
    descripcion:
      "Aplicación Java para gestionar mascotas y dueños utilizando el patrón MVC.",
    tecnologias: ["Java", "Swing", "MVC"],
    enlace: null
  },
  {
    icono: "🎓",
    titulo: "Registro de Estudiantes",
    descripcion:
      "Aplicación Java para registrar y administrar información de estudiantes.",
    tecnologias: ["Java", "Swing", "POO"],
    enlace: null
  }
];

function Proyectos() {
  return (
    <section id="proyectos" className="seccion proyectos-seccion">
      <h2>Mis Proyectos</h2>

      <p className="proyectos-intro">
        Estos son algunos de los proyectos que he desarrollado
        durante mi formación en Ingeniería en Informática.
      </p>

      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.titulo}
            {...proyecto}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
