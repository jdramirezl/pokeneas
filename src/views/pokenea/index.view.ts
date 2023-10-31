
export const PokeDexIndexView = (): string => {
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
    <div class=" bg-light p-4 border ">
          <div class="bg-light p-4 border d-flex align-items-center">
            <img src="https://storage.googleapis.com/pokeneas_data/pokeball.png" alt="Left Icon" class="icon mr-3"> <!-- Left icon image -->
            <h2 class="text-center text-warning mb-0">PokeDex API Endpoints</h2>
          <img src="https://storage.googleapis.com/pokeneas_data/pokeball.png" alt="Right Icon" class="icon ml-3"> <!-- Right icon image -->
          </div>
          <ul>
            <li><a href="/api/pokedex">View All Pokeneas (JSON): /api/pokedex</a></li>
            <li><a href="/api/pokedex/random">Get a Random Pokenea (JSON): /api/pokedex/random</a></li>
            <li><a href="/api/pokedex/random-show">Show View Random Pokenea: /api/pokedex/random-show</a></li>
          </ul>
        </div>
    
    </body>
  </html>    
    `;
};