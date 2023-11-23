import {
  crearExperiencia1,
  crearTitulo,
  crearTituloNF,
  crearPublicacion,
} from "./contenedoresAboutMe.js?20211017";

fetch("../resources/experience.json")
  .then((response) => response.json())
  .then((data) => {
    const elems = Object.keys(data).length;

    for (let i = 0; i < elems; i++) {
      const identifier = (i + 1).toString().padStart(2,'0');
      const element = data[identifier];
      // console.log(element);

      crearExperiencia1(
        element["divName"],
        element["tituloTrabajo"],
        element["cargo"],
        element["fecha_inicio"],
        element["fecha_final"],
        element["descripcion"],
        element["responsabilidades"],
        element["Locacion"]
      );
    }
  });

// Lectura de archivo JSON con educación - escritura

fetch("../resources/education.json")
  .then((response) => response.json())
  .then((data) => {
    const elems = Object.keys(data).length;

    for (let i = 0; i < elems; i++) {
      const identifier = (i + 1).toString().padStart(2,'0');
      const element = data[identifier];

      crearTitulo(
        element["dv"],
        element["institucion"],
        element["titulo"],
        element["periodo"],
        element["locacion"]
      );
    }
  });

fetch("../resources/educationNF.json")
  .then((response) => response.json())
  .then((data) => {
    const elems = Object.keys(data).length;

    for (let i = 0; i < elems; i++) {
      const identifier = (i + 1).toString().padStart(2,'0');
      const element = data[identifier];
      crearTituloNF(
        element["dv"],
        element["Institucion"],
        element["Descripcion"],
        element["Fecha"],
        element["Lugar"],
        element["URL"]
      );
    }
  });

var colExp = document.getElementsByClassName("experiencia");

for (let i = 0; i < colExp.length; i++) {
  // console.log( colExp[i] );

  colExp[i].addEventListener("click", () => {
    this.classList.toogle("experiencia:disabled");
  });
}

// Lectura de publicaciones

fetch("../resources/publications.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < Object.keys(data).length; i++) {
      const identifier = (i + 1).toString().padStart(2,'0');
      const element = data[identifier];
      crearPublicacion(
        element["divName"],
        element["citacion"],
        element["href"],
        element["hrefTexto"]
      );
    }
  });
