
function TarjetaProyecto({ icono, titulo, descripcion, tecnologias, enlace }) {
  return (
    <article className="proyecto-card">
      <div className="proyecto-icono" aria-hidden="true">
        {icono}
      </div>

      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      <div className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <span key={tecnologia}>{tecnologia}</span>
        ))}
      </div>

      {enlace ? (
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="proyecto-boton"
        >
          Ver en GitHub
        </a>
      ) : (
        <span className="proyecto-estado">
          Proyecto académico
        </span>
      )}
    </article>
  );
}

export default TarjetaProyecto;
