let ciudades = [];

ciudades [0] = 'Sevilla';
ciudades [1] = 'Cadiz';
ciudades [2] = 'Huelva';
ciudades [3] = 'Malaga';
ciudades [4] = 'Granada';
ciudades [5] = 'Almeria';
ciudades [6] = 'Jaen';
ciudades [7] = 'Cordoba';

ciudades.sort();

const muestraLista = () =>{

    document.write('<table border = "1">' + '<tr>');
    for(let i = 0; i <= ciudades.length-1; i++){
        document.write('<tr>' + '<td>' + ciudades[i]);
    }
}