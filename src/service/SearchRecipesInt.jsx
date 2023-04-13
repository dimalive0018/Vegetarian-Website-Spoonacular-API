import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { loadMore, loadHandle } from './StoreRedux'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from "framer-motion"
import { SeoHelmet } from '../comp/SeoHelmet'
import { Spinner } from '../comp/Spinner'
import { ResultsNotFound } from '../comp/ResultsNotFound'
import { LoadMoreButton } from '../comp/LoadMoreButton'
import { base } from './AxiosClient'

export const SearchRecipesInt = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [handleLoad, setHandleLoad] = useState(0);
  const dispatch = useDispatch();
  let selectorNumber = useSelector((state) => state.number.value.numberSlice);
  let selectorLoad = useSelector((state) => state.handleLoad.value.handleLoadState);
  const params = useParams();
  const searchedRecipes = async (type) => {
    const api = await base.get(`complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&diet=vegetarian&number=100000&intolerances=${type}`).then(({data}) => data);
    try {
      if (typeof api !== 'undefined'){
        return api;
      } else {
        setTimeout(() => {
          setLoading(false);
          setLoading(null);
          dispatch(loadHandle({ handleLoadState: selectorLoad = 1 }));
          return null;
        }, 2500);
      };
    } catch (e) {
      console.error(e);
    }
  };

  const handleLoader = (t) => {
    if(t.length > 0) {
      setTimeout(() => {
      setLoading(false);
      setRecipes(t);
      setHandleLoad(t.length - 5);
      }, 2500);
    } else {
      setTimeout(() => {
        setLoading(false);
        setLoading(null);
        dispatch(loadHandle({ handleLoadState: selectorLoad = 1 }));
      }, 2500);
    }
  };

  const handleLoadMore =() => {
    setHandleLoad(handleLoad - 5);
    if(handleLoad > 0) {
      return dispatch(loadMore({ numberSlice: selectorNumber += 5 }));
    } else if(handleLoad <= 0) {
      return dispatch(loadHandle({ handleLoadState: selectorLoad = 1 }));
    }
  }

  useEffect(() => {
    setLoading(true);
    searchedRecipes(params.type).then(({results}) => handleLoader(results));
  }, [params.type]);
  
  return (
    <>
      <SeoHelmet title={'Brocòle - Search for Intolerance'} description={"Brocòle - Search for Intolerance - powered by Spoonacular API"} />
      <AnimatePresence mode='wait'>
      <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      >
        <h2 className='text-center font-bold text-lg md:text-2xl xl:text-3xl border-b-4 border-[#608E43]'>Search results for {params.type} intolerance</h2>
      </motion.div>
      </AnimatePresence>
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
          {recipes.slice(0, selectorNumber).map((recipe) => {
            return (
              <div className="h-full my-5 mx-3 md:m-8 xl:m-10 flex flex-col md:flex-row-reverse justify-around items-center border-b-2 border-[#608E43]" key={recipe.id}>
                <Link className='h-14 w-52 md:h-52 md:w-64 xl:h-64 xl:w-80 flex justify-center items-center' to={'/recipes/' + recipe.id}>
                  <h3 className="text-center items-center md:text-right text-base md:text-xl xl:text-3xl font-extrabold mx-auto my-auto text-black hover:text-[#608E43]">{recipe.title}</h3>
                </Link>
                <Link to={'/recipes/' + recipe.id}>
                  <img className="h-36 w-52 md:h-52 md:w-64 xl:h-64 xl:w-80 rounded-lg md:rounded-3xl hover:shadow-image active:scale-95 active:shadow-active my-5 mx-1 md:m-5" src={recipe.image} alt='image not available' />
                </Link>
              </div>
            )
          })}
        </motion.div>
        </AnimatePresence>
      )}
      {selectorLoad === 1 && (
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
      <AnimatePresence mode='wait'>
      <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      >
        <LoadMoreButton onClick={handleLoadMore} />
      </motion.div>
      </AnimatePresence>
  </>
  )
}