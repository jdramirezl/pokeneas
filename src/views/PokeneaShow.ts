import Pokenea from "../models/Pokenea";

export const PokeneaShow = (data: {
  pokemon: Pokenea;
  containerName: string;
}): string => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <img src="${data.pokemon.getImage()}" alt="${data.pokemon.getName()}" style="display: block; margin: 0 auto;">
      <h1 style="text-align: center; color: #FF9900; font-size: 24px;">Pokemon Phrase!:${data.pokemon.getPhilosphicalPhrase()} </h1>
      <p style="text-align: center;">Hostname: ${data.containerName}</p>
    </body>
  </html>    
    `;
};