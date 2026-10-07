import { useEffect, useState } from 'react';

import StarNotes from '../components/StarNotes';

import slugify from '../utils/slugify';
import CraftsmanForm from '../components/CraftsmanForm';

function CraftsmanPage(props) {

  const id=props.craftsman.id
  const [craftsman, setCraftsman] = useState({name:"",Speciality:{},City:{}});
  
  useEffect(() => {
    fetch('http://localhost:3000/craftsman/'+id)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCraftsman(data);
        });
  }, [id]);

  let siteLine;

  if (craftsman.website){
    siteLine=
      <div className="row g-2">
          <span className="col-2 h5 fw-bold text-secondary text-end mb-0">
              Site
          </span>
          <span className="col-10">
              <a className='text-break'
              href={craftsman.website}>{craftsman.website}</a>
          </span>
      </div>
  }
    

  return (
    <>
      <section>
      <h2 className='h1 fw-medium text-primary'>{craftsman.name}</h2>
      <StarNotes note={craftsman.note}/>
      <img
        src={'/src/assets/images/craftsman/'+slugify(craftsman.name)+'.jpg'}
        className=" w-100 img-fluid object-fit-contain bg-light my-3"
        alt=""
        style={{height:"40vh"}}
        onError={(error) => { //Si l'image n'existe pas, on utilise l'image par défaut
          error.currentTarget.onerror=null
          error.currentTarget.src="/src/assets/images/placeholder.jpg"
          console.log("Test ",error.currentTarget)
        }}  
      />
      
<div className="row g-2">
    <span className="col-5 col-sm-2 h5 fw-bold text-secondary text-end mb-0">
        Spécialité
    </span>
    <span className="col-7 col-sm-10">
        {craftsman.Speciality.name}
    </span>

    <span className="col-5 col-sm-2 h5 fw-bold text-secondary text-end mb-0">
        Localisation
    </span>
    <span className="col-7 col-sm-10">
        {craftsman.City.name}
    </span>
</div>

      

      </section>
      
      <hr className='border border-2 border-secondary opacity-100' />
      
      <section>
      <h2 className='h2 fw-medium  text-secondary'>A Propos</h2>
      <p>{craftsman.description}</p>
      {siteLine}
      </section>

      <hr className='border border-2 border-secondary opacity-100' />
      
      <section>
        <CraftsmanForm />
      </section>
      
      
    </>
  )
}

export default CraftsmanPage
