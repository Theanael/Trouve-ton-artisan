import { useEffect, useState } from 'react';

import StarNotes from '../components/StarNotes';
import FormElement from '../components/FormElement';

import slugify from '../utils/slugify';

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
    <div className="d-flex gap-3 justify-content-center">
      <span className="h5 fw-bold text-secondary text-nowrap text-end">Site</span>
      <span className="w-100"><a href={craftsman.website}>{craftsman.website}</a></span>
    </div>;
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
      
      <div className="d-flex gap-3 justify-content-center">
          <span className="h5 fw-bold text-secondary w-25 text-end">Specialite</span>
          <span className="w-100">{craftsman.Speciality.name}</span>
      </div>
      <div className="d-flex gap-3 justify-content-center">
          <span className="h5 fw-bold text-secondary w-25 text-end">Localisation</span>
          <span className="w-100">{craftsman.City.name}</span>
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
        <h2 className='h2 fw-medium  text-secondary gap-10'>Contacter cet artisan</h2>
        <p>Une question, une demande de prestation ou de tarif ? Contactez directement cet artisan</p>
        <FormElement name="name" label="Nom" required={true} type="text"/>
        <FormElement name="email" label="Email" required={true} type="email"/>
        <FormElement name="topic" label="Objet" required={true} type="text"/>
        <FormElement name="message" label="Message" required={true} type="textarea"/>
        <div className='d-flex justify-content-center p-2'>
          <input className="btn btn-primary rounded-pill" type="submit" value="Envoyer" />
        </div>
      </section>
      
      
    </>
  )
}

export default CraftsmanPage
