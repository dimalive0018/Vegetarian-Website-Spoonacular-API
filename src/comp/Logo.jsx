import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/Brocòlelogo.gif'

export const Logo = ({ onClick }) => {
  return (
    <Link to={'/'} onClick={ onClick }>
        <img className='h-28 md:h-32 xl:h-36' src={image} alt="" /> 
    </Link>
  )
}
