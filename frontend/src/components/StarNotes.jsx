
function StarNotes(props) {
    const note=props.note
    const stars=[1,2,3,4,5].map((i)=>{
        const starClass=(i<=note 
            ? 'bi bi-star-fill' 
            :(
                i-.5<= note 
                ? 'bi bi-star-half' 
                : 'bi bi-star'
        ));
        return ( <i className={starClass} key={i}></i>)
    }


)

  return (
    <div className="text-success d-flex gap-1 fs-5">
        {stars} <span className="fw-medium">{note}</span>
    </div>
  )
}

export default StarNotes
