import { Research } from "./view/Research"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RecipePage } from "./view/RecipePage"
import { RandomRecipes } from "./service/RandomRecipes"
import { store } from './service/StoreRedux'
import { Provider } from 'react-redux'
import { HelmetProvider } from "react-helmet-async"

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
    <Provider store={store}>
      <BrowserRouter>
        <Research />
        <Routes>
          <Route path='/' element={ <RandomRecipes /> }/>
          <Route path='/recipes/:id' element= { <RecipePage /> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </HelmetProvider>
  )
}

export default App
