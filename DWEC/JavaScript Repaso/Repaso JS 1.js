const add = () =>{

    /*Datos recogidos del Formulario*/
    let miPosicion = document.getElementById("posicion").value;
    let miEquipo = document.getElementById("equipo").value;
    let miPuntos = document.getElementById("puntos").value;

    /*Sustituyo los datos de la tabla*/

        document.getElementsByTagName('td')[(miPosicion*3)-2].innerHTML = miEquipo;
        document.getElementsByTagName('td')[(miPosicion*3)-1].innerHTML = miPuntos;
}