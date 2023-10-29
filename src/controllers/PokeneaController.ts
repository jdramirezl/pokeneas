import { Request, Response } from "express";
import { PokeneaShow } from "../views/PokeneaShow";
import { PokeneaService } from "../services/pokenea.service";
import Pokenea from "../models/Pokenea";
const os = require("os");
export default class PokeneaController {
    private pokeneaService: PokeneaService = new PokeneaService();
    private containerName:string  = os.hostname();
    public getAllPokeneas(req: Request, res: Response): void {
        const pokeneas: Pokenea[] = this.pokeneaService.getPokeneas();
        res.status(200).json({
            pokeneas,
            containerName: this.containerName,
          });
      }
    public getPokenea(req:Request,res:Response):void{
        const randomPokenea: Pokenea = this.pokeneaService.getRandomPokenea();
        res.status(200).json({
            pokenea: randomPokenea,
            containerName: this.containerName,
          });
    }
    public randomPokeneasInfoShow(req:Request,res:Response):void{
        
        const pokemon: Pokenea = this.pokeneaService.getRandomPokenea();
        const containerName = this.containerName;
        const  viewData= {pokemon,containerName};
        const view= PokeneaShow(viewData);
        res.status(200).send(view);
    }
}