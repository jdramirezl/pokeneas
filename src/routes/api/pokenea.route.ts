import { Router } from "express";
import { PokeneaController } from "../../controllers/pokenea.controller";

const router: Router = Router();
const pokeneaController = new PokeneaController(); // Create an instance of the controller

router.get("/", (req, res) => {
  pokeneaController.getAllPokeneas(req, res);
});

router.get("/random", (req, res) => {
  pokeneaController.getPokenea(req, res);
});

router.get("/random-show", (req, res) => {
  pokeneaController.randomPokeneasInfoShow(req, res);
});

export { router as pokeneaRouter };
