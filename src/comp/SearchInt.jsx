import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchRecipesInt } from '../service/SearchRecipesInt'
import { ResearchPageInt } from './ResearchPageInt'
import { motion } from "framer-motion"

export const Intolerances = () => {
  return (
    <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
      <ResearchPageInt />
      <Routes>
        <Route path='/search/:type' element={ <SearchRecipesInt /> }/>
      </Routes>
    </motion.div>
  )
}
