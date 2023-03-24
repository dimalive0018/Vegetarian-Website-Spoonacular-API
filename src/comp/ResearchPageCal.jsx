import React, { useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

export const ResearchPageCal = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate('/search/' + search)
  }

  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      className='flex justify-center items-center w-full h-48 md:h-60 xl:h-72'
    >
      <form onSubmit={submit}>
        <div className='flex items-center'>
          <input className='h-8 md:h-10 xl:h-12 w-42 md:w-64 xl:w-96 text-center border-2 md:border-4 border-[#608E43] rounded-l-xl rounded-tr-xl shadow-searchBar hover:opacity-90 active:scale-[0.95]' placeholder='Maximum calories' onChange={(event) => setSearch(event.target.value)} type="number" value={search} />
          <button className='bg-[#608E43] flex justify-center items-center w-5 md:w-7 xl:w-8 h-5 md:h-7 xl:h-8 m-2 rounded-full shadow-searchBar border-0 md:border-2 border-black hover:bg-white hover:opacity-90 hover:border-0 active:scale-[0.95]' onClick={submit}><FcSearch /></button>
        </div>
      </form>
    </motion.div>
  )
}
