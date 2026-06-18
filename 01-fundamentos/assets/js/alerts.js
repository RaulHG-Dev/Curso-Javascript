alert('Hola Mundo'); // Muestra una alerta con el mensaje "Hola Mundo", es una función que detiene la ejecución del código hasta que el usuario cierre la alerta

let nombre = prompt('¿Cuál es tu nombre?', 'Sin nombre'); // Muestra un cuadro de diálogo que solicita al usuario que ingrese su nombre, devuelve el valor ingresado por el usuario
// Si el usuario no ingresa ningún valor, se asigna el valor por defecto "Sin nombre"
// Si le da a "Cancelar", el valor de 'nombre' será null
console.log('El nombre ingresado es:', nombre); // Imprime el nombre ingresado por el usuario en la consola 

const continuar = confirm('¿Estás seguro de continuar?'); // Muestra un cuadro de diálogo que solicita al usuario que confirme si desea continuar, devuelve true si el usuario hace clic en "Aceptar" y false si hace clic en "Cancelar"
console.log('El usuario decidió continuar:', continuar ? 'Sí' : 'No'); // Imprime la decisión del usuario en la consola
