import React, { useEffect, useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion"
import { useDispatch } from 'react-redux'
import { resetState, resetLoad } from '../service/StoreRedux'

export const ResearchPageInt = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handlerBar = (t) => {
    setSearch(t);
    dispatch(resetState());
    dispatch(resetLoad());
  }

  const submit = (e) => {
    e.preventDefault();
    navigate('/search/' + search);
    dispatch(resetState());
    dispatch(resetLoad());
  }

  useEffect(() => {
    navigate('/');
  }, [])

  return (
    <AnimatePresence mode='wait'>
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      className='flex justify-center items-center w-full h-48 md:h-60 xl:h-72'
    >
      <form onSubmit={submit}>
        <div className='flex items-center'>
          <input className='h-8 md:h-10 xl:h-12 w-42 md:w-64 xl:w-96 text-center border-2 md:border-4 border-[#608E43] rounded-l-xl rounded-tr-xl shadow-searchBar hover:opacity-90 active:scale-[0.95]' placeholder='Type of food intolerance' onChange={(event) => handlerBar(event.target.value)} type="text" value={search} />
          <button className='bg-[#608E43] flex justify-center items-center w-5 md:w-7 xl:w-8 h-5 md:h-7 xl:h-8 m-2 rounded-full shadow-searchBar border-0 md:border-2 border-black hover:bg-white hover:opacity-90 hover:border-0 active:scale-[0.95]' onClick={submit}><FcSearch /></button>
        </div>
      </form>
    </motion.div>
    </AnimatePresence>
  )
}