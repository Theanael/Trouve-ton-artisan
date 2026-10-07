import { useEffect, useState } from 'react';

import FormToast from './FormToast';
import FormElement from './FormElement';

function CraftsmanForm() {

  const [formData,setFormData]=useState({name:"",email:"",topic:"",message:""})
  const [messages,setMessages]=useState([])
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
        
    })
  };


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        console.log(formData)
        const newMessages=[]

        
        // si le champs nom est vide on renvoie une erreur
        if(!formData.name){
            newMessages.push({type:"error",message:"le Nom ne peut pas être vide."})
        }

        
        // si l'email est vide on renvoie une erreur (le format est géré nativement par le type="email")
        if(!formData.email){
            newMessages.push({type:"error",message:"l'Email ne peut pas être vide."})
        }

        // si l'objet est vide on renvoie une erreur
        if(!formData.topic){
            newMessages.push({type:"error",message:"l'Objet ne peut pas être vide."})
        }

        // si le message est vide on renvoie une erreur
        if(!formData.message){
            newMessages.push({type:"error",message:"le Message ne peut pas être vide."})
        }
        
        if (newMessages.length==0){
            // ajouter l'appel API pour envoyer le message ici.
            newMessages.push({type:"success",message:"Message envoyé avec succès ! vous serez recontacté sous 48h."})

        }
        
        await setMessages([]); // pour s'assure qu'on réaffiche tout même si les messages sont identiques.
        setMessages(newMessages);

    };

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className='h2 fw-medium  text-secondary gap-10'>Contacter cet artisan</h2>
        <p>Une question, une demande de prestation ou de tarif ? Contactez directement cet artisan</p>
        
        <FormElement name="name" label="Nom" required={true} onChange={handleChange} type="text"/>
        <FormElement name="email" label="Email" required={true} onChange={handleChange} type="email"/>
        <FormElement name="topic" label="Objet" required={true} onChange={handleChange} type="text"/>
        <FormElement name="message" label="Message" required={true} onChange={handleChange} type="textarea"/>
        <div className='d-flex flex-column gap-2'>
            {messages.map((message,index)=>{
                let title,color
                switch (message.type) {
                    case "error":
                        title="Erreur";
                        color="danger";
                        break;
                    case "success":
                        title="Suucès";
                        color="success";
                        break;
                }
                return(<FormToast key={index} color={color} title={title} message={message.message}/>
            )})}
        </div>
        <div className='d-flex justify-content-center p-2'>
          <input className="btn btn-primary rounded-pill" type="submit" value="Envoyer" />
        </div>
      </form>
    </>
  )
}

export default CraftsmanForm
