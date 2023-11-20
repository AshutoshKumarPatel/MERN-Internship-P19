const mongoose = require('mongoose');

const create = require('./create');
const read = require('./read');
const readAll = require('./readAll');
const update = require('./update');
const remove = require('./delete')

const createCRUDController = (modelName) => {
    let M = require("@/models/Events/" + modelName);
    const Model = mongoose.model(modelName);
    let crudMethods = {};

    crudMethods.create = async (req, res) => {
        create(Model, req, res);
    };

    crudMethods.read = async (req, res) => {
        read(Model, req, res);
    };

    crudMethods.readAll = async (req, res) => {
        readAll(Model, req, res);
    };

    crudMethods.update = async (req, res) => {
        update(Model, req, res);
    };

    crudMethods.delete = async (req, res) => {
        remove(Model, req, res);
    };

    return crudMethods;
};

module.exports = createCRUDController;