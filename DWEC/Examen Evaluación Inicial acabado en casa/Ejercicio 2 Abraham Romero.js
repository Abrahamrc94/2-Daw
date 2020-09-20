//Añadir Empleado
const anadir = () =>{
    //Pido el dni primero para comprobar si el empleado existe ya o no
    let dniNuevoEmpleado=prompt("Introduce el dni del nuevo empleado");
    //Creo una variable para de tipo boolean a false para el proceso
    let existe=false;
    //Voy a recuperar la tabla para ver sus datos
    let tablaEmpleados=document.getElementById("tablaEmpleados");
    let filasTabla=tablaEmpleados.getElementsByTagName("tr");
    //Iniciamos una variable contador para recorrer la tabla y mirar las filas
    //El contador debe inciarse a 1 porque si no miramos la cabecera y da error
    let contador=1;
    while(contador<filasTabla.length){
        //Recogemos la fila y luego sacamos todas sus columnas
        let fila=filasTabla[contador];
        let columnaFila=fila.getElementsByTagName("td");
        //Comprobamos si el campo dni coincide
        if(columnaFila[1].textContent ==dniNuevoEmpleado){
            //Si existe cambiamos el valor de la variable existe
            existe=true;
        }
        contador++;
    }
    //Al finalizar el bucle miramos la variable para saber si el dni está repetido o no
    if(existe !=false){
        alert("El dni introducido no es correcto, ya existe un empleado con ese mismo dni")
    }else{
        //Ahora vamos a obtener a los empleados para calcular el número de orden que le corresponde al nuevo empleado
        let numEmpleados=filasTabla.length;
        let ultimo=filasTabla[numEmpleados-1];
        let numUltimo=ultimo.getElementsByTagName("td")[0].textContent;
        let nuevoNum=parseInt(numUltimo)+1;

        //Ahora perdimos el nombre y los apellidos del nuevo empleado 
        let nombreNuevoEmpleado=prompt("Introduce el nombre del nuevo empleado");
        let apellidosNuevoEmpleado=prompt("Introduzca los apellidos del nuevo empleado");

        //Ahora creamos una nueva fila
        let nuevaFila=document.createElement("tr");
        //Creamnos los campos de los datos y les añadimos los datos
        //Número
        let campoNuevoNumero=document.createElement("td");
        campoNuevoNumero.appendChild(document.createTextNode(nuevoNum));
        //DNI
        let nuevoDNI=document.createElement("td");
        nuevoDNI.appendChild(document.createTextNode(dniNuevoEmpleado));
        //Nombre
        let nuevoNombre=document.createElement("td");
        nuevoNombre.appendChild(document.createTextNode(nombreNuevoEmpleado));
        //Apellidos
        let nuevosApellidos=document.createElement("td");
        nuevosApellidos.appendChild(document.createTextNode(apellidosNuevoEmpleado));
        //Añadimos todos a la nueva fila
        nuevaFila.appendChild(campoNuevoNumero);
        nuevaFila.appendChild(nuevoDNI);
        nuevaFila.appendChild(nuevoNombre);
        nuevaFila.appendChild(nuevosApellidos);
        //Y ahora añadimos la fila a la tabla
        tablaEmpleados.appendChild(nuevaFila);
    } 
}




//Borrar Empleado
const borrar = () =>{
    
    //Pido el dni primero para comprobar si el empleado existe ya o no
    let dniBorrar=prompt("Introduce el dni del nuevo empleado");
    //En este caso en vez de una varible de tipo boolean vamos a usar una númerica ya que tambíen nos hará falta saber la posición del empleado en la tabla
    let posicion=-1;
    //Voy a recuperar la tabla para ver sus datos
    let tablaEmpleados=document.getElementById("tablaEmpleados");
    let filasTabla=tablaEmpleados.getElementsByTagName("tr");
    //Iniciamos una variable contador para recorrer la tabla y mirar las filas
    //El contador debe inciarse a 1 porque si no miramos la cabecera y da error
    let contador=1;
    while(contador<filasTabla.length){
        //Recogemos la fila y luego sacamos todas sus columnas
        let fila=filasTabla[contador];
        let columnaFila=fila.getElementsByTagName("td");
        //Comprobamos si el campo dni coincide
        if(columnaFila[1].textContent ==dniBorrar){
            //Si existe cambiamos el valor de la variable posicion
            posicion=contador;
        }
        contador++;
    }
    //Al finalizar el bucle miramos la variable para saber si el dni está repetido o no
    if(posicion==-1){
        alert("El dni introducido no es correcto, no existe ningún empleado con ese dni")
    }else{
        //Obtenemos la fila 
        let filaBorrar = tablaEmpleados.getElementsByTagName("tr")[posicion]
        // Eliminamos la fila seleccionada
        filaBorrar.parentNode.removeChild(filaBorrar);
    }   
}



//Modificar Empleado
const modificar = () =>{

    //Pido el dni primero para comprobar si el empleado existe ya o no
    let dniBorrar=prompt("Introduce el dni del empleado");
    //En este caso en vez de una varible de tipo boolean vamos a usar una númerica ya que tambíen nos hará falta saber la posición del empleado en la tabla
    let posicion=-1;
    //Voy a recuperar la tabla para ver sus datos
    let tablaEmpleados=document.getElementById("tablaEmpleados");
    let filasTabla=tablaEmpleados.getElementsByTagName("tr");
    //Iniciamos una variable contador para recorrer la tabla y mirar las filas
    //El contador debe inciarse a 1 porque si no miramos la cabecera y da error
    let contador=1;
    while(contador<filasTabla.length){
        //Recogemos la fila y luego sacamos todas sus columnas
        let fila=filasTabla[contador];
        let columnaFila=fila.getElementsByTagName("td");
        //Comprobamos si el campo dni coincide
        if(columnaFila[1].textContent ==dniBorrar){
            //Si existe cambiamos el valor de la variable posicion
            posicion=contador;
        }
        contador++;
    }
    //Al finalizar el bucle miramos la variable para saber si el dni está repetido o no
    if(posicion==-1){
        alert("El dni introducido no es correcto, no existe ningún empleado con ese dni")
    }else{
        //Si el empleado existe pedimos los datos
        let nuevoNombre=prompt("Introduce el nuevo nombre del empleado");
        let nuevoApellido = prompt("Introduce los apellidos del empleado");
        // Recuperamos la fila entera
        let fila = filasTabla[posicion];
        // Recuperamos las columnas de la fila
        let columnas = fila.getElementsByTagName("td");
        // Recuperamos el nombre y apellidos antiguos
        let oldNombre = columnas[2];
        let oldApellido = columnas[3];
        // Creamos los nodos nuevos y les añadimos el texto
        let newNombre = document.createElement("td");
        newNombre.appendChild(document.createTextNode(nuevoNombre));
        let newApellido = document.createElement("td");
        newApellido.appendChild(document.createTextNode(nuevoApellido));
        // En la fila cambiamos los nodos viejos por los nuevos
        fila.replaceChild(newNombre, oldNombre);
        fila.replaceChild(newApellido, oldApellido);
    }
}
