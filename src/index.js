
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

//Empty pokemon card created here
const list = document.getElementsByClassName("cards")


function renderPokemon(){
    for (let i = 0; i < data.length; i++) {

        const pokemonCard = document.createElement("li")
        pokemonCard.setAttribute("class", "card")
        const pokemonName = document.createElement("h2")
        pokemonName.setAttribute("class", "card--title")
        const pokemonImage = document.createElement("img")
        pokemonImage.setAttribute("class", "card--img")
        const pokemonStats = document.createElement("ul")
        pokemonStats.setAttribute("class", "card--text")
        
        const pokemon = data[i];
        pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default;
        pokemonImage.width = 256;
        pokemonCard.appendChild(pokemonName);
        pokemonCard.appendChild(pokemonImage)

        for (let i = 0; i < pokemon.stats.length; i++) {
            const pokemonAttribute = document.createElement("li");
            pokemonAttribute.textContent = (pokemon.stats[i].stat.name).toUpperCase() + ": " + pokemon.stats[i].base_stat
            pokemonStats.appendChild(pokemonAttribute);
        }
        
        pokemonCard.appendChild(pokemonStats)

        list[0].appendChild(pokemonCard);
    }
}

renderPokemon();



