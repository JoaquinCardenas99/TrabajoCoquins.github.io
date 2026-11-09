
import { useState } from "react";

function Contacto() {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const [errores, setErrores] = useState({});
  const [confirmacion, setConfirmacion] = useState("");

  function manejarCambio(evento) {
    const { name, value } = evento.target;

    setDatos((anterior) => ({
      ...anterior,
      [name]: value
    }));

    setErrores((anterior) => ({
      ...anterior,
      [name]: ""
    }));

    setConfirmacion("");
  }

  function validar() {
    const nuevosErrores = {};

    if (datos.nombre.trim().length < 3) {
      nuevosErrores.nombre =
        "El nombre debe tener al menos 3 caracteres.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo.trim())) {
      nuevosErrores.correo =
        "Ingresa un correo electrónico válido.";
    }

    if (datos.mensaje.trim().length < 10) {
      nuevosErrores.mensaje =
        "El mensaje debe tener al menos 10 caracteres.";
    }

    return nuevosErrores;
  }

  function manejarEnvio(evento) {
    evento.preventDefault();

    const nuevosErrores = validar();
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setConfirmacion(
        "Formulario validado correctamente. Este formulario es una demostración y no envía mensajes."
      );
    } else {
      setConfirmacion("");
    }
  }

  return (
    <section id="contacto" className="seccion">
      <h2>Contacto</h2>

      <p className="texto-contacto">
        Si quieres contactarme, puedes dejar tus datos
        en el siguiente formulario de demostración.
      </p>

      <div className="formulario">
        <form onSubmit={manejarEnvio} noValidate>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Escribe tu nombre"
            autoComplete="name"
            value={datos.nombre}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.nombre)}
            aria-describedby={errores.nombre ? "error-nombre" : undefined}
          />
          {errores.nombre && (
            <p id="error-nombre" className="error-campo" role="alert">
              {errores.nombre}
            </p>
          )}

          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="ejemplo@correo.com"
            autoComplete="email"
            value={datos.correo}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.correo)}
            aria-describedby={errores.correo ? "error-correo" : undefined}
          />
          {errores.correo && (
            <p id="error-correo" className="error-campo" role="alert">
              {errores.correo}
            </p>
          )}

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje"
            rows="5"
            value={datos.mensaje}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.mensaje)}
            aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
          />
          {errores.mensaje && (
            <p id="error-mensaje" className="error-campo" role="alert">
              {errores.mensaje}
            </p>
          )}

          <button type="submit">Validar mensaje</button>

          {confirmacion && (
            <p id="mensajeEnviado" role="status">
              {confirmacion}
            </p>
          )}
        </form>
      </div>

      <div className="datos-contacto">
        <p>
          Correo personal:{" "}
          <strong>joaquincbelmar@gmail.com</strong>
        </p>
        <p>
          Teléfono: <strong>+56 9 6765 0672</strong>
        </p>
      </div>
    </section>
  );
}

export default Contacto;
