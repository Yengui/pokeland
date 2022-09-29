import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainBtn from "../components/MainBtn";
import Section1Home from "../components/Section1Home";
import Section2Home from "../components/Section2Home";
import Section3Home from "../components/Section3Home";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <Head>
        <title>Pokeland</title>
      </Head>
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
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        key={"abcd2"}
      >
        <Section1Home />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        key={"abcd3"}
      >
        <Section2Home />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        key={"abcd4"}
      >
        <Section3Home />
      </motion.div>
    </motion.div>
  );
}
