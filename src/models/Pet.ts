import {GetType, PetType , data} from '../data/petsData';

export const Pet = {
    getAll: (): PetType[] =>{
        return data;
    },
    getFromType: (type: GetType): PetType[] =>{
        return data.filter(pet => pet.type === type);
    },
    getFromName: (name: string): PetType[] =>{
        return data.filter(pet => 
            pet.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        );
    }
};