import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavButton = ({ onClick, icon, title }) => {
  return (
    <NavLink className='flex flex-col-reverse items-center justify-center rounded-2xl font-bold m-2 md:m-6 shadow-nav w-20 h-20 md:w-28 md:h-28 hover:shadow-image active:shadow-active bg-[#DD4124] text-white hover:bg-white hover:text-black hover:opacity-60 active:scale-[0.9]' onClick={ onClick }>
      { icon }
      <h3 className='text-center text-base md:text-lg xl:text-xl'>{ title }</h3>
    </NavLink>
  )
}
