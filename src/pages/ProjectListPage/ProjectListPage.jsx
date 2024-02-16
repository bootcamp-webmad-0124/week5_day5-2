import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const ProjectListPage = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => loadProjects(), [])

    const loadProjects = () => {
        axios
            .get(`${API_URL}/projects?_embed=tasks`)
            .then(({ data }) => setProjects(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="ProjectListPage">

            <h1>Proyectos</h1>
            <hr />

            {
                projects.map((project) => {
                    return (
                        <div className="ProjectCard card" key={project.id} >
                            <Link to={`/proyectos/${project.id}`}>
                                <h3>{project.title}</h3>
                                {
                                    project.tasks.map(task => <p>- {task.description}</p>)
                                }
                            </Link>
                        </div>
                    );
                })
            }

        </div>
    )
}


export default ProjectListPage