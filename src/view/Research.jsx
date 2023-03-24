import React, { useState } from 'react'
import { SlFire } from 'react-icons/sl'
import { TbFeatherOff, TbMeatOff } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { Calories } from '../comp/SearchCal'
import { Ingredients } from '../comp/SearchIngr'
import { Intolerances } from '../comp/SearchInt'
import { Link } from 'react-router-dom'
import image from '../assets/Brocòlelogo.gif'
import { useDispatch } from 'react-redux'
import { resetState } from '../service/store'
import { motion } from "framer-motion"

export const Research = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handlerNav = (t) => {
    setSearch(t);
    dispatch(resetState());
  }
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
    <nav className='w-full h-24 md:h-28 xl:h-32 flex justify-center'>
        <Link to={'/'} onClick={() => handlerNav('')}>
            <img className='h-24 md:h-28 xl:h-32' src={image} alt="" /> 
        </Link>
    </nav>
    <div className='flex flex-row justify-evenly mt-6'>
        <NavLink className='flex flex-col-reverse items-center justify-center rounded-2xl font-bold m-6 shadow-nav w-16 h-12 md:w-20 md:h-16 xl:h-20 hover:shadow-image active:shadow-active bg-[#DD4124] text-white hover:bg-white hover:text-black hover:opacity-60 active:scale-[0.9]' onClick={() => handlerNav('ingredient')}>
          <TbMeatOff className= 'm-1 font-bold h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6' />
          <h3 className='text-center text-[8px] md:text-[10px] xl:text-xs'>Search by Ingredient</h3>
        </NavLink>
        <NavLink className='flex flex-col-reverse items-center justify-center rounded-2xl font-bold m-6 shadow-nav w-16 h-12 md:w-20 md:h-16 xl:h-20 hover:shadow-image active:shadow-active bg-[#DD4124] text-white hover:bg-white hover:text-black hover:opacity-60 active:scale-[0.9]' onClick={() => handlerNav('colories')}>
            <SlFire className= 'm-1 font-bold h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6' />
            <h3 className='text-center text-[8px] md:text-[10px] xl:text-xs'>Search by Calories</h3>
        </NavLink>
        <NavLink className='flex flex-col-reverse items-center justify-center rounded-2xl font-bold m-6 shadow-nav w-16 h-12 md:w-20 md:h-16 xl:h-20 hover:shadow-image active:shadow-active bg-[#DD4124] text-white hover:bg-white hover:text-black hover:opacity-60 active:scale-[0.9]' onClick={() => handlerNav('intolerance')}>
            <TbFeatherOff className= 'm-1 font-bold h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6' />
            <h3 className='text-center text-[8px] md:text-[10px] xl:text-xs'>Search for Intolerance</h3>
        </NavLink>
      </div>
      <div>
        {search === '' && (
          <>
            <div className='flex flex-col justify-center text-center w-full h-48 md:h-60 xl:h-72'>
              <h1 className='text-[#608E43] text-4xl md:text-6xl xl:text-8xl font-pacifico'>Brocòle</h1>
              <h2 className='text-base md:text-xl xl:text-3xl font-pacifico'>Vegetarian Recipes</h2>
            </div>
          </>
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
    </motion.div>
  )
}
