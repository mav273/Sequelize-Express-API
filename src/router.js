const express = require('express')
const wi = require('../sequelize/controllers/wizards_controllers.js')
const pa = require('../sequelize/controllers/patronuses_controllers.js')
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: 'Servidor funcionando (router)'});
});

routes.get("/wizards/all", wi.findAll);

routes.post("/wizards/create", wi.createWizard);

routes.get("/patronus/all",pa.findAll);

routes.post("/patronus/create",pa.createPatronum)

module.exports = { routes };