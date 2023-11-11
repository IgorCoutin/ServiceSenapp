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
router.get("/grupos/:id", ensureAuth, async(req, res) => {
   const grupos = await prismaClient.grupos.findMany({
   })

   return res.status(201).json({
      success: true,
      status: 'success',
      message: 'Grupos retrieved successfully',
      grupos: grupos
   })

});

router.get("/grupos/", ensureAuth, async(req, res) => {
   const grupos = await prismaClient.grupos.findMany({})

   return res.status(201).json({
      success: true,
      status: 'success',
      message: 'Grupos retrieved successfully',
      grupos: grupos
   })

});

module.exports = router;
