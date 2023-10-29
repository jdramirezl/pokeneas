import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      " Welcome to the Pokeneas api! \nPlease use the api/pokeneas endpoint to access the pokeneas.",
  });
});

export { router as localRouter };
