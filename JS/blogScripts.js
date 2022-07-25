function crearEntrada(divName, image, image_descrp, titulo, descrp, fecha, link) {
    var div2 = document.createElement("div");
    div2.classList.add('card');
    div2.classList.add('mb-4');
    div2.classList.add('shadow');
    div2.classList.add('sm');

    var rect1 = document.createElement("rect");
    rect1.setAttribute("width", "100%");
    rect1.setAttribute("height", "100%");
    
    var img1  = document.createElement("img");
    img1.classList.add('img-thumbnail');
    img1.classList.add('mx-auto');
    img1.classList.add('d-block');
    img1.setAttribute('src', image); // Colocar aquí la imágen
    img1.setAttribute('alt', image_descrp); // Colocar descripción imagen

    var subdiv1 = document.createElement("div");
    subdiv1.classList.add("card-body");
    
    var strong1 = document.createElement("strong");
    strong1.textContent += titulo;
    var p1 = document.createElement("p");
    p1.textContent += descrp;

    var subdiv2 = document.createElement("div");
    subdiv2.classList.add("d-flex");
    subdiv2.classList.add("justify-content-between");
    subdiv2.classList.add("align-items-center");
    
    var subdiv3 = document.createElement("div");
    subdiv3.classList.add("btn-group");

    var button1 = document.createElement("button");
    button1.classList.add("btn");
    button1.classList.add("btn-sm");
    button1.classList.add("btn-outline-secondary");
    button1.setAttribute("onclick", `window.open("${link}",'_blank')`);
    button1.textContent += "Ver";
    
    var small1 = document.createElement("small");
    small1.classList.add("text-muted");
    small1.textContent += fecha;

    // Construcción de bloques
    subdiv3.appendChild(button1); subdiv2.appendChild(subdiv3);
    subdiv2.appendChild(small1);
    subdiv1.appendChild(strong1); subdiv1.appendChild(p1); subdiv1.appendChild(subdiv2);

    rect1.appendChild(img1);
    div2.appendChild(rect1);
    div2.appendChild(subdiv1);

    // 3. Modificar página
    var div1 = document.getElementById(divName);
    div1.classList.add('col-sm-4');
    div1.classList.add('col-md-3');
    div1.appendChild(div2);
    
}
