// Esta una forma de crear un arreglo, pero no es la más recomendable
const arr = new Array(10);
console.log(arr); // Salida: [ <10 empty items> ]

// Esta es la forma más recomendable de crear un arreglo
let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videoJuegos }); // Salida: { videoJuegos: [ 'Mario 3', 'Megaman', 'Chrono Trigger' ] }
console.log(videoJuegos[0]); // Salida: Mario 3

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function () {},
    () => {},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', ['Dr. Willy', 'Woodman']]
]; // Salida: [ true, 123, 'Fernando', 3 ]

console.log(arregloCosas); // Salida: [ true, 123, 'Fernando', 3, [ 'X', 'Megaman', 'Zero', 'Dr. Light', [Array] ] ]
console.log(arregloCosas[7][4][1]); // Salida: Woodman