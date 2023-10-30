import fs from "fs";
import { Storage } from "./storage.interface";

class LocalStorage implements Storage {
  path: string;
  constructor(path: string) {
    this.path = path;
  }

  start(): boolean {
    console.log("Starting storage connection...");
    try {
      fs.accessSync(this.path);
      console.log("SUCCESS: Path was found");
      return true;
    } catch (error) {
      console.log("ERROR: Path doesn't exist" + this.path);
      return false;
    }
  }

  getData(uri: string): JSON[] {
    console.log("Starting data retrieval...");
    try {
      const data = fs.readFileSync(uri, "utf-8");
      console.log("SUCCESS: File was found");
      return JSON.parse(data);
    } catch (error) {
      console.log("ERROR: Error while reading or parsing data");
      return [];
    }
  }
}

export { LocalStorage };
