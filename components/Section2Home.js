import React from "react";
import Link from "next/link";

function Section2Home() {
  return (
    <section className="bg-slate-900 py-24 text-slate-200">
      <h1 className="pokehollow mx-auto text-5xl sm:text-7xl text-center break-all mb-24 mt-5 underline decoration-4 decoration-yellow-800 decoration-dotted">
        Discover
      </h1>
      <div className="flex justify-center items-center flex-col sm:flex-row">
        <header className="max-w-sm sm:max-w-md px-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-5xl font-bold underline decoration-2 hover:text-white">
            <Link href="/pokemons/1">Pokemon list</Link>
          </h2>
          <p className="mt-4 whitespace-pre-wrap max-w-fit">
            Browse the pokemon list! You might encounter your favorite.
          </p>
        </header>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[20rem] sm:h-[28rem] sm:w-[28rem] md:h-[36rem] md:w-[36rem]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFFBEB"
                d="M59.4,-47.9C67.7,-36.9,58.9,-12.7,51.1,7.7C43.3,28.2,36.5,45,24.3,51.3C12,57.5,-5.8,53.2,-21.5,45.4C-37.3,37.5,-51,26.2,-55,11.7C-58.9,-2.7,-53.1,-20.2,-42.3,-31.8C-31.5,-43.4,-15.8,-49.1,4.9,-53C25.5,-56.9,51.1,-59,59.4,-47.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
            className="relative z-10 h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem] md:h-[28rem] md:w-[28rem]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col-reverse sm:flex-row mt-16">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[18rem] w-[18rem] sm:h-[24rem] sm:w-[24rem] md:h-[32rem] md:w-[32rem]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#E0E7FF"
                d="M38.4,-47.3C49.7,-36.2,58.7,-24.1,65.5,-8.2C72.3,7.6,76.7,27.2,70.8,44C64.8,60.8,48.6,74.7,31.8,75.8C15,76.9,-2.2,65.1,-21,58C-39.8,51,-60.1,48.7,-69,37.7C-78,26.7,-75.5,6.9,-70,-10.3C-64.5,-27.5,-56,-42.1,-43.9,-52.9C-31.7,-63.8,-15.8,-71,-1.2,-69.7C13.5,-68.3,27.1,-58.3,38.4,-47.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
            className="relative z-10 h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem] md:h-[28rem] md:w-[28rem]"
          />
        </div>
        <header className="max-w-sm sm:max-w-md px-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-5xl font-bold underline decoration-2 hover:text-white">
            <Link href="/types">Pokemon types</Link>
          </h2>
          <p className="mt-4 whitespace-pre-wrap max-w-fit">
            Check all the existing pokemon types!
          </p>
        </header>
      </div>
      <div className="flex justify-center items-center flex-col sm:flex-row mt-16">
        <header className="max-w-sm sm:max-w-md px-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-5xl font-bold underline decoration-2 hover:text-white">
            <Link href="/game">Pokemon game</Link>
          </h2>
          <p className="mt-4 whitespace-pre-wrap max-w-fit">
            Wanna play a game? It's gonna be fun!
          </p>
        </header>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[20rem] sm:h-[28rem] sm:w-[28rem] md:h-[36rem] md:w-[36rem]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#E4E4E7"
                d="M60.8,-19.1C70,8.7,62.8,42.5,45.2,53.1C27.7,63.7,-0.1,51.1,-19,35.2C-37.9,19.4,-47.9,0.3,-43.2,-21.2C-38.6,-42.7,-19.3,-66.6,3.2,-67.7C25.8,-68.7,51.6,-46.9,60.8,-19.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
            className="relative z-10 h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem] md:h-[28rem] md:w-[28rem]"
          />
        </div>
      </div>
      &nbsp;
    </section>
  );
}

export default Section2Home;
