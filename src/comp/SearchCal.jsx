import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchRecipesCal } from '../service/SearchRecipesCal'
import { ResearchPageCal } from './ResearchPageCal'
import { motion } from "framer-motion"

export const Calories = () => {
  return (
    <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
      <ResearchPageCal />
      <Routes>
        <Route path='/search/:type' element={ <SearchRecipesCal /> }/>
      </Routes>
    </motion.div>
  )
}
