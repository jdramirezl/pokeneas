import { Pokenea } from "../models/pokenea.model";
import { HardcodedPokeneas } from "../utils/data.utils";

export class PokeneaService {
  public getPokeneas(): Pokenea[] {
    return HardcodedPokeneas;
  }

  public getPokenea(id: number): Pokenea {
    return (
      HardcodedPokeneas.find((pokenea: Pokenea) => pokenea.getId() === id) ??
      new Pokenea(0, "", 0, [], "", "")
    );
  }

  public getRandomPokenea(): Pokenea {
    var index: number = Math.floor(Math.random() * HardcodedPokeneas.length);
    return HardcodedPokeneas[index];
  }
}
