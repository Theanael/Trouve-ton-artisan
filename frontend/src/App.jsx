import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'

function App() {

  // Temp Static Categories
  const categories=[
    {id:1,name:'Alimentation'},
    {id:2,name:'Batiment'},
    {id:3,name:'Fabrication'},
    {id:4,name:'Service'},
    ]
  
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

