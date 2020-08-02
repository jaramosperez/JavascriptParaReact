import {getHeroeById} from './bases/08-imp-exp'
//import heroes from './data/heroes';
//import heroes from './data/heroes';


// const promesa = new Promise((resolve, reject) => {

//     setTimeout( () => {
//         const heroe = getHeroeById(2);
//         resolve( heroe );
//         //reject('No se pudo encontrar el héroe solicitado')
//     }, 2000)

// });

// promesa.then( ( heroe ) => {
//     console.log('Heroe: ', heroe)
// })
// .catch( error => console.warn( error ) );

const getHeroeByIdAsync = ( id ) => {
    //const promesa = new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const p1 = getHeroeById(id);
            if (p1 === undefined)
                reject('No se pudo encontrar el héroe solicitado');
            else
                resolve( p1 );
            //reject('No se pudo encontrar el héroe solicitado')
        }, 2000)
        
    });
    //return promesa;   Ya no se usa mucho
}

getHeroeByIdAsync(3)
    .then( console.log)
    .catch( console.warn );