# Portafolio Personal — React + Vite

Portafolio web personal desarrollado como parte de la asignatura **Fullstack 2** de Ingeniería en Informática en Duoc UC.

El proyecto corresponde a una migración de un portafolio originalmente desarrollado con HTML, CSS y JavaScript hacia una aplicación basada en **React y Vite**, incorporando componentes reutilizables, validaciones, diseño responsive, consumo de API REST y pruebas automatizadas.

## Enlaces del proyecto

- **Portafolio publicado:** https://joaquincardenas99.github.io/TrabajoCoquins.github.io/
- **Repositorio GitHub:** https://github.com/JoaquinCardenas99/TrabajoCoquins.github.io

## Tecnologías utilizadas

- HTML5 y CSS3
- JavaScript
- React
- Vite
- Bootstrap 5
- API REST de GitHub
- Vitest
- React Testing Library
- Git y GitHub
- GitHub Actions y GitHub Pages

## Funcionalidades

El portafolio incluye las siguientes secciones:

- **Inicio:** presentación personal.
- **Sobre mí:** información personal e intereses.
- **Estudios:** formación académica.
- **Habilidades:** conocimientos y tecnologías utilizadas.
- **Mis proyectos:** proyectos académicos presentados mediante componentes reutilizables.
- **Repositorios de GitHub:** repositorios obtenidos dinámicamente mediante una API REST.
- **Experiencia:** experiencia laboral.
- **Contacto:** formulario de demostración con validaciones.

### Formulario de contacto

El formulario utiliza el hook `useState` para administrar los datos ingresados y mostrar errores de validación.

Se comprueba que:

- El nombre tenga al menos 3 caracteres.
- El correo electrónico tenga un formato válido.
- El mensaje contenga al menos 10 caracteres.

**Nota:** El formulario es demostrativo y no envía correos electrónicos reales.

### Integración de API REST

Se utiliza la API pública de GitHub para obtener los repositorios del perfil `JoaquinCardenas99`.

La consulta se realiza mediante `fetch()` desde un módulo de servicio separado.

El componente utiliza `useEffect` y `useState` para gestionar la consulta, los datos recibidos y los estados de carga y error.

## Instalación y ejecución local

Para ejecutar el proyecto se necesita Node.js y npm.

**1. Clonar el repositorio**

```bash
git clone https://github.com/JoaquinCardenas99/TrabajoCoquins.github.io.git
```

**2. Entrar a la carpeta**

```bash
cd TrabajoCoquins.github.io
```

**3. Instalar las dependencias**

```bash
npm install
```

**4. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

Luego abrir la dirección local indicada por Vite, normalmente `http://localhost:5173/`.

## Pruebas automatizadas

Se implementaron **10 pruebas automatizadas** utilizando Vitest y React Testing Library.

Las pruebas comprueban:

- Visualización del formulario.
- Validaciones de campos obligatorios.
- Validación del correo electrónico.
- Aceptación de datos correctos.
- Obtención de repositorios mediante la API.
- Exclusión de repositorios que son forks.
- Manejo de datos incompletos de la API.
- Manejo de errores de la API.
- Visualización de información mediante props.
- Comportamiento de tarjetas sin enlace.

Se utilizan **mocks de `fetch`** para probar el servicio de GitHub sin depender de una conexión real a internet.

### Ejecutar las pruebas

```bash
npx vitest run
```

### Generar reporte de cobertura

```bash
npx vitest run --coverage
```

En la última ejecución realizada durante el desarrollo se obtuvo aproximadamente un **64 % de cobertura**.

## Despliegue

El proyecto está publicado mediante **GitHub Pages**.

Se configuró un workflow de **GitHub Actions** que permite automatizar la instalación de dependencias, la compilación y la publicación de la aplicación.

El desarrollo de la migración se realizó utilizando la rama `migracion-react`, posteriormente integrada a `main` mediante un Pull Request.

## Autor

**Joaquín Cárdenas**

Estudiante de Ingeniería en Informática — Duoc UC.

GitHub: https://github.com/JoaquinCardenas99

## Contexto académico

Proyecto desarrollado con fines educativos para aplicar conocimientos de desarrollo frontend, componentes React, consumo de servicios REST, pruebas automatizadas, control de versiones y despliegue web.
