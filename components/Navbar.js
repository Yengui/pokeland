import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [navb, setnavb] = useState(false);
  const [animclass, setanimclass] = useState(true);
  const toggleNav = () => {
    if (navb === false) {
      setanimclass((state) => true);
      setnavb((state) => true);
    } else {
      setanimclass((state) => false);
      setTimeout(() => {
        setnavb((state) => false);
      }, 400);
    }
  };
  return (
    <div className="sticky top-0 z-20">
      <div
        className={
          navb
            ? " py-5 w-full bg-neutral-900 text-white text-xl text-center"
            : "hidden"
        }
      >
        <nav
          className={
            animclass
              ? "animnav flex justify-center items-center  gap-5 flex-col"
              : "animnav2 flex justify-center items-center  gap-5 flex-col"
          }
        >
          <Link href={"/"}>
            <div className="cursor-pointer hover:underline decoration-white decoration-2">
              Home
            </div>
          </Link>
          <Link href={"/pokemons/1"}>
            <div className="cursor-pointer hover:underline decoration-white decoration-2">
              Pokemon List
            </div>
          </Link>
          <Link href={"/game"}>
            <div className="cursor-pointer hover:underline decoration-white decoration-2">
              Mini Game
            </div>
          </Link>
          <Link href={"/about-me"}>
            <div className="cursor-pointer hover:underline decoration-white decoration-2">
              About Me
            </div>
          </Link>
        </nav>
      </div>
      <div className="flex justify-center items-center h-1 w-full bg-neutral-900 text-white text-xl">
        <img
          onClick={toggleNav}
          src="/mainpokeball.png"
          alt="pokeball"
          className="w-11 h-11 rounded-full transform translate-y-6 z-10 cursor-pointer hover:rotate-12 duration-300"
        />
      </div>
      <div className="relative">
        <div className="triangleDivider2">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
