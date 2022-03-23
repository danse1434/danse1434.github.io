
//------------------------------------------------------------------------------------------------
export function crearExperiencia1(
  divName,
  tituloTrabajo,
  cargo,
  periodo,
  descripcion,
  responsabilidades,
  Locacion,
  Ruta = "./CSS/icons/location-16-1.svg"
) {
  // 1. Caja de título
  var div1 = document.createElement("div");
  div1.classList.add("col-md-4");

  var titleContainer = document.createElement("div");
  titleContainer.classList.add("h4");
  titleContainer.classList.add("experiencia__titulo");
  titleContainer.textContent += tituloTrabajo;

  var periodoContainer = document.createElement("p");
  periodoContainer.classList.add("experiencia__periodo");
  periodoContainer.textContent += periodo;

  div1.appendChild(titleContainer);
  div1.appendChild(periodoContainer);

  // 2. Caja de contenido
  var div2 = document.createElement("div");
  div2.classList.add("col-md-8");

  var cargoContainer = document.createElement("p");
  cargoContainer.classList.add("experiencia__cargoTitulo");
  cargoContainer.textContent += cargo;

  var cajaDescrip = document.createElement("p");

  var Descrip = document.createElement("div");
  Descrip.textContent += descripcion;

  var Respons1 = document.createElement("b");
  Respons1.textContent += "Responsabilidades";
  var Respons2 = document.createElement("ul");

  for (let i = 0; i < responsabilidades.length; i++) {
    var responsEl = document.createElement("li");
    responsEl.textContent += responsabilidades[i];
    Respons2.appendChild(responsEl);
  }

  // Ubicación del trabajo
  var cajaLoc = document.createElement("p");
  var tituloLoc = document.createTextNode(`	${Locacion}`);
  var Icono = document.createElement("img");
  cajaLoc.classList.add("experiencia__locacion");
  Icono.setAttribute("src", Ruta);

  cajaLoc.appendChild(Icono);
  cajaLoc.appendChild(tituloLoc);

  // Ubicación de elementos de caja
  cajaDescrip.classList.add("experiencia__cajaDescripcion");
  cajaDescrip.appendChild(Descrip);
  cajaDescrip.appendChild(Respons1);
  cajaDescrip.appendChild(Respons2);
  cajaDescrip.appendChild(cajaLoc);

  div2.appendChild(cargoContainer);
  div2.appendChild(cajaDescrip);

  // 3. Modificar página
  var element = document.getElementById(divName);
  // element.classList.add('container-fluid');
  element.classList.add("experiencia");
  element.classList.add("text-justify");
  element.classList.add("row");

  element.appendChild(div1);
  element.appendChild(div2);
}

