const fetch = require(`node-fetch`);
var fs = require(`fs`);

function getTypes(fileName) {
  let pokemonArray = fs.readFileSync(fileName, `utf-8`)
  pokemonArray = pokemonArray.split(`\n`);
 
  for (let i = 0; i < pokemonArray.length; i++) {
    let typeArray = [];
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonArray[i]}`)
      .then(res => res.json())
      .then(res => {
        for (let j = 0; j < res.types.length; j++) {
          typeArray.push(res.types[j].type.name)
        }
        let resultStr = `${pokemonArray[i]}: ${typeArray.join(`, `)}`
        console.log(resultStr)
      })
    }
  }


getTypes(`input.txt`);
