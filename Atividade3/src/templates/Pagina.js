import { Container } from "react-bootstrap";
import { Cabecalho } from "./Cabecalho";
import Menu from "./Menu";

export default function Pagina(props) {
    return (
        <>
            <Cabecalho texto="Escola Estadual Francisco Baldoino de Souza - Chiquinho" />
            <Menu />
            <Container>
                {props.children}
            </Container>
        </>
    );
}