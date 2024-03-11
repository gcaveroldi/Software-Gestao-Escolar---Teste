import { Form, Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import { urlBase } from "../utilitarios/definicoes";

export default function FormProfe(props) {
    const [validado, setValidado] = useState(false);
    const [professor, setProfessor] = useState(props.professor);

    function manipularMudancaProfe(e) {
        const elemFormProfe = e.currentTarget;
        const id = elemFormProfe.id;
        const valor = elemFormProfe.value;
        setProfessor({ ...professor, [id]: valor });
    }

    function manipulaSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {

            if (!props.modoEdicao) {
                fetch(urlBase + "/professores", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(professor)
                }).then((resposta) => {
                    return resposta.json();
                })
                    .then((dados) => {
                        if (dados.status) {
                            props.setModoEdicao(false);
                            let novaLista = props.listaProfessores;
                            novaLista.push(professor);
                            props.setProfessores(novaLista);
                            props.exibirTabela(true);
                        }
                        window.alert(dados.mensagem);
                    })
                    .catch((erro) => {
                        window.alert("Erro ao executar a requisição:" + erro.message);
                    })
            }
            else {
                fetch(urlBase + "/professores", {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(professor)
                }).then((resposta) => {
                    window.location.reload();
                    return resposta.json()

                })
            }


            //let professores = props.listaProfessores;
            //professores.push(professor);
            //props.setProfessores(professores);


            setValidado(false);
        }
        else {
            setValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }



    return (
        <>

            <Form noValidate validated={validado} onSubmit={manipulaSubmissao}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>CPF:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="000.000.000-00"
                                value={professor.cpf}
                                id="cpf"
                                onChange={manipularMudancaProfe}
                                required />
                        </Form.Group>
                        <Form.Control.Feedback type='invalid'>
                            Por favor, informe o CPF!
                        </Form.Control.Feedback>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nome do Professor</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o nome do professor"
                                value={professor.nome}
                                id="nome"
                                onChange={manipularMudancaProfe}
                                required />
                        </Form.Group>
                        <Form.Control.Feedback type='invalid'>
                            Por favor, informe o nome do professor!
                        </Form.Control.Feedback>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>graduacao</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe a graduação do professor"
                                value={professor.graduacao}
                                id="graduacao"
                                onChange={manipularMudancaProfe}
                                required />
                        </Form.Group>
                        <Form.Control.Feedback type='invalid'>
                            Por favor, informe a graduacao do professor!
                        </Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Departamento</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o departamento do professor!"
                                value={professor.departamento}
                                id="departamento"
                                onChange={manipularMudancaProfe}
                                required />
                        </Form.Group>
                        <Form.Control.Feedback type='invalid'>
                            Por favor, informe o departamento do professor!
                        </Form.Control.Feedback>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Especialidade</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Especialidade"
                            value={professor.especialidade}
                            id="especialidade"
                            onChange={manipularMudancaProfe}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a especialidade!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Ano de Graduação</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ano de Graduação"
                            value={professor.anograduacao}
                            id="anograduacao"
                            onChange={manipularMudancaProfe}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o Ano de Graduação.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Data de Nascimento"
                            value={professor.datanascimento}
                            id="datanascimento"
                            onChange={manipularMudancaProfe}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a data de nascimento.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Endereço"
                            value={professor.endereco}
                            id="endereco"
                            onChange={manipularMudancaProfe}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o endereço.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cidade"
                            value={professor.cidade}
                            id="cidade"
                            onChange={manipularMudancaProfe}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a cidade.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Bairro"
                            value={professor.bairro}
                            id="bairro"
                            onChange={manipularMudancaProfe}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o bairro.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Telefone"
                            value={professor.telefone}
                            id="telefone"
                            onChange={manipularMudancaProfe}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o telefone.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            value={professor.email}
                            id="email"
                            onChange={manipularMudancaProfe}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o email.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Col md={2}>
                        <Button type="submit" variant="dark">Cadastrar</Button>
                        {""}
                        <Button type="button" onClick={() => { props.exibirTabela(true) }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}


