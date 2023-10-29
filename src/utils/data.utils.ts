import { Pokenea } from "../models/pokenea.model";

const PokeneasJSON: any[] = [
  {
    id: 1,
    name: "",
    height: 0,
    skills: ["", ""],
    image: "",
    philosphical_phrase: "",
  },
  {
    id: 1,
    name: "",
    height: 0,
    skills: ["", ""],
    image: "",
    philosphical_phrase: "",
  },
  {
    id: 1,
    name: "",
    height: 0,
    skills: ["", ""],
    image: "",
    philosphical_phrase: "",
  },
  {
    id: 1,
    name: "",
    height: 0,
    skills: ["", ""],
    image: "",
    philosphical_phrase: "",
  },
  {
    id: 1,
    name: "",
    height: 0,
    skills: ["", ""],
    image: "",
    philosphical_phrase: "",
  },
  {
    id: 1,
    name: "",
    height: 0,
    skills: ["", ""],
    image: "",
    philosphical_phrase: "",
  },
  {
    id: 1,
    name: "",
    height: 0,
    skills: ["", ""],
    image: "",
    philosphical_phrase: "",
  },
  {
    id: 1,
    name: "",
    height: 0,
    skills: ["", ""],
    image: "",
    philosphical_phrase: "",
  },
];

const HardcodedPokeneas: Pokenea[] = PokeneasJSON.map((pokeneaJSON: any) => {
  return new Pokenea(
    pokeneaJSON.id,
    pokeneaJSON.name,
    pokeneaJSON.height,
    pokeneaJSON.skills,
    pokeneaJSON.image,
    pokeneaJSON.philosphical_phrase
  );
});

export { HardcodedPokeneas };
