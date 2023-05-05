import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <header>
        <nav className="navbar bg-wite navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className={router.pathname == "/" ? "nav-link active" : "nav-link"} aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className={router.pathname == "/product" ? "nav-link active" : "nav-link"} aria-current="page" href="/product">Products</a>
                    </li>
                    <li className="nav-item">
                    <a className={router.pathname == "/about" ? "nav-link active" : "nav-link"} aria-current="page" href="/about">About</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Movies
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/popular">Popular</a></li>
                        <li><a className="dropdown-item" href="/now_playing">Now Playing</a></li>
                       
                    </ul>
                    </li>

                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </header>
        
    )
}

export default Navbar;