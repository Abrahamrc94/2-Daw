const anadir = () =>{
     let dniNuevoEmpleado=prompt("Introduce el dni del nuevo empleado");
     let nombreNuevoEmpleado=prompt("Introduce el nombre del nuevo empleado");
     let apellidosNuevoEmpleado=prompt("Introduzca los apellidos del nuevo empleado");

     
}

const borrar = () =>{
    let empleadoBorrar=prompt("Introduce el dni del empleado a borrar");


}

const modificar = () =>{
    let DniEmpleado=prompt("Introduce el dni del empleado que desea modificar");
    let respuesta=prompt("¿Qué dato desea modificar el nombre o los apellidos?");
    if(respuesta=="nombre"){
        let nuevoNombre=prompt("Introduzca el nuevo nombre");
    }else{
        let nuevosApellidos=prompt("Introduzca los nuevos apellidos");
    }
}
