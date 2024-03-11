import { Form, Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
//import { urlBase } from "../utilitarios/definicoes";
import { urlBase1 } from "../utilitarios/definicoes";

export default function FormFuncionarios(props) {
    const [validado, setValidado] = useState(false);
    const [funcionario, setFuncionario] = useState(props.funcionario);

    function manipularMudancaFuncionario(e) {
        const elemFormFuncionario = e.currentTarget;
        const id = elemFormFuncionario.id;
        const valor = elemFormFuncionario.value;
        setFuncionario({ ...funcionario, [id]: valor });
    }

    function manipulaSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {

            if (!props.modoEdicao) {
                fetch(urlBase1 + "/Funcionario", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(funcionario)
                }).then((resposta) => {
                    return resposta.json();
                })
                    .then((dados) => {
                        if (dados.status) {
                            props.setModoEdicao(false);
                            let novaLista = props.listaFuncionarios;
                            novaLista.push(funcionario);
                            props.setFuncionarios(novaLista);
                            props.exibirTabela(true);
                        }
                        window.alert(dados.mensagem);
                    })
                    .catch((erro) => {
                        window.alert("Erro ao executar a requisição:" + erro.message);
                    })
            }
            else {
                fetch(urlBase1 + "/Funcionario", {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(funcionario)
                }).then((resposta) => {
                    window.location.reload();
                    return resposta.json()

                })
            }


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
                                value={funcionario.cpf}
                                id="cpf"
                                onChange={manipularMudancaFuncionario}
                                required />
                        </Form.Group>
                        <Form.Control.Feedback type='invalid'>
                            Por favor, informe o CPF!
                        </Form.Control.Feedback>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nome do Funcionário</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o nome do funcionário"
                                value={funcionario.nome}
                                id="nome"
                                onChange={manipularMudancaFuncionario}
                                required />
                        </Form.Group>
                        <Form.Control.Feedback type='invalid'>
                            Por favor, informe o nome do funcionário!
                        </Form.Control.Feedback>
                    </Col>
                </Row>
                <Row>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Endereço"
                            value={funcionario.endereco}
                            id="endereco"
                            onChange={manipularMudancaFuncionario}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o endereço.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Bairro"
                            value={funcionario.bairro}
                            id="bairro"
                            onChange={manipularMudancaFuncionario}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o bairro.
                        </Form.Control.Feedback>
                    </Form.Group>

                </Row>
                <Row>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cidade"
                            value={funcionario.cidade}
                            id="cidade"
                            onChange={manipularMudancaFuncionario}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a cidade.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Estado"
                            value={funcionario.estado}
                            id="estado"
                            onChange={manipularMudancaFuncionario}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a estado.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Telefone"
                            value={funcionario.telefone}
                            id="telefone"
                            onChange={manipularMudancaFuncionario}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o telefone.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Setor</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Setor de trabalho"
                            value={funcionario.setor}
                            id="setor"
                            onChange={manipularMudancaFuncionario}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o setor de trabalho.
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