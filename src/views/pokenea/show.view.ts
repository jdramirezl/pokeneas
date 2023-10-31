import { Pokenea } from "../../models/pokenea.model";

export const PokeneaShow = (data: {
  pokemon: Pokenea;
  containerName: string;
}): string => {
  return `
  <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <style>
    body {
      font-family: 'Pixelify Sans', sans-serif;
      background-color: #f0f0f0; /* Background color of the interface */
    }
    .pokemon-image {
      max-width: 80%;
    }
    .icon {
      max-width: 10%;
    }
  </style>
</head>
<body>
<div class="d-flex align-items-center justify-content-center" style="min-height: 100vh;">
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <img src="${data.pokemon.getImage()}" alt="${data.pokemon.getName()}" class="pokemon-image">
      </div>
      <div class="col-md-7">
        <div class=" bg-light p-4 border border-warning my-5">
          <div class="bg-light p-4 border d-flex align-items-center">
            <img src="https://storage.googleapis.com/pokeneas_data/pokeball.png" alt="Left Icon" class="icon mr-3"> <!-- Left icon image -->
            <h2 class="text-center text-warning mb-0">Random Pokemonea!</h2>
          <img src="https://storage.googleapis.com/pokeneas_data/pokeball.png" alt="Right Icon" class="icon ml-3"> <!-- Right icon image -->
          </div>
          <p> Frase Filosófica : "${data.pokemon.getPhilosphicalPhrase()}"</p>
          <p>Contenedor : ${data.containerName}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>   
    `;
};

