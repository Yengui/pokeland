import { TbPokeball } from "react-icons/tb";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { GiWeight } from "react-icons/gi";
import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";

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
  const [info, setInfo] = useState(false);
  return (
    <>
      <div className=" bg-slate-900 flex justify-center items-center flex-col overflow-hidden">
        <div className="pokehollow text-white text-5xl sm:text-7xl text-center break-all">
          {thisPokemon.name}
        </div>
        <img
          className=" max-w-xs sm:max-w-md object-cover p-12"
          src={thisPokemon.image}
        />
      </div>
      <div className="bg-slate-900 flex justify-center items-center">
        {thisPokemon.types.map((type, i) => (
          <img
            className=" w-24 sm:w-32 object-cover"
            key={"pokemontype" + i}
            src={"/" + type + ".png"}
          ></img>
        ))}
      </div>
      <div className="bg-slate-900 py-5 text-slate-100 flex justify-center items-center">
        <button
          className="flex justify-center items-center text-base sm:text-xl"
          type="button"
          onClick={() => setInfo((i) => !i)}
        >
          <div className="pr-1">More info</div>
          {info ? (
            <IoIosArrowDropdown className="text-xl sm:text-2xl" />
          ) : (
            <IoIosArrowDropright className="text-xl sm:text-2xl" />
          )}
        </button>
      </div>
      {info && (
        <>
          <div className="bg-slate-100 w-full relative text-slate-900">
            <div className="triangleDivider1">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200 0L0 0 598.97 114.72 1200 0z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
            <div className="flex justify-center items-center flex-wrap text-lg sm:text-2xl pt-24 sm:pt-32 gap-10">
              <div className="flex justify-center items-center gap-2">
                <span className="p-2 sm:p-4 rounded-full border-2 border-orange-600">
                  <AiOutlineColumnHeight className="text-2xl sm:text-5xl text-orange-600" />
                </span>{" "}
                <span>
                  <span className="text-xl sm:text-5xl">
                    {thisPokemon.height}
                  </span>
                  m
                </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="p-2 sm:p-4 rounded-full border-2 border-orange-600">
                  <GiWeight className="text-2xl sm:text-5xl text-orange-600" />
                </span>
                <span>
                  <span className="text-xl sm:text-5xl">
                    {thisPokemon.weight}
                  </span>
                  Kg
                </span>
              </div>
            </div>
            <div className="pt-4 pb-10 sm:py-14 text-center text-2xl sm:text-3xl">
              Abilities:
              <div className="mt-2 text-base sm:text-xl flex justify-center items-center flex-col sm:flex-row gap-0 sm:gap-10">
                {thisPokemon.abilities.map((ability, i) => (
                  <div
                    className="flex justify-center items-center gap-1 transform duration-200 bg-slate-700 hover:bg-slate-100 text-slate-100 hover:text-slate-700 mt-3 sm:mt-1 py-1 pl-4 pr-5 rounded-full border border-slate-700"
                    key={"pokemonability" + i}
                  >
                    <TbPokeball className="text-orange-600" />
                    <div>{ability}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default pokemon;
