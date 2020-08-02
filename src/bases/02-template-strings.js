
const nombre = 'Bruce';
const apellido = 'Wayne';


// const nombreCompleto = nombre + ' ' + apellido;

// Template String
const nombreCompleto = `Yo soy ${ nombre } ${ apellido }`;
console.log( nombreCompleto )


function getSaludo(nombreCompleto){
    return 'Hola ' + nombreCompleto;
}

console.log(`Este es un texto: ${ getSaludo(nombreCompleto) }`);