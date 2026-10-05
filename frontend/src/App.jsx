import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ListByCategory from './pages/ListByCategory'
import CraftsmanPage from './pages/Craftsman'
import WIP from './pages/WIP'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'

import slugify from './utils/slugify'

function App() {

  const [categories,setCategories] =  useState([])
  const [craftsmen,setCraftsmen] =  useState([])

  useEffect(() => {
    fetch('http://localhost:3000/category')
    .then(response => response.json())
    .then((data) => {
      setCategories(data)
    })

    fetch('http://localhost:3000/craftsman')
    .then(response => response.json())
    .then((data) => {
      setCraftsmen(data)
    })
  },[])


  
  return (
    <>
      <Header categories={categories} />
      <Routes>
        <Route path='/' element={<Home />}/>
        {categories.map(category => {
          return (
            <Route 
              path={'/category/'+slugify(category.name)} 
              element={<ListByCategory  category={category}/>}
            />
        )
        })}
        {craftsmen.map(craftsman => {
          return (
            <Route 
            path={'/craftsman/'+slugify(craftsman.name)}
            element={<CraftsmanPage  craftsman={craftsman}/>}
            />
          )
        }

        )}

        <Route path='/mentions-legales' element={<WIP/>}/>
        <Route path='/donnees-personnelles' element={<WIP/>}/>
        <Route path='/declaration-daccessibilite' element={<WIP/>}/>
        <Route path='/politique-des-cookies' element={<WIP/>}/>
        <Route path='/gestion-des-cookies' element={<WIP/>}/>
        
      </Routes>
      <Footer />
    </>
  )
}

export default App

