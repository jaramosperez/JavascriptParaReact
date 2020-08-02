// Funciones en JS

// No se recomienda hacer funciones de este tipo.
/* function saludar( nombre ) {
    return `Hola, ${ nombre }`;
}
 */
// Se deben hacer de la siguiente manera.
// Función de Flecha.
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}
// es la forma mas sencilla de leer y mantener. 
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => 'Hola mundo';

console.log( saludar2('Joker') );
console.log( saludar3("Ra's al Ghul") );
console.log( saludar4() );
//const saludar2 = ( nombre )
//saludar = 30;
//console.log( saludar('Bruce Wayne'));
//console.log( saludar )

const getUser = () => ({
    uid: 'ABC123',
    userName: 'Don Cheto'
});

console.log( getUser() );

const user = getUser();
console.log(user);

// Tarea
// 1. Transforme a una función de Flecha.
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas.
/* function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC567',
        userName: nombre
    }
}; */

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    userName: nombre
});

const usuarioActivo = getUsuarioActivo('Don Wookie');
console.log( usuarioActivo );