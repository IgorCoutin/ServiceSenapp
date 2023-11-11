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
router.get("/perfis/:id", ensureAuth, async(req, res) => {
   const perfis = await prismaClient.perfis.findMany({
   })

   return res.status(201).json({
      success: true,
      status: 'success',
      message: 'Perfis retrieved successfully',
      perfis: perfis
   })

});

router.get("/perfis/", ensureAuth, async(req, res) => {
   const perfis = await prismaClient.perfis.findMany({})

   return res.status(201).json({
      success: true,
      status: 'success',
      message: 'Perfis retrieved successfully',
      perfis: perfis
   })

});

module.exports = router;
