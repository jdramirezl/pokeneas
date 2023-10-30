import { Pokenea } from "../models/pokenea.model";
import { Storage } from "../models/storage/storage.interface";
import { castJSONtoModel } from "../utils/data.utils";

export class PokeneaService {
  private storage: Storage;
  private uri: string;
  private username?: string;
  private password?: string;

  constructor(
    storage: Storage,
    uri: string,
    username?: string,
    password?: string
  ) {
    this.uri = uri;
    this.username = username;
    this.password = password;
    // @ts-ignore
    this.storage = storage;
    storage.start();
  }

  public getPokeneas(): Pokenea[] {
    const data: JSON[] = this.storage.getData(this.uri);
    const pokeneas: Pokenea[] = data.map((json: JSON) => {
      return castJSONtoModel(json, Pokenea);
    });

    return pokeneas;
  }

  public getPokenea(id: number): Pokenea | null {
    const pokeneas: Pokenea[] = this.getPokeneas();
    const pokenea: Pokenea | null =
      pokeneas.find((pokenea: Pokenea) => {
        return pokenea.getId() === id;
      }) ?? null;
    return pokenea;
  }

  public getRandomPokenea(): Pokenea {
    const pokeneas: Pokenea[] = this.getPokeneas();
    const randomIndex: number = Math.floor(Math.random() * pokeneas.length);
    const randomPokenea: Pokenea = pokeneas[randomIndex];
    return randomPokenea;
  }
}
