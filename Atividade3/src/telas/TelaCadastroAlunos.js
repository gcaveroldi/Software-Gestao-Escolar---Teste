import Pagina from "../templates/Pagina";
import FormAlunos from "../formularios/FormAlunos";
import TabelaAlunos from "../tabelas/TabelaAlunos";
import { useState, useEffect } from "react";
import { Alert, Container } from "react-bootstrap";
import { urlBase2 } from "../utilitarios/definicoes";

export default function TelaCadastroAlunos(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    const [alunos, setAlunos] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [alunoEmEdicao, setAlunoEmEdicao] = useState({
        cpf: "",
        nome: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
        telefone: ""
    });


    function edicaoAluno(aluno){
        setModoEdicao(true);
        setAlunoEmEdicao(aluno)
        setExibirTabela(false);
    }
    function excluirAlunos(aluno){
        fetch(urlBase2 + "/alunos", {
            method:"DELETE",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(aluno)
        }).then((resposta) => {
            
           return resposta.json()
        }).then((retorno) => {
           if (retorno.resultado){
               exibirTabela();
            }
           else{
               alert("Deseja mesmo excluir o Aluno selecionado?")
            }
        });
    }

    useEffect(()=>{
        fetch(urlBase2 + "/alunos", {
            method:"GET"
        }).then((resposta)=>{
            return resposta.json();
        }).then((dados)=>{
            if (Array.isArray(dados)){
                setAlunos(dados);

            }
            else{

            }
        });
    },[]);

    return(
        <Pagina>
            <Container className="border mb-3">
            <Alert variant={"secondary"} className="text-center m-3">Cadastro de Alunos</Alert>
            {
                exibirTabela ?
                <TabelaAlunos listaAlunos={alunos} 
                setAlunos={setAlunos}
                exibirTabela={setExibirTabela}
                editarAluno={edicaoAluno}
                excluirAluno={excluirAlunos}/>
                              
                :
                <FormAlunos listaAlunos={alunos} 
                setAlunos={setAlunos}
                exibirTabela={setExibirTabela}
                modoEdicao={modoEdicao}
                setModoEdicao={setModoEdicao}
                aluno={alunoEmEdicao}/>
            }
            </Container>
            
        </Pagina>
    );
}