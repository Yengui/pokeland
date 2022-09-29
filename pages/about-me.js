import myphoto from "../images/IMG_20220502_102134.jpg";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Head from "next/head";
import { motion } from "framer-motion";

const skills = [
  { name: "html", percentage: 95 },
  { name: "css", percentage: 90 },
  { name: "javascript", percentage: 90 },
  { name: "react", percentage: 80 },
  { name: "next", percentage: 80 },
  { name: "node", percentage: 80 },
  { name: "mongodb", percentage: 80 },
  { name: "photoshop", percentage: 85 },
  { name: "illustrator", percentage: 70 },
  { name: "figma", percentage: 70 },
  { name: "mysql", percentage: 60 },
  { name: "php", percentage: 60 },
  { name: "c", percentage: 75 },
  { name: "c++", percentage: 75 },
  { name: "unity", percentage: 70 },
  { name: "tailwind", percentage: 85 },
  { name: "python", percentage: 30 },
  { name: "java", percentage: 60 },
  { name: "vue", percentage: 40 },
  { name: "wordpress", percentage: 30 },
];

function About() {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <Head>
        <title>About Me</title>
      </Head>
      <section className="bg-slate-900 py-24">
        <div className="px-10 text-slate-200 flex-col-reverse sm:flex-row flex justify-center items-center gap-5 sm:gap-10">
          <section>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center sm:text-left">
              Hello ! My name is
              <div className="text-white underline decoration-red-500 pt-4">
                Ahmad Yengui
              </div>
            </h1>
            <div className="block w-36 sm:hidden mx-auto py-5">
              <Image
                src={myphoto}
                className="rounded-tl-[4rem] rounded-br-[4rem]"
                alt="Ahmad Yengui"
                layout="responsive"
              />
            </div>
            <h2 className="mt-6 text-slate-300 text-center sm:text-left">
              I&apos;m a cs engineering student.
              <br />
              I&apos;m interested in fullstack web development.
            </h2>
          </section>
          <div className="hidden sm:block sm:w-60 lg:w-96 border-red-500 border-y-2 lg:border-y-4 rounded-tl-[4rem] rounded-br-[4rem]">
            <Image
              src={myphoto}
              className="rounded-tl-[4rem] rounded-br-[4rem]"
              alt="Ahmad Yengui"
              layout="responsive"
            />
          </div>
        </div>
        <div>
          <h1></h1>
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
        <section className="bg-slate-100 pt-24 pb-52">
          <h1 className="pokehollow mx-auto text-red-600 text-5xl sm:text-7xl text-center break-all mb-28 mt-5 underline decoration-4 decoration-yellow-400 decoration-dotted">
            My skills
          </h1>
          <div className="grid justify-center items-center content-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mx-10">
            {skills.map((skill, i) => (
              <div key={"skill" + i} className="text-center text-xl font-bold">
                <div className="w-20 h-20 sm:w-40 sm:h-40 mx-auto">
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    strokeWidth={5}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(220, 38, 38, ${skill.percentage / 100})`,
                      textColor: "#0f172a",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
                <div className="mt-4">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}

export default About;
