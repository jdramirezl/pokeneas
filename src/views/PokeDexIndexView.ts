
export const PokeDexIndexView = (): string => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
    <h1>PokeDex API</h1>
    <ul>
      <li><a href="api/pokedex">View All Pokeneas</a></li>
      <li><a href="/api/pokedex/random">Get a Random Pokenea</a></li>
      <li><a href="/api/pokedex/random-show">Random Pokenea Info Show</a></li>
    </ul>
    </body>
  </html>    
    `;
};