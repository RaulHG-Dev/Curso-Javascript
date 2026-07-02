let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log("Largo: ", juegos.length); // Salida: Largo: 4

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo }); // Salida: { primero: 'Zelda', ultimo: 'Chrono' }

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push('F-Zero'); // Agrega un elemento al final del arreglo
console.log({ nuevaLongitud, juegos }); // Salida: { nuevaLongitud: 5, juegos: [ 'Zelda', 'Mario', 'Metroid', 'Chrono', 'F-Zero' ] }

nuevaLongitud = juegos.unshift('Fire Emblem'); // Agrega un elemento al inicio del arreglo
console.log({ nuevaLongitud, juegos }); // Salida: { nuevaLongitud: 6, juegos: [ 'Fire Emblem', 'Zelda', 'Mario', 'Metroid', 'Chrono', 'F-Zero' ] }

let juegoBorrado = juegos.pop(); // Elimina el último elemento del arreglo
console.log({ juegoBorrado, juegos }); // Salida: { juegoBorrado: 'F-Zero', juegos: [ 'Fire Emblem', 'Zelda', 'Mario', 'Metroid', 'Chrono' ] }

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2); // Elimina 2 elementos a partir de la posición 1
console.log({ juegosBorrados, juegos }); // Salida: { juegosBorrados: [ 'Zelda', 'Mario' ], juegos: [ 'Fire Emblem', 'Metroid', 'Chrono' ] }

let metroidIndex = juegos.indexOf('Metroid'); // Busca el índice del elemento 'Metroid', es case sensitive
let metroidIndex2 = juegos.indexOf('metroid'); // Busca el índice del elemento 'metroid', es case sensitive
console.log({ metroidIndex2 }); // Salida: { metroidIndex2: -1 }, regresa -1 porque no lo encuentra, es case sensitive
console.log({ metroidIndex }); // Salida: { metroidIndex: 1 }