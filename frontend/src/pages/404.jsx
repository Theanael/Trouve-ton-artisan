function Error404() {


  return (
    <>
    <div className="p-3">
        <h2 className="h1 fw-medium text-secondary">Erreur 404</h2>
        <p className="fs-5">
            Cette page n'existe pas ! Elle n'a jamais franchi la 
            ligne d'arrivée.
        </p>
        <img
            src="https://www.auvergnerhonealpes.fr/sites/default/files/styles/480w/public/2024-12/ERREUR%20404-VISU.jpg?itok=RpxXXFKC"
            className="img-fluid w-100"
            alt=""
        />
    </div>
           
    </>
  )
}

export default Error404