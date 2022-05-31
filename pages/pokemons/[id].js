export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
      { params: { id: "9" } },
      { params: { id: "10" } },
      { params: { id: "11" } },
      { params: { id: "12" } },
      { params: { id: "13" } },
      { params: { id: "14" } },
      { params: { id: "15" } },
      { params: { id: "16" } },
      { params: { id: "17" } },
      { params: { id: "18" } },
      { params: { id: "19" } },
      { params: { id: "20" } },
      { params: { id: "21" } },
      { params: { id: "22" } },
      { params: { id: "23" } },
      { params: { id: "24" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const pokemonsData = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${
      (Number(params.id) - 1) * 48
    }&limit=48`
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
    <div className="bg-slate-900">
      {pokemons.length === 0 ? (
        <p>no results found...</p>
      ) : (
        <section className="py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center w-full">
          {pokemons.map((pokemon, i) => (
            <div
              key={"poke" + i}
              className="w-40 h-60 sm:w-[12.5rem] sm:h-[17.5rem] lg:w-60 lg:h-80 bg-gradient-to-tr from-[#93a5cf] to-[#e4efe9] rounded-tr-xl rounded-bl-xl m-1 sm:m-5 p-1 sm:p-2 flex justify-center items-center flex-col shadow-lg"
            >
              <div>
                <img
                  src={pokemon.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 hover:text-slate-600 hover:cursor-pointer">
                  {pokemon.name}
                </h3>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default index;
