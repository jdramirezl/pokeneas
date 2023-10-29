import { Router } from "express";
import { pokeneaRouter } from "./pokenea.route";

const router: Router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

router.use("/pokenea", pokeneaRouter);

export default router;
