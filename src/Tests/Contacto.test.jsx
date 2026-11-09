
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contacto from "../componentes/Contacto";

describe("Formulario de Contacto", () => {

  it("1. Muestra el título Contacto", () => {
    render(<Contacto />);

    expect(
      screen.getByRole("heading", { name: "Contacto" })
    ).toBeInTheDocument();
  });

  it("2. Muestra errores cuando los campos están vacíos", async () => {
    const usuario = userEvent.setup();

    render(<Contacto />);

    await usuario.click(
      screen.getByRole("button", { name: "Validar mensaje" })
    );

    expect(
      screen.getByText("El nombre debe tener al menos 3 caracteres.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Ingresa un correo electrónico válido.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("El mensaje debe tener al menos 10 caracteres.")
    ).toBeInTheDocument();
  });

  it("3. Rechaza un correo electrónico incorrecto", async () => {
    const usuario = userEvent.setup();

    render(<Contacto />);

    await usuario.type(
      screen.getByLabelText("Correo electrónico"),
      "correo-invalido"
    );

    await usuario.click(
      screen.getByRole("button", { name: "Validar mensaje" })
    );

    expect(
      screen.getByText("Ingresa un correo electrónico válido.")
    ).toBeInTheDocument();
  });

  it("4. Acepta los datos válidos del formulario", async () => {
    const usuario = userEvent.setup();

    render(<Contacto />);

    await usuario.type(
      screen.getByLabelText("Nombre"),
      "Joaquin"
    );

    await usuario.type(
      screen.getByLabelText("Correo electrónico"),
      "joaquin@ejemplo.com"
    );

    await usuario.type(
      screen.getByLabelText("Mensaje"),
      "Hola, quiero contactarte por un proyecto."
    );

    await usuario.click(
      screen.getByRole("button", { name: "Validar mensaje" })
    );

    expect(
      screen.getByRole("status")
    ).toHaveTextContent("Formulario validado correctamente");
  });

});
