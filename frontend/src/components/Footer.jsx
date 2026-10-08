import { Link } from 'react-router'

function Footer() {
    
  return (
    <footer className="d-flex py-2 text-bg-primary gap-2  flex-column flex-lg-row">
        <section>
            
            <div className="d-flex flex-column gap-1">
                <div className="fw-bold">
                    Conseil régional Auvergne-Rhône-Alpes Antenne de Lyon
                </div>
                <div >101 cours Charlemagne</div>
                <div >CS 20033</div>
                <div >69269 LYON CEDEX 02</div>
                <div>France</div>
                <div className="d-flex align-items-center">
                    <i className="bi bi-telephone fs-3"></i>
                    <a className='text-white text-decoration-none fw-medium' href="tel:+33 (0)4 26 73 40 00">+33 (0)4 26 73 40 00</a>
                </div>
            </div>
        </section>
        <hr className='d-lg-none border border-white border-2 opacity-100'/>
        <div className='d-none d-lg-block vr border border-white border-2 opacity-100 '></div>
        <section className="d-flex flex-wrap gap-3 justify-content-center py-3 flex-lg-column">
            <Link to="/mentions-legales" className="text-white" >Mentions légales</Link>
            <Link to="/donnees-personnelles" className="text-white">Données personnelles</Link>
            <Link to="/declaration-daccessibilite" className="text-white">Accessibilité : partiellement conforme</Link>
            <Link to="/politique-des-cookies" className="text-white">Politique des cookies</Link>
            <Link to="/gestion-des-cookies" className="text-white">Gestion des cookies</Link>
        </section>
    </footer>
  )
}

export default Footer
