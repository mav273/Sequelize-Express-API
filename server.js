const express = require('express')
const { routes } = require('./router.js')
const app = express()
const db = require("./sql/models");

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
db.sequelize.sync()
  .then(() => {
    console.log(`Database conectado: ${process.env.DB_NAME}`);
  })
  .catch((err) => {
    console.log("Falha na conexão: " + err.message);
  });


app.use(express.json());
app.use(routes);