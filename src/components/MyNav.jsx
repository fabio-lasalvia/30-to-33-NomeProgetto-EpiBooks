import {
    Navbar,
    Nav,
    Container,
    Dropdown,
    InputGroup,
    Form,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNav() {
    return (
        <Navbar bg="dark" variant="dark" expand="md" className="py-2">
            <Container fluid className="align-items-center">

                {/* SINISTRA: LOGO */}
                <div className="order-0">
                    <Navbar.Brand as={Link} to="/home">
                        <img src="/img/logo/logoEpiBooks0.png" alt="Logo Epi Books" className="rounded" style={{maxWidth: '100px'}}/>
                    </Navbar.Brand>
                </div>

                {/* Link da md in su */}
                <div className="d-none d-md-flex order-1 ms-3">
                    <Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
                    </Nav>
                </div>

                {/* DESTRA: SEARCHBAR + PROFILO + HAMBURGER */}
                <div className="ms-auto d-flex align-items-center gap-2 order-2">
                    {/* SEARCHBAR */}
                    <Form className="d-flex" role="search">
                        <InputGroup size="sm">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">
                                <i className="bi bi-search"></i>
                            </Button>
                        </InputGroup>
                    </Form>

                    {/* PROFILO */}
                    <Dropdown align="end">
                        <Dropdown.Toggle
                            variant="secondary"
                            id="dropdown-user"
                            className="d-flex align-items-center rounded btn btn-sm"
                        >
                            <i className="bi bi-person-circle fs-5"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Profilo</Dropdown.Item>
                            <Dropdown.Item>Toggle Tema</Dropdown.Item>
                            <Dropdown.Item>Impostazioni</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-danger">Esci</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* HAMBURGER */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-md-none" />
                </div>
            </Container>

            {/* Link per mobile */}
            <div className="d-md-none">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="px-3">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

    );
}

export default MyNav;
