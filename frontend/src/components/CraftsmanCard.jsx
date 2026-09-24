import StarNotes from "./StarNotes"

function CraftsmanCard(props) {
    const craftsman=props.craftsman
  return (
    <div className="card rounded-5 bg-light border-0" style={{width:300, height:250}}>
        <div className="card-header rounded-top-5 text-center text-bg-primary">
          <h3>{craftsman.name}</h3>
        </div>
        <div className="card-body py-1 d-flex justify-content-around flex-column gap-2">
          <StarNotes note={craftsman.note}/>
            <div className="d-flex gap-3 justify-content-center">
              <span className="h5 fw-bold text-secondary w-50 text-end">Specialite</span>
              <span className="w-50">{craftsman.speciality}</span>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <span className="h5 fw-bold text-secondary w-50 text-end">Localisation</span>
              <span className="w-50">{craftsman.localisation}</span>
            </div>
            <div className="text-center">
              <a className="btn btn-primary rounded-pill">
                En savoir plus
              </a>
              
            </div>
        </div>
        
    </div>
  )
}

export default CraftsmanCard
