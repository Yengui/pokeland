import { Head } from "next/document";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
    const thisPoke = { id: pokeJson.id, name: pokemon.name, image: image };
    pokemons.push(thisPoke);
  }
  return {
    props: { pokemons: [...pokemons] },
  };
}

function index({ pokemons }) {
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);

  useEffect(() => {
    setLoader(false);
    setLoader2(false);
  }, [pokemons]);

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const nextPage = () => {
    if (!loader && !loader2) {
      router.push("/pokemons/" + (Number(id) + 1));
      setLoader(true);
    }
  };

  const previousPage = () => {
    if (!loader2 && !loader) {
      if (id > 1) {
        router.push("/pokemons/" + (Number(id) - 1));
        setLoader2(true);
      }
    }
  };

  const checkPokemon = (id) => {
    router.push("/pokemon/" + id);
  };

  return (
    <div>
      <div className="bg-slate-900">
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
      <div className="bg-slate-900 pb-10 pt-5 flex justify-center items-center">
        <button
          type="button"
          className="w-40 h-12 bg-slate-200 text-slate-900 text-xl mx-5 duration-300 hover:scale-105"
          onClick={() => previousPage()}
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
    </div>
  );
}

export default index;
