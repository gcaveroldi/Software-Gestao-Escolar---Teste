import Pagina from "../templates/Pagina";
import FormProfe from "../formularios/FormProfe";
import TabelaProfessores from "../tabelas/TabelaProfessores";
import { useState, useEffect } from "react";
import { Alert, Container } from "react-bootstrap";
import { urlBase } from "../utilitarios/definicoes";




export default function TelaCadastroProfessores(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [professores, setProfessores] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);    
    const [professorEmEdicao, setProfessorEmEdicao] = useState(
        {
            cpf: "",
            nome: "",
            graduacao: "",
            departamento: "",
            especialidade: "",
            anograduacao: "",
            datanascimento: "",
            estado: "",
            cidade: "",
            bairro: "",
            telefone: "",
            email: ""
        }
    );

    function prepararProfessorParaEdicao(professor) {
        setModoEdicao(true);
        setProfessorEmEdicao(professor);
        setExibirTabela(false);
    }

    function apagarProfessor(professor) {
        fetch(urlBase + "/professores", {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(professor)
        }).then((resposta) => {
            window.alert('Usuário excluído com sucesso!')
            window.location.reload();
            return resposta.json()
        })
    }


    useEffect(() => {
        fetch(urlBase + "/professores", {
            method: "GET"
        }).then((resposta) => {
            return resposta.json();
        }).then((dados) => {
            if (Array.isArray(dados)) {
                setProfessores(dados);
            }
            else {

            }
        });
    }, []);

    

    return (
        <Pagina>
            <Container className="border mb-3">
                <Alert variant={"secondary"} className="text-center m-3">Cadastro de Professores</Alert>
                {
                    exibirTabela ?
                        <TabelaProfessores 
                            listaProfessores={professores}
                            setProfessores={setProfessores}
                            exibirTabela={setExibirTabela}
                            editarProfessor={prepararProfessorParaEdicao}
                            excluirProfessor={apagarProfessor} />

                        :
                        <FormProfe 
                            listaProfessores={professores}                            
                            exibirTabela={setExibirTabela}
                            setProfessores={setProfessores}
                            editarProfessor={prepararProfessorParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}                            
                            //atualizando={atualizando}
                            professor={professorEmEdicao} />
                }
            </Container>

        </Pagina>
    );
}