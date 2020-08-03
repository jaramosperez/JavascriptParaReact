
const activo = true;

// VERSION CLÁSICA
// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// VERSIÓN MAS CORTA
//const mensaje = ( !activo ) ? 'Activo' : 'Inactivo';

//VERSION MAS CORTA ENVIANDO UN NULL.
//const mensaje = ( !activo ) ? 'Activo' : null;

//LA MEJOR FORMA DE USAR EN REACT ES:
const mensaje = !activo && 'Activo'
console.log(mensaje);