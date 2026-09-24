import CraftsmanCard from './components/CraftsmanCard'
import Header from './components/Header'

function App() {

  // Temp Static Categories
  const categories=[
    {id:1,name:'Alimentation'},
    {id:2,name:'Bâtiment'},
    {id:3,name:'Fabrication'},
    {id:4,name:'Service'}
    ]


  return (
    <>
    <Header categories={categories} />

    </>
  )
}

export default App

