export async function getStaticProps(context) {
  const pokemonsData = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=48"
  );
  const pokemonsJson = await pokemonsData.json();
  const pokemonsList = pokemonsJson.results;
  let pokemons = [];
  for (const pokemon of pokemonsList) {
    const poke = await fetch(pokemon.url);
    const pokeJson = await poke.json();
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeJson.id}.png`;
    const thisPoke = { name: pokemon.name, image: image };
    pokemons.push(thisPoke);
  }
  return {
    props: { pokemons: [...pokemons] },
  };
}

function index({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon, i) => (
        <div key={"poke" + i}>
          <div>
            <img src={pokemon.image} />
          </div>
          <div>
            <h3>{pokemon.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default index;
