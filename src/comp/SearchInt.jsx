import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchRecipesInt } from '../service/SearchRecipesInt'
import { ResearchPageInt } from './ResearchPageInt'

export const Intolerances = () => {
  return (
    <div>
      <ResearchPageInt />
      <Routes>
        <Route path='/search/:type' element={ <SearchRecipesInt /> }/>
      </Routes>
    </div>
  )
}
