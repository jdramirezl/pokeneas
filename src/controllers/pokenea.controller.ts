import { Request, Response } from "express";
import { Pokenea } from "../models/pokenea.model";
import { PokeneaService } from "../services/pokenea.service";

export class PokeneaController {
  private pokeneaService: PokeneaService = new PokeneaService();

  public getPokeneas(req: Request, res: Response): void {
    const pokeneas: Pokenea[] = this.pokeneaService.getPokeneas();
    res.status(200).json(pokeneas);
  }

  public getPokenea(req: Request, res: Response): void {
    const id: number = parseInt(req.params.id);
    const pokenea: Pokenea = this.pokeneaService.getPokenea(id);
    res.status(200).json(pokenea);
  }

  public getRandomPokenea(req: Request, res: Response): void {
    const randomPokenea: Pokenea = this.pokeneaService.getRandomPokenea();
    res.status(200).json(randomPokenea);
  }
}
