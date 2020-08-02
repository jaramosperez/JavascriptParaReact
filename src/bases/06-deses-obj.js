// Desestructuración.
// Asignación Desestructurante.

const persona = {
    nombre: 'Bruce',
    apellido: 'Wayne',
    clave: 'Batman'
};

// no es necesario que lleven el mismo orden.
const { nombre, clave, apellido } = persona;

console.log( clave )
console.log( nombre )
console.log( apellido )

//Repetir condigo.... noo
console.log( persona.nombre );
console.log( persona.apellido );
console.log( persona.clave )

const useContext = ({ clave, nombre, apellido, ciudad = 'Gotica' }) => {
    //console.log( nombre, apellido, clave, ciudad);
    return {
        nombreClave: clave,
        lugar: ciudad,
        latlng: {
            lat: 14.42413,
            lng: -23.443
        }
    }
}

/* const { nombreClave, lugar, latlng:{lat, lng}} = useContext( persona );
console.log( nombreClave, lugar );
console.log( lat, lng );
 */

// Se puede extraer un objeto dentro de otro objeto.
const { nombreClave, lugar, latlng } = useContext(persona);
const {lat, lng} = latlng;
console.log( nombreClave, lugar );
console.log( lat, lng );