import React from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const pokeTypes = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

function Types() {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="bg-slate-900 pt-24 pb-52 text-slate-200">
        <Head>
          <title>Pokemon Types</title>
        </Head>
        <h1 className="pokehollow underline decoration-dotted decoration-yellow-800 text-center text-5xl sm:text-7xl pb-24">
          Pokemon Types
        </h1>
        <ul className="grid place-content-center justify-items-center grid-cols-1 xl:grid-cols-2 flex-col gap-5">
          {pokeTypes.map((type, i) => (
            <li
              key={"poke" + type}
              className={
                i % 2 === 0
                  ? "w-11/12 sm:w-1/3 border border-slate-200 rounded-xl text-3xl xl:justify-self-end"
                  : "w-11/12 sm:w-1/3 border border-slate-200 rounded-xl text-3xl xl:justify-self-start"
              }
            >
              <Link href={"/type/" + type} as={"/type/" + type}>
                <div className="w-full h-full px-2 py-8 cursor-pointer rounded-xl hover:bg-slate-800">
                  <img
                    className="w-24 sm:w-32 object-cover mx-auto"
                    src={"/" + type + ".png"}
                  ></img>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Types;
