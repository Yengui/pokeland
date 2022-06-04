export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await resp.json();
  let types = [];
  for (const pokeType of data?.types) {
    types.push(pokeType?.type?.name || "");
  }
  let abilities = [];
  for (const pokeType of data?.abilities) {
    abilities.push(pokeType?.ability?.name || "");
  }
  const thisPokemon = {
    name: data.name,
    types: [...types],
    abilities: [...abilities],
    height: data.height,
    weight: data.weight,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
  };

  return {
    props: { thisPokemon },
  };
}

function pokemon({ thisPokemon }) {
  return (
    <div>
      <img src={thisPokemon.image} />
      <div>name: {thisPokemon.name}</div>
      <div>
        types:{" "}
        {thisPokemon.types.map((type, i) => (
          <span key={"pokemontype" + i}> {type}</span>
        ))}
      </div>
      <div>
        abilities:{" "}
        {thisPokemon.abilities.map((ability, i) => (
          <span key={"pokemonability" + i}> {ability}</span>
        ))}
      </div>
      <div>height: {thisPokemon.height}</div>
      <div>weight: {thisPokemon.weight}</div>
    </div>
  );
}

export default pokemon;
