"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishs = exports.cats = exports.dogs = exports.home = void 0;
const Pet_1 = require("../models/Pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const home = (req, res) => {
    let listPets = Pet_1.Pet.getAll();
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        listPets
    });
};
exports.home = home;
const dogs = (req, res) => {
    let listPets = Pet_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('dog'),
        banner: {
            title: 'Dogs',
            background: 'banner_dog.jpg'
        },
        listPets
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let listPets = Pet_1.Pet.getFromType('cat');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('cat'),
        banner: {
            title: 'Cats',
            background: 'banner_cat.jpg'
        },
        listPets
    });
};
exports.cats = cats;
const fishs = (req, res) => {
    let listPets = Pet_1.Pet.getFromType('fish');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('fish'),
        banner: {
            title: 'Fishs',
            background: 'banner_fish.jpg'
        },
        listPets
    });
};
exports.fishs = fishs;
