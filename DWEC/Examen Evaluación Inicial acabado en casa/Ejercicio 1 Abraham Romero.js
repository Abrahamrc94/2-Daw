const inicializar = () =>{
    
    let nombres=[];
    
    for(let i=0; i<5; i++){
        let nombreEscrito = prompt("Introduce un nombre");
        if(nombres.includes(nombreEscrito)){
            nombreEscrito = prompt("Este nombre ya ha sido introducido en el array. Por favor introduce otro");
        }
        nombres[i]=nombreEscrito;
    }
    nombres.sort();

    for(i=0; i<nombres.length; i++){
        console.log(nombres[i].charAt(0).toUpperCase()+nombres[i].slice(1));
    }
}