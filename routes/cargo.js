const express = require("express");
const EntradaPatioController = require("../controllers/EntradaPatioController");
const router = express.Router();
const prismaClient = require('../db/connection')

const ensureAuth = require("../middlewares/ensureAuth");

// router.post("/createEntrada", ensureAuth, EntradaPatioController.CreateEntrada);
// router.patch(
//    "/editEntrada/:id",
//    ensureAuth,
//    EntradaPatioController.EditEntrada
// );
router.get("/cargos/:id", ensureAuth, async(req, res) => {
   const cargos = await prismaClient.cargos.findMany({
   })

   return res.status(201).json({
      success: true,
      status: 'success',
      message: 'cargos retrieved successfully',
      cargos: cargos
   })

});

router.get("/cargos/", ensureAuth, async(req, res) => {
   const cargos = await prismaClient.cargos.findMany({})

   return res.status(201).json({
      success: true,
      status: 'success',
      message: 'cargos retrieved successfully',
      cargos: cargos
   })

});

module.exports = router;
