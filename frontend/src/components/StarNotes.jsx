
function StarNotes(props) {
    const note=props.note;
    // pour chaque étoile...
    const stars=[1,2,3,4,5].map((i)=>{
        const starClass=(
            i<=note 
            // si le numéro de l'étoile est inférieur à la note : étoile pleine
            ? 'bi bi-star-fill' 
            :(
                i-.5<= note 
                // si la note est moins de 0.5 sous le numéro de l'étoile : demi étoile
                ? 'bi bi-star-half' 
                //sinon : étoile vide
                : 'bi bi-star'
        ));
        return ( <i className={starClass} key={i}></i>);
    }


)

  return (
    <div className="text-success d-flex gap-1 fs-5">
        {stars} <span className="fw-medium">{note}</span>
    </div>
  );
};

export default StarNotes;
