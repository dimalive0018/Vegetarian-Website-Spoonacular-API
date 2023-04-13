import React, { useState } from 'react'
import { SlFire } from 'react-icons/sl'
import { TbFeatherOff, TbMeatOff } from 'react-icons/tb'
import { Calories } from '../comp/SearchCal'
import { Ingredients } from '../comp/SearchIngr'
import { Intolerances } from '../comp/SearchInt'
import { useDispatch } from 'react-redux'
import { resetState, resetLoad } from '../service/StoreRedux'
import { AnimatePresence, motion } from "framer-motion"
import { Title } from '../comp/Title'
import { Logo } from '../comp/Logo'
import { NavButton } from '../comp/NavButton'

export const Research = () => {
  const [search, setSearch] = useState('title');
  const dispatch = useDispatch();
  const handlerNav = (t) => {
    setSearch(t);
    dispatch(resetState());
    dispatch(resetLoad());
  }
  return (
    <>
    <AnimatePresence mode='wait'>
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <nav className='w-full h-28 md:h-32 xl:h-36 flex justify-center'>
        <Logo onClick={ () => handlerNav('title') } />
      </nav>
    </motion.div>
    </AnimatePresence>
    <AnimatePresence mode='wait'>
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      className='flex flex-row justify-evenly mt-6'
    >
      <NavButton onClick={ () => handlerNav('ingredient') } icon={<TbMeatOff className= 'm-1 font-bold h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8' />} title={'Search by Ingredient'} />
      <NavButton onClick={ () => handlerNav('colories') } icon={<SlFire className= 'm-1 font-bold h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8' />} title={'Search by Calories'} />
      <NavButton onClick={ () => handlerNav('intolerance') } icon={<TbFeatherOff className= 'm-1 font-bold h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8' />} title={'Search for Intolerance'} />
    </motion.div>
    </AnimatePresence>
    <div>
      {search === 'title' && (
        <Title />
      )}
      {search === 'ingredient' && (
        <Ingredients />
      )}
      {search === 'colories' && (
        <Calories />
      )}
      {search === 'intolerance' && (
        <Intolerances />
      )}
    </div>
    </>
  )
}