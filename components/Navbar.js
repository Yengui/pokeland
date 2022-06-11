import React from "react";

function Navbar() {
  return (
    <div className="flex justify-around items-center h-20 w-full bg-neutral-900 text-white text-xl">
      <div>
        <nav className="flex gap-8 nv">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Pokemon List</span>
        </nav>
      </div>
      <img
        src="/mainpokeball.png"
        alt="pokeball"
        className="w-[7.5rem] h-[7.5rem] rounded-full transform translate-y-4 border-[12px] border-neutral-900"
      />
      <div>
        <nav className="flex gap-8 nv">
          <span className="cursor-pointer">Login</span>
          <span className="cursor-pointer">Signup</span>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
