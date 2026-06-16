// console.log('Hola Mundo');

// Variables
let a = 10; // Esta variable puede ser reasignada
var b = 10; // Esta variable también puede ser reasignada, pero tiene un alcance diferente al de 'let'
const c = 10; // Esta variable no puede ser reasignada, es constante

// c = 20; // Esto generará un error porque 'c' es una constante
a = 20; // Esto es válido, 'a' puede ser reasignada
b = 20; // Esto también es válido, 'b' puede ser reasignada

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