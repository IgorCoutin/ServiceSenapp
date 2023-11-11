const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./index.js"];

const doc = {
  info: {
    version: "1.0.0",
    title: "Patio Web-Service",
    description:
      "Descrição para o consumo da API do sistema de gerenciamento de pátios de veículos.",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "users",
      description:
        "Rotas relacionadas ao CRUD de usuarios, login e historico de atividades do usuario",
    },
    {
      name: "veiculos",
      description: "Rotas relacionadas ao CRUD de veiculos",
    },
    {
      name: "reboques",
      description: "Rotas relacionadas aos reboques",
    },
    {
      name: "orgaos",
      description: "Rotas relacionadas aos orgãos",
    },
    {
      name: "liberacoes",
      description: "Rotas relacionadas as liberações dos veículos",
    },
    {
      name: "leiloes",
      description: "Rotas relacionadas aos leilões",
    },
    {
      name: "leiloeiros",
      description: "Rotas relacionadas aos leiloeiros",
    },
    {
      name: "lacres",
      description: "Rotas relacionadas aos lacres de veículos",
    },
    {
      name: "guincho",
      description: "Rotas relacionadas ao CRUD de guinchos",
    },
    {
      name: "entrada",
      description: "Rotas relacionadas ao CRUD de entradas",
    },
  ],
};

// generate the api documentation
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index.js");
});
