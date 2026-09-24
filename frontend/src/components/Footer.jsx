import './Footer.scss'

function Footer() {
    
  return (
    <footer className="d-flex text-bg-primary gap-2  flex-column flex-lg-row">
        <section>
            
            <div className="d-flex flex-column gap-1 separator">
                <div className="fw-bold">
                    Conseil regional Auvergne-Rhone-Alpes Antenne de Lyon
                </div>
                <div >101 cours Charlemagne</div>
                <div >CS 20033</div>
                <div >69269 LYON CEDEX 02</div>
                <div>France</div>
                <div className="d-flex align-items-center">
                    <i class="bi bi-telephone fs-3"></i>
                    +33 (0)4 26 73 40 00
                </div>
            </div>
            
        </section>
        <section className="d-flex flex-wrap gap-3 justify-content-center py-3 flex-lg-column">
            <a className="text-white" href="">Mentions legales</a>
            <a className="text-white" href="">Donnees personnelles</a>
            <a className="text-white" href="">Accessibilite : partiellement conforme</a>
            <a className="text-white" href="">Politique des cookies</a>
            <a className="text-white" href="">Gestion des cookies</a>
        </section>
    </footer>
  )
}

export default Footer
