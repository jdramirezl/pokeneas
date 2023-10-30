import { Request, Response } from "express";
import { PokeneaShow } from "../views/pokenea/show.view";
import { PokeneaService } from "../services/pokenea.service";
import { LocalStorage } from "../models/storage/localStorage.model";
import { Pokenea } from "../models/pokenea.model";

const os = require("os");

class PokeneaController {
  private pokeneaService: PokeneaService = new PokeneaService(
    new LocalStorage(process.env.STORAGE_PATH ?? ""),
    process.env.STORAGE_URI ?? ""
  );
  private containerId: string = os.hostname();

  public getAllPokeneas(req: Request, res: Response): void {
    const pokeneas: Pokenea[] = this.pokeneaService.getPokeneas();
    res.status(200).json({
      pokeneas,
      containerId: this.containerId,
    });
  }

  public getPokenea(req: Request, res: Response): void {
    const randomPokenea: Pokenea = this.pokeneaService.getRandomPokenea();
    res.status(200).json({
      pokenea: randomPokenea,
      containerId: this.containerId,
    });
  }

  public randomPokeneasInfoShow(req: Request, res: Response): void {
    const pokemon: Pokenea = this.pokeneaService.getRandomPokenea();
    const containerName = this.containerId;
    const viewData = { pokemon, containerName };
    const view = PokeneaShow(viewData);
    res.status(200).send(view);
  }
}

export { PokeneaController };
