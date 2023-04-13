import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import '@splidejs/react-splide/css';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion"
import { Spinner } from "../comp/Spinner";
import { ResultsNotFound } from "../comp/ResultsNotFound";
import { random } from "./AxiosClient";

export const RandomRecipes = () => {
  const [randomPick, setRandomPick] = useState([]);
  const [loading, setLoading] = useState(false);

  const randomRecipes = async () => {
    const api = await random.get().then(({data}) => data);
      try {
        if (typeof api !== 'undefined'){
          return api;
        } else {
          setLoading(null);
          return null;
        };
      } catch (e) {
        console.error(e);
      }
    };

  const handleLoader = (t) => {
    setTimeout(() => {
      setLoading(false);
      setRandomPick(t);
    }, 4000);
  };

  useEffect(() => {
    setLoading(true);
    randomRecipes().then(({recipes}) => handleLoader(recipes));
  }, []);
    
  return (
    <>
    {loading === null && (
      <AnimatePresence mode='wait'>
      <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      >
        <ResultsNotFound />
      </motion.div>
      </AnimatePresence>
    )}
    {loading === true && (
      <AnimatePresence mode='wait'>
      <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      >
        <Spinner />
      </motion.div>
      </AnimatePresence>
    )}
    {loading === false && (
    <AnimatePresence mode='wait'>
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <Splide options={{
        perPage: 3,
        gap: "1rem",
        arrows: false,
        pagination: false,
        drag: "free",
        type: "loop",
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1
        }
      }} extensions={{ AutoScroll }}>
      {randomPick.map((recipes) => {
        return (
          <SplideSlide>
            <div className="h-full md:m-8 xl:m-12 text-left" key={recipes.id}>
              <Link to={'/recipes/' + recipes.id}>
                <div className="h-10 md:h-20 xl:h-24 text-black hover:text-[#608E43]">
                  <h3 className="text-center text-sm md:text-lg xl:text-xl font-extrabold mx-auto my-auto relative">{recipes.title}</h3>
                </div>
                <img className="mx-auto my-auto rounded-full md:rounded-3xl xl:rounded-2xl hover:shadow-image active:scale-95 active:shadow-active w-32 h-20 md:w-52 md:h-40 xl:w-72 xl:h-56" src={recipes.image} alt='' />
              </Link>
            </div>
          </SplideSlide>
        )
      })}
      </Splide>
    </motion.div>
    </AnimatePresence>
    )}
    </>
  )
}