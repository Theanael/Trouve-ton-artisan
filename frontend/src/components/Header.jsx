import { Link } from "react-router"
import slugify from '../utils/slugify'
import logo from "../assets/images/Logo.png"

function Header(props) {
    const categories=props.categories ?? []

  return (
    <header>
        <nav className="navbar navbar-expand-lg shadow-sm">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    <img src={logo} alt="Bootstrap" height="94"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li><h2 className="h3 d-lg-none text-secondary">Catégories</h2></li>
                    {categories.map((category) => (
                        <li className="nav-link" key={category.id}>
                            <Link to={"/category/"+slugify(category.name)} className="nav-link fw-medium fs-5 p-0">{category.name}</Link>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}


export default Header
