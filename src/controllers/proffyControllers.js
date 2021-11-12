const Proffy = require("../models/Proffy");

async function listProffy(request, response) {
  try {
    const proffy = await Proffy.findAll();
    response.status(200).json(proffy);
  } catch (error) {
    response.status(400).json({
      message: "algo deu errado",
    });
  }
}

async function proffy(request, response) {
  const { id } = request.params;

  try {
    const proffy = await Proffy.findOne({
      where: {
        id: id,
      },
    });

    response.status(200).json(proffy);
  } catch (error) {
    console.log(error);
    response.status(400).json({
      message: "algo deu errado",
    });
  }
}

async function createProffy(request, response) {
  try {
    const {
      nome,
      email,
      telefone,
    } = request.body;

    const proffy = await Proffy.create({
      nome,
      email,
      telefone,
    });

    response.status(201).json({ message: "o usuario foi criado:", proffy });
  } catch (error) {
    console.log(error);
    response.status(400).json({
      message: "deu erro em algum campo",
    });
  }
}

module.exports = { listProffy, createProffy, proffy };
