import { Router } from "express";
import { pokeneaRouter } from "./pokenea.route";
import { PokeDexIndexView } from "../../views/PokeDexIndexView";
const router: Router = Router();

router.get("/", (req, res) => {
  res.status(200).send(PokeDexIndexView());
});

router.use("/pokedex", pokeneaRouter);

export default router;
