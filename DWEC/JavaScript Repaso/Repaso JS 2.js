const  anadirElemento = () =>{

    let miLista = document.getElementById("lista");
    let miPos = parseInt(document.getElementById("posicion").value);
    let elementoAnadir = document.getElementsByTagName("li")[miPos-1];
    let miPunto = document.createElement("li");
    let valor = document.getElementById("nuevoElemento").value;
    let miTexto = document.createTextNode(valor);
    miPunto.appendChild(miTexto);
    miLista.insertBefore(miPunto, elementoAnadir);
}

const borrarElemento = () =>{

    let Lista = document.getElementById("lista");
    let Pos = parseInt(document.getElementById("posicion").value);

    let elementoBorrar = document.getElementsByTagName("li")[Pos-1];
    Lista.removeChild(elementoBorrar);
}