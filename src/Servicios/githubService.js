
const API_URL = "https://api.github.com";

export async function obtenerRepositorios(usuario) {
  const respuesta = await fetch(
    `${API_URL}/users/${encodeURIComponent(usuario)}/repos?sort=updated&per_page=100`
  );

  if (!respuesta.ok) {
    throw new Error(
      "No se pudieron obtener los repositorios de GitHub."
    );
  }

  const repositorios = await respuesta.json();

  return repositorios
    .filter((repositorio) => !repositorio.fork)
    .map((repositorio) => ({
      id: repositorio.id,
      nombre: repositorio.name,
      descripcion:
        repositorio.description || "Sin descripción disponible.",
      lenguaje: repositorio.language || "No especificado",
      enlace: repositorio.html_url
    }));
}
