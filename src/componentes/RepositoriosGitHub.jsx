
import { useEffect, useState } from "react";
import { obtenerRepositorios } from "../Servicios/githubService";

function RepositoriosGitHub() {
  const [repositorios, setRepositorios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let activo = true;

    async function cargarRepositorios() {
      try {
        const datos = await obtenerRepositorios("JoaquinCardenas99");

        if (activo) {
          setRepositorios(datos);
        }
      } catch (error) {
        if (activo) {
          setError(error.message);
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    cargarRepositorios();

    return () => {
      activo = false;
    };
  }, []);

  return (
    <section
      id="repositorios-github"
      className="seccion repositorios-seccion"
    >
      <h2>Mis Repositorios de GitHub</h2>

      <p>
        Estos repositorios se obtienen automáticamente
        desde mi perfil público de GitHub.
      </p>

      {cargando && (
        <p role="status">Cargando repositorios...</p>
      )}

      {error && (
        <p role="alert" className="error-campo">
          {error}
        </p>
      )}

      {!cargando && !error && repositorios.length === 0 && (
        <p>No se encontraron repositorios públicos.</p>
      )}

      {!cargando && !error && repositorios.length > 0 && (
        <div className="container">
          <div className="row g-4">
            {repositorios.map((repositorio) => (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={repositorio.id}
              >
                <article className="proyecto-card h-100">
                  <h3>{repositorio.nombre}</h3>

                  <p>{repositorio.descripcion}</p>

                  <p>
                    <strong>Lenguaje:</strong>{" "}
                    {repositorio.lenguaje}
                  </p>

                  <a
                    href={repositorio.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver repositorio
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default RepositoriosGitHub;
