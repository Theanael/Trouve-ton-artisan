import CraftsmanCard from './components/CraftsmanCard'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  // Temp Static Categories
  const categories=[
    {id:1,name:'Alimentation'},
    {id:2,name:'Bâtiment'},
    {id:3,name:'Fabrication'},
    {id:4,name:'Service'},

    ]
  const craftsmen=[
    {
      name:"Au pain chaud",
      speciality:'Boulanger',
      localisation:'Montelimar',
      note:4.8
    },
    {
      name:"Chocolaterie Labbe",
      speciality:'Chocolatier',
      localisation:'Lyon',
      note:4.9
    },
    {
      name:"Orville Salmons",
      speciality:'Chauffagiste',
      localisation:'Evian',
      note:5.0
    },
  ]
  
  return (
    <>
      <Header categories={categories} />
      <main >
        <section className='py-2 border-bottom border-3 border-secondary'>
          <h2 className='h1 fw-bold  text-secondary'>Comment trouver mon artisan ?</h2>
          <ol>
            <h3 className='h4'>
              <li>Choisir la categorie d’artisanat dans le menu</li>
            </h3>
            <div>Selectionnez la categorie correspondant au metier que vous recherchez.</div>
          <h3 className='h4'>
            <li>Choisir un artisan</li>
            </h3>
            <div>Consultez les artisans disponibles et choisissez celui qui correspond à vos besoins.</div>
          <h3 className='h4'>
            <li>Contacter l’artisan choisi via le formulaire de contact</li>
          </h3>
            <div>Envoyez votre demande directement à l'artisan grace au formulaire de contact.</div>
          <h3 className='h4'>
            <li>Une reponse sera apportee sous 48h.</li>
          </h3>
            <div>L'artisan recevra votre demande et pourra vous repondre directement.</div>
          </ol>
        </section>
        <section className='py-3'>
          <h2 className='h1 fw-bold text-secondary pb-2'>Artisans du Mois</h2>
          <div className='d-flex flex-wrap justify-content-center gap-3'>
            <CraftsmanCard craftsman={craftsmen[0]}/>
            <CraftsmanCard craftsman={craftsmen[1]}/>
            <CraftsmanCard craftsman={craftsmen[2]}/>
          </div>
            
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App

