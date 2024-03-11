import { Button, Container, Table, Form, Row, Col } from "react-bootstrap";
import { urlBase } from "../utilitarios/definicoes";



export default function TabelaProfessores(props) {
    //const [professores, setProfessores] = useState(props.listaProfessores)   

    //function excluirProfessor(cpf) {
    // const listaAtualizada = props.listaProfessores
    //.filter((professor) => professor.cpf !== cpf);
    // props.setProfessores(listaAtualizada);

    // }

    function filtrarProfessores(e) {
        const termoBusca = e.currentTarget.value;

        fetch(urlBase + "/professores", { method: "GET" })
            .then((resposta) => {
                return resposta.json()
            })
            .then((listaProfessores) => {
                if (Array.isArray(listaProfessores)) {
                    const resultadoBusca = listaProfessores.filter((professor) => professor.nome.toLowerCase().includes(termoBusca.toLowerCase()));
                    props.setProfessores(resultadoBusca);
                }
            })

    }

    return (
        <Container className="m-3">
            <Button onClick={() => { props.exibirTabela(false) }}>
                Cadastrar
            </Button>
            <Container className="m-3">
                <Row>
                    <Col md-11>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome do professor"
                            id="termoBusca"
                            onChange={filtrarProfessores}
                        />
                    </Col>
                    <Col md-1>
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-search"
                                viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </Button>
                    </Col>
                </Row>

            </Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Graduação</th>
                        <th>Departamento</th>
                        <th>Especialidade</th>
                        <th>Ano Grad.</th>
                        <th>Data Nasc.</th>
                        <th>Endereço</th>
                        <th>Cidade</th>
                        <th>Bairro</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaProfessores?.map((professor) => {
                            return <tr key={professor.cpf}>
                                <td>{professor.cpf}</td>
                                <td>{professor.nome}</td>
                                <td>{professor.graduacao}</td>
                                <td>{professor.departamento}</td>
                                <td>{professor.especialidade}</td>
                                <td>{professor.anograduacao}</td>
                                <td>{professor.datanascimento}</td>
                                <td>{professor.endereco}</td>
                                <td>{professor.cidade}</td>
                                <td>{professor.bairro}</td>
                                <td>{professor.telefone}</td>
                                <td>{professor.email}</td>
                                <td>
                                    <Button onClick={() => {
                                        if (window.confirm("Deseja editar o professor?")) {
                                            props.editarProfessor(professor)
                                        }
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-pencil"
                                            viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                        </svg>
                                    </Button>{' '}
                                    <Button onClick={() => {
                                        if (window.confirm("Deseja excluir o professor?")) {
                                            props.excluirProfessor(professor)
                                        }
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-trash3"
                                            viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                    </Button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}