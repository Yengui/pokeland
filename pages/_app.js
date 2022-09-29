import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            opacity: 0,
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            opacity: 1,
          }}
          exit={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          key={router.route}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
