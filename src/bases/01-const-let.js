// console.log('Hola, soy Bruce Wayne');
// Variables y Constantes.

// Las Constantes no cambian su valor o no deberían.
const nombre = 'Bruce';
const apellido = 'Wayne';

// Las variables let si permiten cambiar el valor que contienen.
let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado);

if (true) {
    // Esta variable es diferente a la anterior pues se encuentra dentro de otro bloque
    // Scope
    const nombre = 'Clark'
    const apellido = 'Kent'
    let valorDado = 6;
    
    console.log( nombre, apellido, valorDado );
    
}

console.log( valorDado);