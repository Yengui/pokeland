import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Particle from "../components/Particle";
import MainBtn from "../components/MainBtn";
import Navbar from "../components/Navbar";
import Section1Home from "../components/Section1Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokeland</title>
        <meta name="description" content="Mini pokemon game" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <section className={styles.banner}>
        <div className={`${styles.bannerbg} relative`}>
          <div className="flex justify-center items-center flex-col pl-4 w-full sm:pl-0 sm:w-1/2 h-full absolute top-0 left-0 z-10">
            <div>
              <h1 className="leading-none text-slate-200">
                Welcome to
                <br />
                <span className="underline decoration-red-700 decoration-4">
                  Pokeland
                </span>
              </h1>
              <h3 className=" text-slate-300">
                Your go-to land for learning about everything
                <br /> related to Pokemon
              </h3>
              <MainBtn text={"explore"} link={"/pokemons/1"} />
            </div>
          </div>
        </div>
      </section>
      <Section1Home />
    </div>
  );
}
