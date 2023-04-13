import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchRecipesCal } from '../service/SearchRecipesCal'
import { ResearchPageCal } from './ResearchPageCal'

export const Calories = () => {
  return (
    <div>
      <ResearchPageCal />
      <Routes>
        <Route path='/search/:type' element={ <SearchRecipesCal /> }/>
      </Routes>
    </div>
  )
}
