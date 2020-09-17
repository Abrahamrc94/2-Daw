const add = () =>{

    /*Datos recogidos del Formulario*/
    let miPosicion = document.getElementById("posicion").value;
    let miEquipo = document.getElementById("equipo").value;
    let miPuntos = document.getElementById("puntos").value;

    /*Si la posición nueva es menor o igual a 4 simplemente sustituyo los datos de la tabla*/
    if(miPosicion<=4){
        document.getElementsByTagName('td')[(miPosicion*3)-2].innerHTML = miEquipo;
        document.getElementsByTagName('td')[(miPosicion*3)-1].innerHTML = miPuntos;
    }else{

    }


}