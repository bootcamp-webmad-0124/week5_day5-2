import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"

const API_BASE_URL = "https://project-management-api-4641927fee65.herokuapp.com"


const ProjectDetailsPage = () => {

    const [project, setProject] = useState()
    const { projectId } = useParams()

    const navigate = useNavigate()

    useEffect(() => loadProjectDetails(), [])

    const loadProjectDetails = () => {
        axios
            .get(`${API_BASE_URL}/projects/${projectId}?_embed=tasks`)
            .then(({ data }) => setProject(data))
            .catch(err => console.log(err))
    }

    const deleteProject = () => {

        axios
            .delete(`${API_BASE_URL}/projects/${projectId}`)
            .then(() => navigate('/proyectos'))
            .catch(err => console.log(err))
    }

    return (
        <div className="ProjectDetailsPage">

            {
                project &&
                <>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </>
            }

            {
                project &&
                project.tasks.map((task) => (
                    <li className="TaskCard card" key={task.id}>
                        <h3>{task.title}</h3>
                        <h4>Detalles:</h4>
                        <p>{task.description}</p>
                    </li>
                ))
            }

            <Link to="/proyectos">
                <button>Volver a los proyectos</button>
            </Link>

            <Link to={`/proyectos/editar/${projectId}`}>
                <button>Editar proyecto</button>
            </Link>

            <button onClick={deleteProject}>Eliminar proyecto</button>

        </div>
    );
}

export default ProjectDetailsPage