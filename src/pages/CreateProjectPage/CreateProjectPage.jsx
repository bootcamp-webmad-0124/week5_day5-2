import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

const API_BASE_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const CreateProjectPage = () => {

    const [projectData, setProjectData] = useState({
        title: '',
        description: ''
    })

    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/projects`, projectData)
            .then(() => navigate('/proyectos'))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setProjectData({ ...projectData, [name]: value })
    }


    return (
        <div className="CreateProjectPage">

            <Container>


                <Row>

                    <Col md={{ span: 6, offset: 3 }}>

                        <h3>Nuevo proyecto</h3>

                        <hr />

                        <Form className="mt-5" onSubmit={handleFormSubmit}>

                            <Row>

                                <Col>
                                    <Form.Group className="mb-3" controlId="title">
                                        <Form.Label>Título del proyecto</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={projectData.title}
                                            onChange={handleInputChange}
                                            name={'title'}
                                        />
                                        <Form.Text className="text-muted">No incluyas detalles</Form.Text>
                                    </Form.Group>
                                </Col>

                                <Col>

                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Label>Descripción del proyecto</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={projectData.description}
                                            onChange={handleInputChange}
                                            name={'description'}
                                        />
                                    </Form.Group>

                                </Col>

                            </Row>

                            <div className="d-grid">
                                <Button variant="dark" type="submit">Crear proyecto</Button>
                            </div>
                        </Form>

                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default CreateProjectPage;
