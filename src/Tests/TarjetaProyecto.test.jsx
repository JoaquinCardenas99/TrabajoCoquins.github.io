
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TarjetaProyecto from "../componentes/TarjetaProyecto";

describe("Componente TarjetaProyecto", () => {

  const proyecto = {
    icono: "💻",
    titulo: "Proyecto de prueba",
    descripcion: "Descripción de ejemplo",
    tecnologias: ["React", "JavaScript"],
    enlace: "https://github.com/usuario/proyecto"
  };

  it("9. Muestra la información recibida mediante props", () => {
    render(<TarjetaProyecto {...proyecto} />);

    expect(
      screen.getByRole("heading", {
        name: "Proyecto de prueba"
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Descripción de ejemplo")
    ).toBeInTheDocument();

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Ver en GitHub" })
    ).toHaveAttribute(
      "href",
      "https://github.com/usuario/proyecto"
    );
  });

  it("10. Muestra Proyecto académico cuando no hay enlace", () => {
    render(
      <TarjetaProyecto
        {...proyecto}
        enlace={null}
      />
    );

    expect(
      screen.getByText("Proyecto académico")
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: "Ver en GitHub" })
    ).not.toBeInTheDocument();
  });

});
