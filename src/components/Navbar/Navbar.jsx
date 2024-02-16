import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <Link to="/">
                <button>Inicio</button>
            </Link>

            <Link to="/proyectos">
                <button>Proyectos</button>
            </Link>

            <Link to="/nuevo-proyecto">
                <button>Crear proyecto</button>
            </Link>
        </nav>
    );
}

export default Navbar