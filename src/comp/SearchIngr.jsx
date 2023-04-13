import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchRecipesIngr } from '../service/SearchRecipesIngr'
import { ResearchPageIngr } from './ResearchPageIngr'

export const Ingredients = () => {
  return (
    <div>
      <ResearchPageIngr />
      <Routes>
        <Route path='/search/:type' element={ <SearchRecipesIngr /> }/>
      </Routes>
    </div>
  )
}
