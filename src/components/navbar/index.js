
import { Container, Navbar, Nav, NavItem, NavDropdown, ButtonGroup, Button, NavLink } from 'react-bootstrap';
import { useHistory, withRouter } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

function Topnav() {
    let history = useHistory();

    const routeThrough = (path) => {
        history.push(path);
    }

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" onClick={() => routeThrough('/repositories')}>Repositiories</Button>
                            <Button variant="secondary" onClick={() => routeThrough('/Developers')}>Developers</Button>
                        </ButtonGroup>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Langugae" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/">React JS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">HTML</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">JAVA</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Python</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default withRouter(Topnav);
