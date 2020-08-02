
const personajes =  ['Bruce', 'Clark', 'Diana'];
const [ , , p3] = personajes;
console.log( p3 );


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros )

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. el segundo se llamará setNombre
const setState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo')}];
}

const [ nombre, setNombre] = setState( 'Bruce' );

console.log( nombre );
setNombre();