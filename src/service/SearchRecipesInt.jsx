import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { loadMore } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion"

export const SearchRecipesInt = () => {
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch();
  let selectorNumber = useSelector((state) => state.number.value.numberSlice);
  const params = useParams();
  const searchedRecipes = async (type) => {
    const api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6177107e0e6c4215bcadc9f1b23c2ccc&intolerances=${type}&diet=vegetarian&number=100000`).then(({data}) => data);
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
    searchedRecipes(params.type).then(({results}) => setRecipes(results));
  }, [params.type]);
  
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <h2 className='text-center font-bold text-[0.6rem] md:text-base xl:text-xl'>Search results for {params.type}</h2>
      {recipes.slice(0, selectorNumber).map((recipe) => {
      return (
        <div className="h-full md:m-8 xl:m-12 flex flex-row-reverse" key={recipe.id}>
          <h3 className="text-[0.4rem] md:text-base xl:text-xl font-extrabold mx-auto my-auto text-black">{recipe.title}</h3>
          <Link to={'/recipes/' + recipe.id}>
            <img className="h-32 w-32 md:h-48 md:w-48 xl:h-64 xl:w-64 block rounded-lg md:rounded-3xl hover:shadow-image active:scale-95 active:shadow-active" src={recipe.image} alt='' />
          </Link>
        </div>
      )
    })}
      <div className='flex justify-center m-10'>
        <button className='text-center text-[8px] md:text-[10px] xl:text-xs rounded-xl shadow-image hover:shadow-image active:shadow-active bg-[#DD4124] text-white hover:bg-white hover:text-black hover:opacity-60 active:scale-[0.9] h-7 w-20 md:h-10 md:w-24 xl:h-12 xl:w-28 font-extrabold' onClick={() => dispatch(loadMore({ numberSlice: selectorNumber +=5}))} >Load More</button>
      </div>
    </motion.div>
  )
}