//------------------------------------------------------------------------------------------------
export function crearTitulo(
  divName,
  institucion,
  titulo,
  periodo,
  locacion,
  Ruta = "./CSS/icons/location-16-1.svg"
) {
  // 1. Caja de título
  var div1 = document.createElement("div");
  div1.classList.add("col-md-4");

  var titleContainer = document.createElement("div");
  titleContainer.classList.add("h4");
  titleContainer.classList.add("educacionFormal__titulo");
  titleContainer.textContent += institucion;

  div1.appendChild(titleContainer);

  // 2. Caja de contenido
  var div2 = document.createElement("div");
  div2.classList.add("col-md-8");

  var cajaDescrip = document.createElement("p");
  cajaDescrip.classList.add("educacionFormal__cajaDescripcion");

  var cargoContainer = document.createElement("p");
  cargoContainer.classList.add("educacionFormal__tituloEducativo");
  cargoContainer.textContent += titulo;

  var periodoContainer = document.createElement("p");
  periodoContainer.classList.add("educacionFormal__periodo");
  periodoContainer.textContent += periodo;

  // Ubicación del trabajo
  var cajaLoc = document.createElement("p");
  var tituloLoc = document.createTextNode(`	${locacion}`);
  var Icono = document.createElement("img");
  cajaLoc.classList.add("educacionFormal__locacion");
  Icono.setAttribute("src", Ruta);
  cajaLoc.appendChild(Icono);
  cajaLoc.appendChild(tituloLoc);

  // Crear caja de "descripción"
  div2.appendChild(cargoContainer);
  cajaDescrip.appendChild(periodoContainer);
  cajaDescrip.appendChild(cajaLoc);

  div2.appendChild(cajaDescrip);
  // 3. Modificar página
  var element = document.getElementById(divName);
  // element.classList.add('container-fluid');
  element.classList.add("educacionFormal");
  element.classList.add("text-justify");
  element.classList.add("row");

  element.appendChild(div1);
  element.appendChild(div2);
}

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
export function crearTituloNF(
  divName,
  institucion,
  titulo,
  periodo,
  locacion,
  WebSite,
  Ruta1 = "./CSS/icons/location-16-1.svg",
  Ruta2 = "./CSS/icons/link-16-1.svg"
) {
  // 1. Caja de título
  var div1 = document.createElement("div");
  div1.classList.add("col-md-4");

  var titleContainer = document.createElement("div");
  titleContainer.classList.add("h5");
  titleContainer.classList.add("educacionNoFormal__titulo")
  titleContainer.textContent += institucion;

  div1.appendChild(titleContainer);

  // 2. Caja de contenido
  var div2 = document.createElement("div");
  div2.classList.add("col-md-8");

  var cajaDescrip = document.createElement("p");
  cajaDescrip.classList.add("educacionNoFormal__cajaDescripcion");

  var cargoContainer = document.createElement("p");
  cargoContainer.classList.add("educacionNoFormal_tituloEducativo");
  cargoContainer.textContent += titulo;

  var periodoContainer = document.createElement("p");
  periodoContainer.classList.add("educacionNoFormal_periodo");
  periodoContainer.textContent += periodo;

  var cajaFoot = document.createElement("p");
  cajaFoot.classList.add("educacionNoFormal__locacion");
  var cajaLoc = document.createElement("span");
  var Icono = document.createElement("img");
  Icono.setAttribute("src", Ruta1);
  var tituloLoc = document.createTextNode(`	${locacion}`);

  cajaLoc.appendChild(Icono);
  cajaLoc.appendChild(tituloLoc);
  cajaFoot.appendChild(cajaLoc);

  // Que pasa si el objeto JSON contiene una URL
  if (WebSite != null) {
    var separador = document.createElement("span");
    separador.textContent += " | ";

    var cajaCertificado = document.createElement("a");
    cajaCertificado.setAttribute("href", WebSite["URL"]);
    cajaCertificado.setAttribute("target", "_blank");

    var nombreCertificado = document.createTextNode(` ${WebSite["Nombre"]}`);
    var Icono2 = document.createElement("img");
    Icono2.setAttribute("src", Ruta2);

    cajaCertificado.appendChild(Icono2);
    cajaCertificado.appendChild(nombreCertificado);

    cajaFoot.appendChild(separador);
    cajaFoot.appendChild(cajaCertificado);
  }

  // Crear caja de "descripción"
  div2.appendChild(cargoContainer);
  cajaDescrip.appendChild(periodoContainer);
  cajaDescrip.appendChild(cajaFoot);

  div2.appendChild(cajaDescrip);
  // 3. Modificar página
  var element = document.getElementById(divName);
  // element.classList.add('container-fluid');
  element.classList.add("educacionNoFormal");
  element.classList.add("text-justify");
  element.classList.add("row");

  element.appendChild(div1);
  element.appendChild(div2);
}


// -----------------------------------------------------------------------------------------------
export function crearPublicacion(
  divName,
  descripcion,
  href
) {
  // 1. Principal
  var divMain = document.createElement("div");
  divMain.classList.add("col-md-12");

  // 2. Contenido de publicación
  var divP = document.createElement("p");
  divP.classList.add("entradaArticulo");
  divP.textContent += descripcion

  // 3. Link de publicación
  var aLink = document.createElement("a");
  aLink.target = "_blank";
  aLink.href = href;
  aLink.textContent = href;
  divP.appendChild(aLink);

  divMain.appendChild(divP);  

  // 4. Modificar página
  var element = document.getElementById(divName);
  element.classList.add("publicaciones");
  element.classList.add("text-justify");
  element.classList.add("row");

  element.appendChild(divMain);
}