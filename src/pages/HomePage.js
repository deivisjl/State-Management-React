import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import routes from "../helpers/routes"
export default function HomePage() {
    return (
        <Container>
            <Row className="mt-5" style={{align: 'justify-content-center'}}>
                <Col xs={{ span: 12 }} md={{ span:6 }} className="mb-5">
                    <h2>Bienvenido a Gestor de tareas</h2>
                    <p>!Aquí podrás gestionar tu proyectos</p>
                    <p>Marca tus tareas como terminadas, Agrega, Elimina o Actualiza</p>
                    <div>
                        <Link to={routes.login}>Ingresa</Link> o <Button as ={Link} to={routes.register} className="ms-1">Crea una cuenta</Button>
                    </div>
                </Col>
                
                <Col>
                    <img
                        className="img-fluid"
                        src="/img/task-manager.svg"
                        alt="gestor de tareas"
                        />
                        <p>!Gestiona tu tiempo, mejora tu proactividad</p>
                </Col>
            </Row>
        </Container>
    )
}
