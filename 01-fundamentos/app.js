// console.log('Hola Mundo');

// Variables
let a1 = 10; // Esta variable puede ser reasignada
var b1 = 10; // Esta variable también puede ser reasignada, pero tiene un alcance diferente al de 'let'
const c1 = 10; // Esta variable no puede ser reasignada, es constante

// c1 = 20; // Esto generará un error porque 'c1' es una constante
a1 = 20; // Esto es válido, 'a1' puede ser reasignada
b1 = 20; // Esto también es válido, 'b1' puede ser reasignada

// Diferencias entre var, let y const
function ejemploVar() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x); // Imprime 2
    }
    console.log(x); // Imprime 2, porque 'var' tiene alcance de función
}

function ejemploLet() {
    let y = 1;
    if (true) {
        let y = 2;
        console.log(y); // Imprime 2
    }
    console.log(y); // Imprime 1, porque 'let' tiene alcance de bloque
}

// Qué es un polyfill
// Un polyfill es un fragmento de código (generalmente JavaScript) que proporciona la funcionalidad que no está disponible en ciertos navegadores o entornos. Es una forma de "rellenar" las lagunas de compatibilidad, permitiendo que los desarrolladores utilicen características modernas sin preocuparse por la compatibilidad con navegadores más antiguos. 
// Por ejemplo, si un navegador no soporta una función como `Array.prototype.includes`, un polyfill puede definir esa función para que el código funcione correctamente en ese navegador.

let a = 10, b = 10; // Se pueden declarar múltiples variables en una sola línea
let c = a + b; // c es igual a 20
console.log(c); // Imprime 20

// Tipos de console
console.log('Esto es un mensaje de log');
console.warn('Esto es una advertencia');
console.error('Esto es un mensaje de error');

console.log('El valor de a es:', a); // Imprime el valor de a
console.log('El valor de b es:', b); // Imprime el valor de b

console.log({a}); // Imprime el valor de a como un objeto, lo que facilita su lectura en la consola
console.log({b}); // Imprime el valor de b como un objeto

console.log('%c Esto es un mensaje con estilo', 'color: blue; font-size: 20px;'); // Imprime un mensaje con estilo personalizado

console.table([10, 20, "holas"]); // Imprime una tabla con los valores del array, lo que facilita su lectura en la consola