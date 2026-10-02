import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'

function App() {

  const [categories,setCategories] =  useState([])

  useEffect(() => {
    fetch('http://localhost:3000/category')
    .then(response => response.json())
    .then((data) => {
      setCategories(data)
    })
  },[])
  
  return (
    <>
      <Header categories={categories} />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App

