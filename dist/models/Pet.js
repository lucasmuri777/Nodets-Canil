"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const petsData_1 = require("../data/petsData");
exports.Pet = {
    getAll: () => {
        return petsData_1.data;
    },
    getFromType: (type) => {
        return petsData_1.data.filter(pet => pet.type === type);
    },
    getFromName: (name) => {
        return petsData_1.data.filter(pet => pet.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
};
