
function StarNotes(props) {
    const note=props.note
    const stars=[1,2,3,4,5].map((i)=>(
        i<=note
            ? <i class="bi bi-star-fill"></i>
            : (i-.5<= note
                ? <i class="bi bi-star-half"></i>
                : <i class="bi bi-star"></i>
            )
    ))

  return (
    <div className="text-success d-flex gap-1 fs-5">
        {stars} <span className="fw-medium">{note}</span>
    </div>
  )
}

export default StarNotes
