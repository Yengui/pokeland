import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { data } from "autoprefixer";
import { faListSquares } from "@fortawesome/free-solid-svg-icons";

function game() {
  const [pokemonName1, setpokemonName1] = useState("");
  const [pokemonName2, setpokemonName2] = useState("");
  const [pokemonName3, setpokemonName3] = useState("");
  const [pokemonImage, setpokemonImage] = useState("");
  const rightPokemon = useRef("");
  const [play, setPlay] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const [myScore, setMyScore] = useState(0);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      let maximumScore = localStorage.getItem("maxScore");
      if (!maximumScore) {
        localStorage.setItem("maxScore", 0);
        setBestScore(0);
      } else {
        setBestScore(Number(maximumScore));
      }
      let randomNumber1;
      let randomNumber2;
      let randomNumber3;
      randomNumber1 = Math.floor(Math.random() * 905) + 1;
      while (!randomNumber2 || randomNumber2 == randomNumber1) {
        randomNumber2 = Math.floor(Math.random() * 905) + 1;
      }
      while (
        !randomNumber3 ||
        randomNumber3 == randomNumber2 ||
        randomNumber3 == randomNumber1
      ) {
        randomNumber3 = Math.floor(Math.random() * 905) + 1;
      }
      try {
        const resp1 = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomNumber1}`
        );
        const resp2 = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomNumber2}`
        );
        const resp3 = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomNumber3}`
        );
        const pokemon1 = await resp1.json();
        const pokemon2 = await resp2.json();
        const pokemon3 = await resp3.json();
        const onetwothree = Math.floor(Math.random() * 3) + 1;
        let chosenPokemon;
        if (onetwothree == 1) {
          chosenPokemon = randomNumber1;
          rightPokemon.current = pokemon1.name;
        } else if (onetwothree == 2) {
          chosenPokemon = randomNumber2;
          rightPokemon.current = pokemon2.name;
        } else {
          chosenPokemon = randomNumber3;
          rightPokemon.current = pokemon3.name;
        }
        setpokemonImage(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${chosenPokemon}.png`
        );
        setpokemonName1(pokemon1?.name);
        setpokemonName2(pokemon2?.name);
        setpokemonName3(pokemon3?.name);
      } catch (err) {
        console.log(err);
      }
    };
    setPlayed(false);
    setPlay(false);
    getPokemon();
  }, []);

  const fetchNewList = async () => {
    let randomNumber1;
    let randomNumber2;
    let randomNumber3;
    randomNumber1 = Math.floor(Math.random() * 905) + 1;
    while (!randomNumber2 || randomNumber2 == randomNumber1) {
      randomNumber2 = Math.floor(Math.random() * 905) + 1;
    }
    while (
      !randomNumber3 ||
      randomNumber3 == randomNumber2 ||
      randomNumber3 == randomNumber1
    ) {
      randomNumber3 = Math.floor(Math.random() * 905) + 1;
    }
    try {
      const resp1 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber1}`
      );
      const resp2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber2}`
      );
      const resp3 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber3}`
      );
      const pokemon1 = await resp1.json();
      const pokemon2 = await resp2.json();
      const pokemon3 = await resp3.json();
      const onetwothree = Math.floor(Math.random() * 3) + 1;
      let chosenPokemon;
      if (onetwothree == 1) {
        chosenPokemon = randomNumber1;
        rightPokemon.current = pokemon1.name;
      } else if (onetwothree == 2) {
        chosenPokemon = randomNumber2;
        rightPokemon.current = pokemon2.name;
      } else {
        chosenPokemon = randomNumber3;
        rightPokemon.current = pokemon3.name;
      }
      setpokemonImage(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${chosenPokemon}.png`
      );
      setpokemonName1(pokemon1?.name);
      setpokemonName2(pokemon2?.name);
      setpokemonName3(pokemon3?.name);
    } catch (err) {
      console.log(err);
    }
  };

  const startPlaying = () => {
    setPlay(true);
    setMyScore(0);
    fetchNewList();
  };

  const success = () => {
    console.log("success");
    const currentScoreMax = localStorage.getItem("maxScore");
    if (Number(myScore) + 1 > Number(currentScoreMax)) {
      localStorage.setItem("maxScore", Number(myScore) + 1);
    }
    setMyScore((score) => score + 1);
    fetchNewList();
  };

  const failure = () => {
    console.log("failure");
    let maximumScore = localStorage.getItem("maxScore");
    if (!maximumScore) {
      localStorage.setItem("maxScore", 0);
      setBestScore(0);
    } else {
      setBestScore(Number(maximumScore));
    }
    setPlay(false);
    setPlayed(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const verifyAnswer = (num) => {
    if (num == 1) {
      if (pokemonName1 == rightPokemon.current) {
        success();
      } else {
        failure();
      }
    } else if (num == 2) {
      if (pokemonName2 == rightPokemon.current) {
        success();
      } else {
        failure();
      }
    } else {
      if (pokemonName3 == rightPokemon.current) {
        success();
      } else {
        failure();
      }
    }
  };

  return (
    <>
      <Head>
        <title>Pokegame</title>
      </Head>
      <div className="pt-24 pb-52 bg-slate-900 text-slate-200">
        <h1 className="pokehollow mx-auto text-5xl sm:text-7xl text-center mb-24 mt-5 underline decoration-4 decoration-yellow-800 decoration-dotted">
          Who's that pokemon?
        </h1>
        {play ? (
          <div className="whothat">
            <h2 className="text-2xl text-center">Best score: {bestScore}</h2>
            <h2 className="text-2xl text-center mb-5">Your score: {myScore}</h2>
            <img
              src={pokemonImage}
              className="mx-auto"
              alt="who's that pokemon"
            />
            <div className="mx-auto text-center">
              <button
                type="button"
                className="m-3 px-5 py-2 bg-slate-800 rounded-md hover:bg-slate-700"
                onClick={() => verifyAnswer(1)}
              >
                {pokemonName1}
              </button>
              <button
                type="button"
                className="m-3 px-5 py-2 bg-slate-800 rounded-md hover:bg-slate-700"
                onClick={() => verifyAnswer(2)}
              >
                {pokemonName2}
              </button>
              <button
                type="button"
                className="m-3 px-5 py-2 bg-slate-800 rounded-md hover:bg-slate-700"
                onClick={() => verifyAnswer(3)}
              >
                {pokemonName3}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {played && (
              <>
                <h2 className="text-2xl text-center">
                  Best score: {bestScore}
                </h2>
                <h2 className="text-2xl text-center mb-5">
                  Your score: {myScore}
                </h2>
              </>
            )}
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={startPlaying}
                className="text-3xl font-bold px-10 py-3 bg-red-600 hover:bg-red-500 rounded-md"
              >
                {played ? "Try again" : "Play"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default game;
