import React from 'react'

export const ButtonRecipe = ({ onClick, title }) => {
  return (
    <button className='text-center mx-1 my-5 md:m-10 xl:m-15 text-xs md:text-base xl:text-lg rounded-xl shadow-nav hover:shadow-image active:shadow-active bg-[#DD4124] text-white hover:bg-white hover:text-black hover:opacity-60 active:scale-[0.9] w-24 h-10 md:w-28 md:h-14 font-extrabold' onClick={ onClick }>{ title }</button>
  )
}
