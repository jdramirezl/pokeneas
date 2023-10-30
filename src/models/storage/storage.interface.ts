interface Storage {
  path: string;
  username?: string;
  password?: string;
  start(): boolean;
  getData(uri: string): JSON[];
}

export { Storage };
