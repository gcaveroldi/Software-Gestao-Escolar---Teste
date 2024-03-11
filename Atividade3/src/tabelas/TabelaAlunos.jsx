import { Button, Container, Table, Form, Row, Col } from "react-bootstrap";
import { urlBase2 } from "../utilitarios/definicoes";

export default function TabelaAlunos(props) {
  function excluirAluno(aluno) {
    if (window.confirm("Deseja excluir o aluno selecionado?")) {
      fetch(urlBase2 + "/alunos", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(aluno)
      })
        .then((resposta) => {
          return resposta.json();
        })
        .then((retorno) => {
          if (retorno.resultado) {
           
            // Realizar alguma ação após a exclusão do aluno
          } else {
            alert("Aluno exluido com sucesso!");
            
            buscarAlunosAtualizados();
          }
        });
    }
  }

  function buscarAlunosAtualizados() {
    fetch(urlBase2 + "/alunos", { method: "GET" })
      .then((resposta) => {
        return resposta.json();
      })
      .then((dados) => {
        if (Array.isArray(dados)) {
          props.setAlunos(dados); // Atualiza a variável de estado com a lista atualizada de alunos
        }
      });
  }

  function filtrarAlunos(e) {
    const termoBusca = e.currentTarget.value;
    fetch(urlBase2 + "/alunos", { method: "GET" })
      .then((resposta) => {
        return resposta.json();
      })
      .then((listaAlunos) => {
        if (Array.isArray(listaAlunos)) {
          const resultadoBusca = listaAlunos.filter((aluno) =>
            aluno.nome.toLowerCase().includes(termoBusca.toLowerCase())
          );
          props.setAlunos(resultadoBusca);
        }
      });
  }

  return (
    <Container className="m-3">
      <Button onClick={() => props.exibirTabela(false)}>Cadastrar</Button>
      <Container className="m-3">
        <Row>
          <Col md={11}>
            <Form.Control
              type="text"
              id="termoBusca"
              onChange={filtrarAlunos}
            />
          </Col>
          <Col md={1}>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
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
            <th>Estado</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.listaAlunos.map((aluno) => {
            return (
              <tr key={aluno.cpf}>
                <td>{aluno.cpf}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.endereco}</td>
                <td>{aluno.bairro}</td>
                <td>{aluno.cidade}</td>
                <td>{aluno.estado}</td>
                <td>{aluno.telefone}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      props.editarAluno(aluno);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                      />
                    </svg>
                  </Button>{" "}
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      excluirAluno(aluno);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-1.006l.003-.03A.58.58 0 0 0 13.494 3H11v-.5a.5.5 0 0 0-.5-.5Zm-3 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V2h-4v.5Zm-3.5 2v9a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-9H4ZM3.5 3h9v1h-9V3Z"
                      />
                    </svg>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
