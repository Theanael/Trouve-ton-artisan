import { useState, useEffect } from 'react'
import CraftsmanCard from '../components/CraftsmanCard'


const apiUrl = import.meta.env.VITE_API_URL;

function Home() {

  const [craftsmen,setCraftsmen] = useState([])
  
  useEffect(() => {
    fetch(apiUrl+'/craftsman/top')
      .then(response => response.json())
      .then((data) => {
        setCraftsmen(data)
      })

  },[]);
  return (
    <>
      <section className='py-2 border-bottom border-3 border-secondary'>
        <h2 className='h1 fw-bold  text-secondary'>Comment trouver mon artisan ?</h2>
        <ol>
          <h3 className='h4'>
            <li>Choisir la categorie d’artisanat dans le menu</li>
          </h3>
          <div>Sélectionnez la catégorie correspondant au métier que vous recherchez.</div>
        <h3 className='h4'>
          <li>Choisir un artisan</li>
          </h3>
          <div>Consultez les artisans disponibles et choisissez celui qui correspond à vos besoins.</div>
        <h3 className='h4'>
          <li>Contacter l’artisan choisi via le formulaire de contact</li>
        </h3>
          <div>Envoyez votre demande directement à l'artisan grâce au formulaire de contact.</div>
        <h3 className='h4'>
          <li>Une réponse sera apportée sous 48h.</li>
        </h3>
          <div>L'artisan recevra votre demande et pourra vous repondre directement.</div>
        </ol>
      </section>
      <section className='py-3'>
        <h2 className='h1 fw-bold text-secondary pb-2'>Artisans du Mois</h2>
        <div className='d-flex flex-wrap justify-content-center gap-3'>
          {craftsmen.map((craftsman) => {
                  return (<CraftsmanCard craftsman={craftsman} key={craftsman.id}/>)
          })}
        </div>
          
      </section>
    </>
  )
}

export default Home

