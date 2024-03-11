import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Menu(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to='/'><Navbar.Brand>Menu</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
           
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <LinkContainer to="/cadastroProfessores"><NavDropdown.Item>Professores</NavDropdown.Item></LinkContainer>                     
                            <NavDropdown.Divider /> 
                            <LinkContainer to="/cadastroAlunos"><NavDropdown.Item>Alunos</NavDropdown.Item></LinkContainer> 
                            <NavDropdown.Divider /> 
                            <LinkContainer to="/funcionarios"><NavDropdown.Item>Funcionários</NavDropdown.Item></LinkContainer>   
                                                                        
                        </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#sair">Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}