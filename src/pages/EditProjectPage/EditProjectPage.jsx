import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE_URL = "https://project-management-api-4641927fee65.herokuapp.com";

const EditProjectPage = () => {

    const [projectData, setProjectData] = useState({
        title: '',
        description: ''
    })

    const { projectId } = useParams()

    useEffect(() => loadProjectDetails(), [])

    const navigate = useNavigate()

    const loadProjectDetails = () => {

        axios
            .get(`${API_BASE_URL}/projects/${projectId}`)
            .then(({ data }) => setProjectData(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setProjectData({ ...projectData, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        axios
            .put(`${API_BASE_URL}/projects/${projectId}`, projectData)
            .then(() => navigate(`/proyectos/${projectId}`))
            .catch(err => console.log(err))
    }



    return (
        <div className="EditProjectPage">
            <h3>Editar proyecto {projectData.title}</h3>
            <hr />

            <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={projectData.title}
                    onChange={handleInputChange}
                />

                <label>Description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={projectData.description}
                    onChange={handleInputChange}
                />

                <button type="submit">Editar proyecto</button>
            </form>
        </div>
    );
}

export default EditProjectPage;
