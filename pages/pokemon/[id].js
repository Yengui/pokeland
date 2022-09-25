import { TbPokeball } from "react-icons/tb";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { GiWeight } from "react-icons/gi";
import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  let resp;
  let data;
  try {
    resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    data = await resp.json();
  } catch (err) {
    console.log(err);
  }
  if (!data) {
    return {
      props: {
        thisPokemon: {
          name: "",
          types: [],
          abilities: [],
          height: "",
          weight: "",
          image: ``,
          experience: "",
        },
      },
    };
  }
  const thisId = data.id;
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
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${thisId}.png`,
    experience: data.base_experience,
  };

  return {
    props: { thisPokemon },
  };
}

function pokemon({ thisPokemon }) {
  const [info, setInfo] = useState(false);
  return (
    <>
      <Head>
        <title>{thisPokemon.name}</title>
      </Head>
      <div className=" bg-slate-900 flex justify-center items-center flex-col overflow-hidden pt-20">
        <h1 className="pokehollow text-white text-5xl sm:text-7xl text-center break-all">
          {thisPokemon.name}
        </h1>
        <img
          className=" max-w-xs sm:max-w-md object-cover p-12"
          src={thisPokemon.image}
        />
      </div>
      <div className="bg-slate-900 flex justify-center items-center gap-1">
        {thisPokemon.types.map((type, i) => (
          <div key={"pokemontype" + i} className="cursor-pointer">
            <Link href={"/type/" + type} as={"/type/" + type}>
              <img
                className=" w-24 sm:w-32 object-cover"
                src={"/" + type + ".png"}
              ></img>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-slate-900 py-5 text-slate-100 flex justify-center items-center pb-52">
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
        <div className="bg-slate-100 w-full relative text-slate-700">
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
              <span className="p-2 sm:p-4 rounded-full border-2 border-red-600">
                <AiOutlineColumnHeight className="text-2xl sm:text-5xl text-red-600" />
              </span>{" "}
              <span>
                <span className="text-xl sm:text-5xl">
                  {thisPokemon.height / 10}
                </span>
                m
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="p-2 sm:p-4 rounded-full border-2 border-red-600">
                <GiWeight className="text-2xl sm:text-5xl text-red-600" />
              </span>
              <span>
                <span className="text-xl sm:text-5xl">
                  {thisPokemon.weight / 10}
                </span>
                Kg
              </span>
            </div>
          </div>
          <div className="text-lg sm:text-2xl pt-10">
            <div className="flex justify-center items-center gap-2">
              <span className="p-2 sm:p-4 rounded-full border-2 border-red-600">
                <SiExpress className="text-2xl sm:text-5xl text-red-600" />
              </span>
              <span>
                <span className="text-xl sm:text-5xl">
                  {thisPokemon.experience}
                </span>
                base exp.
              </span>
            </div>
          </div>
          <div className="pt-24 sm:pt-32 pb-52 text-center text-2xl sm:text-3xl bg-slate-900 relative">
            <div className="triangleDivider1">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200 0L0 0 598.97 114.72 1200 0z"
                  className="shape-fill2"
                ></path>
              </svg>
            </div>
            <span className="text-slate-100 text-2xl sm:text-4xl underline">
              Abilities:
            </span>
            <div className="mt-2 sm:mt-5 text-base sm:text-xl flex justify-center items-center flex-col sm:flex-row gap-0 sm:gap-10">
              {thisPokemon.abilities.map((ability, i) => (
                <div
                  className="flex justify-center items-center gap-1 transform duration-200 bg-slate-100 hover:bg-slate-900 text-slate-900 hover:text-slate-100 mt-3 sm:mt-1 py-1 pl-4 pr-5 rounded-full border border-slate-100"
                  key={"pokemonability" + i}
                >
                  <TbPokeball className="text-red-500" />
                  <div>{ability}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default pokemon;
