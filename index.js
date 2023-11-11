const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config;

// for documentation of api
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

// COLOQUE O NOME DO PROJETO
const basePath = '/ProjetoIgor/'

const app = express();

// read in json
app.use(express.json());

// solve cors
// obs: replace localhost with frontend ip
 app.use(cors({ credentials: true, origin:  'http://localhost:3000'}));
// app.use(cors({ credentials: true, origin:  'http://localhost:3001'}));
//app.use(cors({ credentials: true, origin: "http://191.252.153.201" }));

const port = 3001;

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// routes
const userRoutes = require("./routes/userRoutes");

app.use("/PatioService/users", userRoutes);

// route not found
app.use((req, res, next) => {
  console.log('req:', req)
  return res.status(404).json({
    status: "error",
    success: false,
    message: "Route not found, please check all the routes in /doc",
    requestedRoute: req.url
  });
});

// handling errors
const apiErrorHandler = require("./middlewares/apiErrorHandler");

app.use(apiErrorHandler);

// init server
app.listen(port, () => console.log(`Listening on port: ${port}!`));
