import React from 'react'
import { AnimatePresence, motion } from "framer-motion"

export const Title = () => {
  return (
    <AnimatePresence mode='wait'>
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      className='flex flex-col justify-center text-center w-full h-48 md:h-60 xl:h-72'
    >
      <h1 className='text-[#608E43] text-7xl md:text-8xl xl:text-9xl font-pacifico'>Brocòle</h1>
      <h2 className='text-xl md:text-2xl xl:text-3xl font-pacifico'>Vegetarian Recipes</h2>
    </motion.div>
    </AnimatePresence>
  )
}
