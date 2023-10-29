import { Router } from "express";
import { PokeneaController } from "../../controllers/pokenea.controller";

const router: Router = Router();
const pokeneaController: PokeneaController = new PokeneaController();

router.get("/", (req, res) => pokeneaController.getPokeneas(req, res));
router.get("/:id", (req, res) => pokeneaController.getPokenea(req, res));
router.get("/random", (req, res) =>
  pokeneaController.getRandomPokenea(req, res)
);

export { router as pokeneaRouter };
