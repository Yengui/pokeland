import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const pokemonsData = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=48`
  );
  const pokemonsJson = await pokemonsData.json();
  const pokemonsList = pokemonsJson.results;
  let pokemons = [];
  for (const pokemon of pokemonsList) {
    const poke = await fetch(pokemon.url);
    const pokeJson = await poke.json();
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeJson.id}.png`;
    const thisPoke = { id: pokeJson.id, name: pokemon.name, image: image };
    pokemons.push(thisPoke);
  }
  return {
    props: { pokemons: [...pokemons] },
  };
}

function Index({ pokemons }) {
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);

  useEffect(() => {
    setLoader(false);
    setLoader2(false);
  }, [pokemons]);

  const router = useRouter();

  const nextPage = () => {
    if (!loader && !loader2) {
      router.push("/pokemons/2");
      setLoader(true);
    }
  };

  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div className="bg-slate-900 pt-20">
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
      <div className="bg-slate-900 pb-52 pt-5 flex justify-center items-center">
        <button
          type="button"
          className="w-40 h-12 bg-slate-200 text-slate-900 text-xl mx-5 duration-300 hover:scale-105 opacity-30"
        >
          {loader2 ? <div className="lds-dual-ring"></div> : <>Previous</>}
        </button>

        <button
          type="button"
          className="w-40 h-12 bg-slate-200 text-slate-900 text-xl mx-5 duration-300 hover:scale-105 flex justify-center items-center"
          onClick={() => nextPage()}
        >
          {loader ? <div className="lds-dual-ring"></div> : <>Next</>}
        </button>
      </div>
    </motion.div>
  );
}

export default Index;
