function saludar() {
    console.log("Hola mundo!");
    return 1;
}

// A esto se le llama una función anónima, ya que no tiene nombre. Se puede asignar a una variable y luego invocarla a través de esa variable.
const saludar2 = function() {
    console.log("Hola mundo!");
}

function saludar3(nombre) {
    console.log(`Hola ${nombre}!`);
}

function saludar4(nombre) {
    console.log(arguments);
    console.log(`Hola ${nombre}!`);
}

// Se llama una función flecha, y es una forma más corta de escribir funciones anónimas. 
// No tiene su propio this, arguments, super o new.target. No se puede usar como constructor y no se puede usar yield dentro de ella.
const saludarFlecha = () => {
    console.log("Hola flecha!");
}

saludar();
saludar2();
saludar3("Juan");

saludar4("Juan", 40, "México"); // Se pueden pasar más argumentos de los que la función espera, y se pueden acceder a ellos a través del objeto arguments.

saludarFlecha();

const retornoDeSaludar = saludar();
console.log({ retornoDeSaludar }); // 1

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();
    
console.log(sumar(1, 2)); // 3
console.log(sumar2(1, 2));
console.log(getAleatorio2());
console.log(getAleatorio());