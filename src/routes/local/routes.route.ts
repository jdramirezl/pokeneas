import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      " Welcome to the Pokeneas api! Please use the /api endpoint to access the pokedex.",
  });
});

export { router as localRouter };
