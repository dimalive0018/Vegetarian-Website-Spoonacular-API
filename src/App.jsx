import { Research } from "./view/Research"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RecipePage } from "./view/RecipePage"
import { RandomRecipes } from "./service/RandomRecipes"
import { store } from './service/store'
import { Provider } from 'react-redux'
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <Provider store={store}>
    <AnimatePresence mode="wait">
    <BrowserRouter location={location} key={location.pathname}>
      <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
      >
      <Research />
      <Routes>
        <Route path='/' element={ <RandomRecipes /> }/>
        <Route path='/recipes/:id' element= { <RecipePage /> }/>
      </Routes>
      </motion.div>
    </BrowserRouter>
    </AnimatePresence>
    </Provider>
  )
}

export default App
