import React from "react";
import Image from "next/image";
import ash from "../images/ash.png";
import Link from "next/link";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <section className="bg-slate-900 text-slate-200">
      <div className="relative -top-40">
        <div className="flex justify-center items-center">
          <Image src={ash} width="166px" height="200px" />
        </div>
        <h1
          style={{ letterSpacing: "0.3rem" }}
          className="text-center pokesolid text-white text-6xl pt-20"
        >
          Pokeland
        </h1>
        <div className="pt-20 pl-10 xl:pl-36 flex gap-28 flex-wrap">
          <div>
            <h2 className="font-bold py-3 text-white text-lg">About site:</h2>
            <p>
              A simple website for pokemon lovers!
              <br />
              Developed using <b>NextJs</b>
            </p>
          </div>
          <div>
            <h2 className="font-bold py-3 text-white text-lg">Site links:</h2>
            <nav className="flex gap-20 flex-wrap">
              <ul>
                <li className="pt-2 underline">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="pt-2 underline">
                  <Link href={"/game"}>Mini Game</Link>
                </li>
                <li className="pt-2 underline">
                  <Link href={"/about-me"}>About Me</Link>
                </li>
              </ul>
              <ul>
                <li className="pt-2 underline">
                  <Link href={"/pokemons/1"}>Pokemon List</Link>
                </li>
                <li className="pt-2 underline">
                  <Link href={"/types"}>Pokemon Types</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="font-bold py-3 text-white text-lg">Contact me:</h2>
            <nav className="flex gap-20 flex-wrap">
              <ul>
                <li className="pt-2 underline">
                  <FontAwesomeIcon icon={faFacebook} />
                  <span className="pl-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=100063143803059"
                      target="blank"
                    >
                      Ahmad Yengui
                    </a>
                  </span>
                </li>
                <li className="pt-2 underline">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span className="pl-3">
                    <a
                      href="https://www.linkedin.com/in/ahmad-yengui-0392b9241/"
                      target="blank"
                    >
                      Ahmad Yengui
                    </a>
                  </span>
                </li>
                <li className="pt-2 underline">
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="pl-3">
                    <a href="https://github.com/Yengui" target="blank">
                      Yengui
                    </a>
                  </span>
                </li>
                <li className="pt-2 underline">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="pl-3">
                    <a href="mailto:ahmadyengui123@gmail.com">
                      ahmadyengui123@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-3 text-center text-lg">
        Made with <span className="text-red-500">♥</span> by{" "}
        <a
          href="https://github.com/Yengui"
          className="text-white underline"
          target="blank"
        >
          Yengui
        </a>
      </div>
    </section>
  );
}

export default Footer;
