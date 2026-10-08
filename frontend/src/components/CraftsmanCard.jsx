import slugify from "../utils/slugify"
import StarNotes from "./StarNotes"

import { Link } from "react-router"

function CraftsmanCard(props) {
    const craftsman=props.craftsman
  return (
    <div className="card rounded-5 bg-light border-0" style={{width:300, height:250}}>
        <div className="card-header rounded-top-5 text-center align-content-center text-bg-primary" style={{height:82}}>
         <h3 className="mb-0 ">
            <Link
                to={'/craftsman/' + slugify(craftsman.name)}
                className="text-white text-decoration-none"
            >
                {craftsman.name}
            </Link>
        </h3>
        </div>
        <div className="card-body py-1 d-flex justify-content-around flex-column gap-1">
          <StarNotes note={craftsman.note}/>
            <div className="d-flex gap-3 justify-content-center flex-shrink-1">
              <span className="h5 fw-bold text-secondary w-50 text-end">Spécialité</span>
              <span className="w-50">{craftsman.speciality.name}</span>
            </div>
            <div className="d-flex gap-3 justify-content-center flex-shrink-1">
              <span className="h5 fw-bold text-secondary w-50 text-end">Localisation</span>
              <span className="w-50">{craftsman.city.name}</span>
            </div>
            <div className="text-center align-text-bottom">
              <Link to={'/craftsman/'+slugify(craftsman.name)} 
              className="btn btn-primary rounded-pill">
                En savoir plus
              </Link>
              
            </div>
        </div>
        
    </div>
  )
}

export default CraftsmanCard
