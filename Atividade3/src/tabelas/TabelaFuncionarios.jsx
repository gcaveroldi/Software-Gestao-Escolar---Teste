import { Button, Container, Table, Form, Row, Col } from "react-bootstrap";
//import { urlBase } from "../utilitarios/definicoes";
import { urlBase1 } from "../utilitarios/definicoes";



export default function TabelaFuncionarios(props) {
   

    function filtrarFuncionarios(e) {
        const termoBusca = e.currentTarget.value;

        fetch(urlBase1 + "/Funcionario", { method: "GET" })
            .then((resposta) => {
                return resposta.json()
            })
            .then((listaFuncionarios) => {
                if (Array.isArray(listaFuncionarios)) {
                    const resultadoBusca = listaFuncionarios.filter((funcionario) => funcionario.nome.toLowerCase().includes(termoBusca.toLowerCase()));
                    props.setFuncionarios(resultadoBusca);
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
                            placeholder="Digite o nome do funcionario"
                            id="termoBusca"
                            onChange={filtrarFuncionarios}
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
                        <th>Endereço</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        
                        <th>Telefone</th>                        
                        <th>Setor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaFuncionarios?.map((funcionario) => {
                            return <tr key={funcionario.cpf}>
                                <td>{funcionario.cpf}</td>
                                <td>{funcionario.nome}</td>
                                <td>{funcionario.endereco}</td>
                                <td>{funcionario.bairro}</td>
                                <td>{funcionario.cidade}</td>
                                
                                <td>{funcionario.telefone}</td>                                
                                <td>{funcionario.setor}</td>
                                <td>
                                    <Button onClick={() => {
                                        if (window.confirm("Deseja editar o funcionário?")) {
                                            props.editarFuncionario(funcionario)
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
                                        if (window.confirm("Deseja excluir o funcionário?")) {
                                            props.excluirFuncionario(funcionario)
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