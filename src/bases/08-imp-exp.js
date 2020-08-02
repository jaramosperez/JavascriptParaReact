// Primera Forma de importar
// import { heroes } from './data/heroes';
// Otra forma de importar.
//import heroes, {owners} from '../data/heroes'
import heroes from '../data/heroes'

//console.log(owners)

//console.log(heroes);

// Tarea encontrar un heroe por su id.
export const getHeroeById = (id) => heroes.find( ( heroe) => heroe.id === id);
//console.log(getHeroeById(4))

// Tarea 2 Encontrar por Compañia
export const getHoeresByOwner = ( owner ) => heroes.filter( ( heroe) => heroe.owner === owner)
//console.log(getHoeresByOwner('Marvel'));
