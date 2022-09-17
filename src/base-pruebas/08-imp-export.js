

// import heroes, {owners} from './data/heroes';
// import {heroes, owners} from './data/heroes';

import heroes, {owners} from '../data/heroes';



export const getHeroe = (id) => {
    return heroes.find(element => element.id === id);
}

export const getHeroesByOwner = (owner) => {
    return heroes.filter(element => element.owner === owner);
}


// console.log('todos ',heroes);
// console.log('uno ',getHeroe(2));
// console.log('todos lo DC ',getHeroesByOwner('DC'));
// console.log('los owners ', owners);

