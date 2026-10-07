import { useEffect, useState } from 'react';

import CraftsmanCard from '../components/CraftsmanCard'

const apiUrl = import.meta.env.VITE_API_URL;

function ListByCat(props) {

  const category=props.category

    const [craftsmen, setCraftsmen] = useState([]);

    useEffect(() => {
        fetch(apiUrl+'/craftsman/category/'+category.id)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCraftsmen(data);
            });
    }, [category.id]);


  return (
    <>
      <h2 className='h1 fw-bold  text-secondary'>{category.name}</h2>
      <div className='d-flex flex-wrap justify-content-start align-content-start flex-grow-1
       gap-3 py-3'>
          {craftsmen.map((craftsman) => {
                  return (<CraftsmanCard craftsman={craftsman} />)
          })}
      </div>
    </>
  )
}

export default ListByCat

