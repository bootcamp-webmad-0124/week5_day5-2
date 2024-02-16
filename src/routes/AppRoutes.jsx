import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import ProjectListPage from "./pages/ProjectListPage/ProjectListPage.jsx"
import CreateProjectPage from "./pages/CreateProjectPage/CreateProjectPage.jsx"
import ProjectDetailsPage from "./pages/ProjectDetailsPage/ProjectDetailsPage.jsx"
import EditProjectPage from "./pages/EditProjectPage/EditProjectPage.jsx"

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/proyectos" element={<ProjectListPage />} />
            <Route path="/proyectos/:projectId" element={<ProjectDetailsPage />} />
            <Route path="/proyectos/editar/:projectId" element={<EditProjectPage />} />
            <Route path="/nuevo-proyecto" element={<CreateProjectPage />} />

            <Route path="*" element={<h1>404... D:</h1>} />

        </Routes>
    )
}

export default AppRoutes