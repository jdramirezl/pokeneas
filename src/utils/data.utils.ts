import Pokenea  from "../models/Pokenea";

const PokeneasJSON: any[] = [
  {
    id: 1,
    name: "Narconea",
    height: 0.4,
    skills: ["Contrabando - Puede obtener objetos raros de manera efectiva"],
    image: "https://storage.googleapis.com/pokeneas_data/narconea.png",
    philosphical_phrase: "Maestro de las transacciones clandestinas",
  },
  {
    id: 2,
    name: "Rapneamon",
    height: 1.7,
    skills: ["Flow Mortal - Aumenta su poder de ataque con cada movimiento exitoso"],
    image: "https://storage.googleapis.com/pokeneas_data/rapneamon.png",
    philosphical_phrase: "Rapneamon, ¡tira candela en las rimas!",
  },
  {
    id: 3,
    name: "Estilosoar",
    height: 0.7,
    skills: ["Elegancia Urbana - Aumenta la velocidad y la precisión en entornos urbanos"],
    image: "https://storage.googleapis.com/pokeneas_data/estilosoar.png",
    philosphical_phrase: "Estilosoar, el Pokémon con más estilo en las calles.",
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
