import {
  crearExperiencia1,
  crearTitulo,
  crearTituloNF,
} from "./contenedoresAboutMe.js?20210126";

fetch("../resources/experience.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 5; i++) {
      let idLS1 = "0" + (i + 1);
      crearExperiencia1(
        data[idLS1]["divName"],
        data[idLS1]["tituloTrabajo"],
        data[idLS1]["cargo"],
        data[idLS1]["periodo"],
        data[idLS1]["descripcion"],
        data[idLS1]["responsabilidades"],
        data[idLS1]["Locacion"]
      );
    }
  });

// Lectura de archivo JSON con educación - escritura

fetch("../resources/education.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 3; i++) {
      let idLS2 = "0" + (i + 1);
      crearTitulo(
        data[idLS2]["dv"],
        data[idLS2]["institucion"],
        data[idLS2]["titulo"],
        data[idLS2]["periodo"],
        data[idLS2]["locacion"]
      );
    }
  });

fetch("../resources/educationNF.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 8; i++) {
      let idLS3 = "0" + (i + 1);
      crearTituloNF(
        data[idLS3]["dv"],
        data[idLS3]["Institucion"],
        data[idLS3]["Descripcion"],
        data[idLS3]["Fecha"],
        data[idLS3]["Lugar"],
        data[idLS3]["URL"]
      );
    }
  });

  var colExp = document.getElementsByClassName("experiencia");
      
  for (let i = 0; i < colExp.length; i++) {
    console.log( colExp[i] );
    
    colExp[i].addEventListener("click", () => {
      this.classList.toogle("experiencia:disabled");
    })
  }