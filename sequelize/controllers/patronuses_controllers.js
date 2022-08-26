const { patronuses } = require("../models/index.js");

exports.findAll = (req, res) => {
  patronuses
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu algum erro ao trazer os dados.",
      });
    });
};


exports.createPatronum = (req, res) => {
  // Validação do request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Não pode estar vazio",
  //   });
  //   return;
  // }
  // Criar o usuário
  const patronum = {
    id: req.body.id,
    animal: req.body.animal
  };
  // Salvar usuário no database
  patronuses
    .create(patronum)
    .then((data) => {
      res.send(data);
       message: res.send("enviado")
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao criar o usuário.",
      });
    });
};

