import React from "react";
import Link from "next/link";

function MainBtn({ text, link }) {
  return (
    <div className="mt-5">
      <Link href={link} as={link}>
        <div className="anim flex justify-center items-center cursor-pointer pr-2 pl-4 py-3 w-48 bg-red-700 hover:bg-red-800 text-white text-xl font-semibold">
          <span className="txt">{text}</span>
          <img src="/mainpokeball.png" className="ball h-7 px-2" />
        </div>
      </Link>
    </div>
  );
}

export default MainBtn;
