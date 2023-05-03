import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <header>
        <nav class="navbar bg-wite navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a className={router.pathname == "/" ? "nav-link active" : "nav-link"} aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a className={router.pathname == "/about" ? "nav-link active" : "nav-link"} aria-current="page" href="/about">About</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Movies
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/popular">Popular</a></li>
                        <li><a class="dropdown-item" href="/now_playing">Now Playing</a></li>
                       
                    </ul>
                    </li>

                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </header>
        
    )
}

export default Navbar;