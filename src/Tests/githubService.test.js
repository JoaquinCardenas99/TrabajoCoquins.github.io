
import { describe, it, expect, vi, afterEach } from "vitest";
import { obtenerRepositorios } from "../Servicios/githubService";

describe("Servicio API de GitHub", () => {

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("5. Obtiene repositorios correctamente", async () => {
    const repositoriosSimulados = [
      {
        id: 1,
        name: "Mi-Portafolio",
        description: "Portafolio personal",
        language: "JavaScript",
        html_url: "https://github.com/usuario/Mi-Portafolio",
        fork: false
      }
    ];

    const fetchSimulado = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => repositoriosSimulados
    });

    vi.stubGlobal("fetch", fetchSimulado);

    const resultado = await obtenerRepositorios("usuario");

    expect(resultado).toHaveLength(1);
    expect(resultado[0].nombre).toBe("Mi-Portafolio");
    expect(resultado[0].lenguaje).toBe("JavaScript");
    expect(fetchSimulado).toHaveBeenCalledOnce();
  });

  it("6. Excluye repositorios que son forks", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [
          {
            id: 1,
            name: "Original",
            fork: false
          },
          {
            id: 2,
            name: "Copia",
            fork: true
          }
        ]
      })
    );

    const resultado = await obtenerRepositorios("usuario");

    expect(resultado).toHaveLength(1);
    expect(resultado[0].nombre).toBe("Original");
  });

  it("7. Utiliza valores por defecto cuando faltan datos", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [
          {
            id: 1,
            name: "Proyecto",
            description: null,
            language: null,
            html_url: "https://github.com/usuario/Proyecto",
            fork: false
          }
        ]
      })
    );

    const resultado = await obtenerRepositorios("usuario");

    expect(resultado[0].descripcion)
      .toBe("Sin descripción disponible.");

    expect(resultado[0].lenguaje)
      .toBe("No especificado");
  });

  it("8. Muestra un error cuando la API falla", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 403
      })
    );

    await expect(
      obtenerRepositorios("usuario")
    ).rejects.toThrow(
      "No se pudieron obtener los repositorios de GitHub."
    );
  });

});

