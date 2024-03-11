import Pagina from "../templates/Pagina";
import { useState, useEffect } from "react";
import { Alert, Container } from "react-bootstrap";
//import { urlBase } from "../utilitarios/definicoes";
import TabelaFuncionarios from "../tabelas/TabelaFuncionarios";
import FormFuncionarios from "../formularios/FormFuncionarios";
import { urlBase1 } from "../utilitarios/definicoes";



export default function TelaCadastroFuncionarios(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [funcionarios, setFuncionarios] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);    
    const [funcionarioEmEdicao, setFuncionarioEmEdicao] = useState(
        {
            cpf: "",
            nome: "",
            endereco: "",
            bairro: "",
            cidade: "",
            estado: "",
            telefone: "",            
            setor: ""
        }
    );

    function prepararFuncionarioParaEdicao(funcionario) {
        setModoEdicao(true);
        setFuncionarioEmEdicao(funcionario);
        setExibirTabela(false);
    }

    function apagarFuncionario(funcionario) {
        fetch(urlBase1 + "/Funcionario", {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(funcionario)
        }).then((resposta) => {
            window.alert('Funcionário excluído com sucesso!')
            window.location.reload();
            return resposta.json()
        })
    }


    useEffect(() => {
        fetch(urlBase1 + "/Funcionario", {
            method: "GET"
        }).then((resposta) => {
            return resposta.json();
        }).then((dados) => {
            if (Array.isArray(dados)) {
                setFuncionarios(dados);
            }
            else {

            }
        });
    }, []);

    

    return (
        <Pagina>
            <Container className="border mb-3">
                <Alert variant={"secondary"} className="text-center m-3">Cadastro de Funcionários</Alert>
                {
                    exibirTabela ?
                        <TabelaFuncionarios 
                            listaFuncionarios={funcionarios}
                            setFuncionarios={setFuncionarios}
                            exibirTabela={setExibirTabela}
                            editarFuncionario={prepararFuncionarioParaEdicao}
                            excluirFuncionario={apagarFuncionario} />

                        :
                        <FormFuncionarios 
                            listaFuncionarios={funcionarios}                            
                            exibirTabela={setExibirTabela}
                            setFuncionarios={setFuncionarios}
                            editarFuncionario={prepararFuncionarioParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}                         
                            
                            funcionario={funcionarioEmEdicao} />
                }
            </Container>

        </Pagina>
    );
}