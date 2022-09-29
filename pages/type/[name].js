import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "bug" } },
      { params: { name: "dark" } },
      { params: { name: "dragon" } },
      { params: { name: "electric" } },
      { params: { name: "fairy" } },
      { params: { name: "fighting" } },
      { params: { name: "fire" } },
      { params: { name: "flying" } },
      { params: { name: "ghost" } },
      { params: { name: "grass" } },
      { params: { name: "ground" } },
      { params: { name: "ice" } },
      { params: { name: "normal" } },
      { params: { name: "poison" } },
      { params: { name: "psychic" } },
      { params: { name: "rock" } },
      { params: { name: "steel" } },
      { params: { name: "water" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { name } = params;
  const pokemonData = await fetch(`https://pokeapi.co/api/v2/type/${name}`);
  const pokemonJson = await pokemonData.json();
  const pokemonsList = pokemonJson.pokemon;
  let pokemons = [];
  for (const pkmn of pokemonsList) {
    const poke = await fetch(pkmn?.pokemon?.url);
    const pokeJson = await poke.json();
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeJson.id}.png`;
    const thisPoke = { id: pokeJson.id, name: pkmn.pokemon.name, image: image };
    pokemons.push(thisPoke);
    console.log(thisPoke);
  }
  return {
    props: { pokemons: [...pokemons], typename: name },
  };
}

function Index({ pokemons, typename }) {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <Head>
        <title>{typename}</title>
      </Head>
      <div className="bg-slate-900 pt-24 pb-52">
        {pokemons.length === 0 ? (
          <p className="text-white text-center">no results found...</p>
        ) : (
          <section className="py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center w-full">
            {pokemons.map((pokemon, i) => (
              <Link
                key={"poke" + i}
                href={"/pokemon/" + pokemon.id}
                as={"/pokemon/" + pokemon.id}
              >
                <div className="w-40 h-60 cursor-pointer text-slate-900 duration-500 hover:text-slate-300 sm:w-[12.5rem] sm:h-[17.5rem] lg:w-60 lg:h-80 bg-gradient-to-tr hover:bg-none from-[#93a5cf] to-[#e4efe9] m-1 sm:m-5 p-1 sm:p-2 flex justify-center items-center flex-col shadow-lg border border-opacity-0 hover:border-opacity-100 border-slate-300 relative before:absolute before:bg-slate-300 before:-top-11 before:-left-11 before:h-10 before:w-72 overflow-hidden before:opacity-30 hover:before:transform hover:before:translate-y-96 hover:before:duration-700">
                  <div>
                    <img
                      src={pokemon.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{pokemon.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>
    </motion.div>
  );
}

export default Index;
