import React from 'react'

export const LoadMoreButton = ({ onClick }) => {
  return (
    <div className='flex justify-center m-10'>
          <button className='text-center text-xs md:text-base xl:text-lg rounded-xl shadow-image hover:shadow-image active:shadow-active bg-[#DD4124] text-white hover:bg-white hover:text-black hover:opacity-60 active:scale-[0.9] w-20 h-10 md:w-28 md:h-14 xl:h-16 xl:w-32 font-extrabold' onClick={onClick}>Load More</button>
    </div>
  )
}
