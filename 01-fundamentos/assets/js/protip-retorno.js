// function createPersona( nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     };
// }

const createPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = createPersona('Juan', 'Pérez');
console.log(persona); // { nombre: 'Juan', apellido: 'Pérez' }

function imprimeArgumentos() {
    console.log(arguments);
}

// Esto no funciona como se espera, ya que arguments no es un array, sino un objeto similar a un array
// imprimeArgumentos(10, true, false, 'Juan', 'Pérez', 40);
// Para solucionar esto, podemos usar el operador rest (...) para capturar los argumentos en un array
// después del parametro rest, no se pueden agregar más parámetros, ya que el operador rest debe ser el último parámetro de la función
const imprimeArgumentos2 = (edad, ...args) => {
    console.log({edad, args});
    return args;
}

imprimeArgumentos(10, true, false, 'Juan', 'Pérez', 40);
const argumentos = imprimeArgumentos2(10, true, false, 'Juan', 'Pérez', 40); // Esto no funciona como se espera
console.log(argumentos); // [true, false, 'Juan', 'Pérez', 40]

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Juan', 'Pérez', 40);
console.log({casado, vivo, nombre, saludo}); // { casado: true, vivo: false, nombre: 'Juan', saludo: 'Pérez' }

const { apellido: nuevoApellido } = createPersona('Juan', 'Pérez');
console.log({ nuevoApellido }); // { nuevoApellido: 'Pérez' }

// destructuración de objetos y arrays
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};
// destructuración de objetos y arrays mediante la función imprimePropiedades, que recibe un objeto y lo desestructura en sus propiedades
// se pueden definir valores por defecto para las propiedades que no existan en el objeto, por ejemplo, si el objeto no tiene la propiedad 'vivo', se le puede asignar un valor por defecto de true
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 0, trajes }) => {
    console.log({ nombre, codeName, vivo, edad, trajes });
}

imprimePropiedades(tony);