import { Form, Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import { urlBase2 } from "../utilitarios/definicoes";

export default function FormAlunos(props) {
    const [validado, setValidado] = useState(false);
    const [aluno, setAluno] = useState(props.aluno);

    function manipularMudanca(e){
        const elemForm = e.currentTarget;
        const id = elemForm.id;
        const valor = elemForm.value;
        setAluno({...aluno, [id]:valor});
    }

    function manipulaSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {

           if (!props.modoEdicao)
           {
                fetch(urlBase2 +"/alunos", {
                method:"POST",
                headers:{"Content-Type" : "application/json"},
                body:JSON.stringify(aluno)

            })
            .then((resposta)=>{
                return resposta.json();
            })
            .then((dados)=>{
                if (dados.status){
                    //props.setModoEdicao(false);
                    let novaLista = props.listaAlunos;
                    novaLista.push(aluno);
                    props.setAlunos(novaLista);
                    props.exibirTabela(true);
                }
                window.alert(dados.mensagem);

            })
            .catch((erro)=>{
                window.alert("Erro de gravação: " + erro.message);
            })
           }
           else
           {
               fetch(urlBase2 +"/alunos", {
                method:"PUT",
                headers:{"Content-Type" : "application/json"},
                body:JSON.stringify(aluno)
               }).then((resposta) => {
                    alert("Aluno atualizado com sucesso!")
                    props.setAlunos(alunos => {
                        const index = alunos.findIndex(a => a.cpf === aluno.cpf);
                        if (index !== -1) {
                          const updatedAlunos = [...alunos];
                          updatedAlunos[index] = aluno;
                          return updatedAlunos;
                        }
                        return alunos;
                        
                      });
                      props.exibirTabela(true);
                      
               }); 
           }
                     
            setValidado(false);
        }
        else{
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
                            value={aluno.cpf}
                            id="cpf"
                            onChange={manipularMudanca}
                            required />
                        </Form.Group>
                        <Form.Control.Feedback type='invalid'>
                            Por favor, informe o CPF!
                        </Form.Control.Feedback>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nome do Aluno</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Informe o nome do aluno" 
                            value={aluno.nome}
                            id="nome"
                            onChange={manipularMudanca}
                            required />
                        </Form.Group>
                        <Form.Control.Feedback type='invalid'>
                            Por favor, informe o nome do aluno!
                        </Form.Control.Feedback>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control 
                            type="text"
                            value={aluno.endereco} 
                            id="endereco"
                            onChange={manipularMudanca}
                            required />
                        </Form.Group>
                        <Form.Control.Feedback type='invalid'>
                            Por favor, informe o endereço do aluno!
                        </Form.Control.Feedback>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control 
                            type="text" 
                            laceholder="Informe o bairro do aluno!" 
                            value={aluno.bairro}
                            id="bairro"
                            onChange={manipularMudanca}
                            required />
                        </Form.Group>
                        <Form.Control.Feedback type='invalid'>
                            Por favor, informe o bairro do aluno!
                        </Form.Control.Feedback>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Cidade" 
                        value={aluno.cidade}
                        id="cidade"
                        onChange={manipularMudanca}
                        required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a cidade!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Estado</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Estado" 
                        value={aluno.estado}
                        id="estado"
                        onChange={manipularMudanca}
                        required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o Estado.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" >
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control 
                        type="text" 
                        laceholder="(00) 00000-0000" 
                        value={aluno.telefone}
                        id="telefone"
                        onChange={manipularMudanca}
                        required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o CEP.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Col md={2}>
                        <Button type="submit" variant="dark">{props.modoEdicao ? "Atualizar" : "Cadastrar"}</Button>
                        {' '}
                        <Button type="button" onClick={()=>{
                            props.exibirTabela(true);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}