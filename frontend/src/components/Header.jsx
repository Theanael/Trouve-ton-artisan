
function Header(props) {
    const categories=props.categories ??['Alimentation','Batiment','Fabrication','Service']

  return (
    <header>
        <nav className="navbar navbar-expand-lg shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="src/assets/images/Logo.png" alt="Bootstrap" height="94"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li><h2 className="h3 d-lg-none text-secondary">Categories</h2></li>
                    {categories.map((category) => (
                        <li className="nav-link" key={category.id}>
                            <a className="nav-link fw-medium fs-5 p-0">{category.name}</a>
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
