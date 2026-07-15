// Objetos literales, también conocidos como objetos JSON, son una forma de representar datos en JavaScript. Se definen utilizando llaves {} y contienen pares clave-valor.
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
// Para acceder a las propiedades de un objeto, se puede utilizar la notación de punto.
console.log("Nombre", personaje.nombre);
// Otra forma de acceder a las propiedades de un objeto es utilizando la notación de corchetes [].
console.log("Nombre", personaje['nombre']);
console.log("Edad", personaje.edad);

console.log("Coors", personaje.coords);
console.log("Lat", personaje.coords.lat);
console.log("Lng", personaje.coords.lng);

console.log("No. Trajes", personaje.trajes.length);
console.log("Ultimo traje", personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log("Vivo", personaje[x]);

console.log("última pelicula", personaje['ultima-pelicula']);

// Más detalles sobre los objetos literales
// Eliminar propiedades de un objeto literal
delete personaje.casado;
console.log(personaje);

// Agregar propiedades a un objeto literal
personaje.casado = true;

// entries, nos permite convertir un objeto en un arreglo de arreglos, donde cada sub-arreglo contiene una clave y su valor correspondiente.
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);

Object.freeze(personaje); // Congela el objeto, evitando que se puedan agregar, eliminar o modificar propiedades.
// Nota: Object.freeze() solo congela el objeto en sí, pero no congela los objetos anidados dentro de él. Por lo tanto, las propiedades de los objetos anidados aún pueden ser modificadas.

personaje.dinero = 1000000000; // No se puede agregar una nueva propiedad
personaje.casado = false; // No se puede modificar una propiedad existente
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje); // Devuelve un arreglo con los nombres de las propiedades del objeto.
const valores = Object.values(personaje); // Devuelve un arreglo con los valores de las propiedades del objeto.
console.log({propiedades, valores});