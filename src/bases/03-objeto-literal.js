
const persona = {
    nombre: 'Clark',
    apellido: 'Kent',
    edad: 34,
    direccion: {
        ciudad: 'New York',
        zip: 2342423,
        lat: 14.555,
        lng: 34.9554

    }
};

//console.table( {persona} );
// console.log( {persona} );

const persona2 = { ...persona };

persona2.nombre = 'Bruce';

console.log( persona );
console.log( persona2 );