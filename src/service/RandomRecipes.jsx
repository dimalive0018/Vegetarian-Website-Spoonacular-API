import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios"
import { useEffect, useState } from "react";
import '@splidejs/react-splide/css';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

export const RandomRecipes = () => {
  const [randomPick, setRandomPick] = useState([]);
  const randomRecipes = async () => {
    const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=6177107e0e6c4215bcadc9f1b23c2ccc&number=10&tags=vegetarian`).then(({data}) => data);
      try {
        if (typeof api !== 'undefined'){
          return api;
        } else {
          return null;
        };
      } catch (e) {
        console.error(e);
      }
    };
  useEffect(() => {
    randomRecipes().then(({recipes}) => setRandomPick(recipes));
  }, []);
    
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <Splide options={{
        perPage: 3,
        gap: '1rem',
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
                <h3 className="text-[0.6rem] md:text-base xl:text-xl font-extrabold mx-auto my-auto text-white absolute">{recipes.title}</h3>
                <img className="rounded-full md:rounded-3xl xl:rounded-2xl hover:shadow-image active:scale-95 active:shadow-active" src={recipes.image} alt='' />
              </Link>
            </div>
          </SplideSlide>
        )
      })}
      </Splide>
    </motion.div>
    )
}