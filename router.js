const express = require('express')
const wi = require('./sequelize/controllers/wizards_controllers.js')
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: 'Servidor funcionando (router)'});
});

routes.get("/wizards/All", wi.findAll);

routes.post("/wizards/create", wi.createWizard);

module.exports = { routes };