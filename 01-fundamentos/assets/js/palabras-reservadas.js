/**
 * Las palabras reservadas son aquellas que tienen un significado especial para el lenguaje de programación y no pueden ser utilizadas como identificadores (nombres de variables, funciones, etc.). 
 * Estas palabras están reservadas por el lenguaje y su uso está restringido a ciertos contextos específicos.
 */
// let const = 10; // Error: 'const' es una palabra reservada y no puede ser utilizada como nombre de variable
const constante = 20; // Correcto: 'constante' no es una palabra reservada y puede ser utilizada como nombre de variable
console.log(constante); // Salida: 20

// Palabras reservadas en JavaScript
// Algunas de las palabras reservadas más comunes en JavaScript incluyen:
// if, else, for, while, switch, case, break, continue, function, return, var, let, const, class, extends, super, this, new, try, catch, finally, throw, import, export

// Palabras en un futuro estándar de JavaScript
// Algunas palabras que podrían ser reservadas en futuras versiones de JavaScript incluyen:
// await, async, yield, static, enum, implements, interface, package, private, protected, public

// Evitar el usar
// null, undefined, true, false, NaN, Infinity, eval, arguments, with, debugger, delete, typeof, instanceof, etc.
// Es importante tener en cuenta que el uso de palabras reservadas como identificadores puede generar errores de sintaxis y dificultar la comprensión del código. 
// Por lo tanto, se recomienda evitar su uso y optar por nombres descriptivos y significativos para las variables y funciones.

//let 1variable = 10; // Error: '1variable' no es un identificador válido, ya que comienza con un número
let variable1 = 10; // Correcto: 'variable1' es un identificador válido
let _variable2 = 20; // Correcto: '_variable2' es un identificador válido
console.log(variable1, _variable2); // Salida: 10 20

/**
 * No se recomienda utilizar caracteres especiales como parte de los nombres de variables, ya que pueden dificultar la lectura y comprensión del código
 * o incluso pueden generar errores de sintaxis en algunos casos.
 */
class JuegoAño {} 