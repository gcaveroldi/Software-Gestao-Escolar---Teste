import Aluno from "../Modelo/Alunos.js";

export default class AlunoCtrl{

    gravar(requisicao, resposta){
        resposta.type("application/json");

        if(requisicao.method === "POST" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;            
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const telefone = dados.telefone;
            if(cpf && nome && endereco && bairro && cidade && estado && telefone)
                {
                const aluno = new Aluno(cpf, nome, endereco, bairro, cidade, estado, telefone);
                aluno.gravar().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        mensagem:"Aluno gravado com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status:false,
                        mensagem: erro.message
                    });
                });
                }
                else{
                resposta.status(400).json({
                    status:false,
                    mensagem:"Informe todos os dados corretamente, conforme documentação da API!"
                });
                }
            }    
                else{
                resposta.status(400).json({
                status:false,
                mensagem:"Método não permitido ou Aluno no formato JSON não fornecido!"
            });
        }
    }

    atualizar(requisicao, resposta){
        resposta.type("application/json");

        if(requisicao.method === "PUT" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;            
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const telefone = dados.telefone;
            if(cpf && nome && endereco && bairro && cidade && estado && telefone)
                {
                const aluno = new Aluno(cpf, nome, endereco, bairro, cidade, estado, telefone);
                aluno.atualizar().then(()=>{
                    resposta.status(200).json({
                       status:true,
                        mensagem:"Aluno atualizado com sucesso!"
                        });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status:false,
                        mensagem: erro.message
                        });
                    });
                }
                else{
                    resposta.status(400).json({
                        status:false,
                        mensagem:"Informe todos os dados corretamente, conforme documentação da API!"
                    });
                }
            
            }
                else{
                    resposta.status(400).json({
                    status:false,
                    mensagem:"Método não permitido ou Aluno no formato JSON não fornecido!"
            });
        }   
    }

    excluir(requisicao, resposta){
        resposta.type("application/json");

        if(requisicao.method === "DELETE" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;            
            
            if(cpf)
                {
                const aluno = new Aluno(cpf);
                    aluno.removerBanco().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        mensagem:"Aluno deletado com sucesso!"
                        });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status:false,
                        mensagem: erro.message
                        });
                    });
                }
                else{
                    resposta.status(400).json({
                        status:false,
                        mensagem:"Informe o cpf do aluno, conforme documentação da API!"
                    });
                }
            
        }
        else{
            resposta.status(400).json({
                status:false,
                mensagem:"Método não permitido ou Aluno no formato JSON não fornecido!"
            });
        }
    }

    consultar(requisicao, resposta){
        resposta.type("application/json");

        if(requisicao.method === "GET"){       
                
            const aluno = new Aluno();
            aluno.consultar('').then((aluno)=>{
                    resposta.status(200).json(aluno);
            }).catch((erro) => {
                resposta.status(500).json({
                    status:false,
                    mensagem: erro.message
                });
            });
        }        
        
        else{
            resposta.status(400).json({
                status:false,
                mensagem:"Método não permitido!"
            });
        }
    }

    
}