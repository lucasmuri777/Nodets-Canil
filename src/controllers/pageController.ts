import {Request, Response} from 'express';

import { Pet } from '../models/Pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) =>{
    let listPets = Pet.getAll();
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        listPets
    })
}
export const dogs = (req: Request, res: Response) =>{
    let listPets = Pet.getFromType('dog');
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner:{
            title: 'Dogs',
            background: 'banner_dog.jpg'
        },
        listPets
    })
}
export const cats = (req: Request, res: Response) =>{
    let listPets = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner:{
            title: 'Cats',
            background: 'banner_cat.jpg'
        },
        listPets
    })
}
export const fishs = (req: Request, res: Response) =>{
    let listPets = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner:{
            title: 'Fishs',
            background: 'banner_fish.jpg'
        },
        listPets
    })
}