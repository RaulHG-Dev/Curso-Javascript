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