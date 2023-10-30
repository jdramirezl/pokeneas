class Pokenea {
  constructor(
    private id: number,
    private name: string,
    private height: number,
    private skills: string[],
    private image: string,
    private philosphical_phrase: string
  ) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.skills = skills;
    this.image = image;
    this.philosphical_phrase = philosphical_phrase;
  }

  // Getters
  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getHeight(): number {
    return this.height;
  }

  public getSkills(): string[] {
    return this.skills;
  }

  public getImage(): string {
    return this.image;
  }

  public getPhilosphicalPhrase(): string {
    return this.philosphical_phrase;
  }

  // Setters
  public setName(name: string): void {
    this.name = name;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public setSkills(skills: string[]): void {
    this.skills = skills;
  }

  public setImage(image: string): void {
    this.image = image;
  }

  public setPhilosphicalPhrase(philosphical_phrase: string): void {
    this.philosphical_phrase = philosphical_phrase;
  }

  // Utils

  public toString(): string {
    return `Pokenea[id=${this.id}, name=${this.name}, height=${this.height}, skills=${this.skills}, image=${this.image}, philosphical_phrase=${this.philosphical_phrase}]`;
  }
}

export { Pokenea };
