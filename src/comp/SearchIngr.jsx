import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchRecipesIngr } from '../service/SearchRecipesIngr'
import { ResearchPageIngr } from './ResearchPageIngr'
import { motion } from "framer-motion"

export const Ingredients = () => {
  return (
    <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
      <ResearchPageIngr />
      <Routes>
        <Route path='/search/:type' element={ <SearchRecipesIngr /> }/>
      </Routes>
    </motion.div>
  )
}
