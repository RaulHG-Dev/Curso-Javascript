function saludar() {
    console.log("Hola mundo!");
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