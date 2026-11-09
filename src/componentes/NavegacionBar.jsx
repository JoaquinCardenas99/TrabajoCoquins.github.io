
function NavegacionBar() {
  return (
    <header className="encabezado">
      <nav className="navegacionBar" aria-label="Navegación principal">
        <a className="logo" href="#inicio">
          Mi Portafolio
        </a>

        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#estudios">Estudios</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavegacionBar;
