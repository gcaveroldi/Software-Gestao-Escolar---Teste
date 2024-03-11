import Funcionarios from "../Modelo/Funcionarios.js";

export default class FuncionarioCtrl{

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
            const setor = dados.setor;
            if(cpf && nome && endereco && bairro && cidade && estado && telefone && setor)
                {
                const funcionario = new Funcionarios(cpf, nome, endereco, bairro, cidade, estado, telefone, setor);
                funcionario.gravar().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        mensagem:"Funcionario gravado com sucesso!"
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
                mensagem:"Método não permitido ou Funcionario no formato JSON não fornecido!"
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
            const setor = dados.setor
            if(cpf && nome && endereco && bairro && cidade && estado && telefone && setor)
                {
                const funcionario = new Funcionarios(cpf, nome, endereco, bairro, cidade, estado, telefone, setor);
                funcionario.atualizar().then(()=>{
                    resposta.status(200).json({
                       status:true,
                        mensagem:"Funcionario atualizado com sucesso!"
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
                    mensagem:"Método não permitido ou Funcionario no formato JSON não fornecido!"
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
                const funcionario = new Funcionarios(cpf);
                    funcionario.removerBanco().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        mensagem:"Funcionario deletado com sucesso!"
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
                        mensagem:"Informe o cpf do Funcionario, conforme documentação da API!"
                    });
                }
            
        }
        else{
            resposta.status(400).json({
                status:false,
                mensagem:"Método não permitido ou Funcionario no formato JSON não fornecido!"
            });
        }
    }

    consultar(requisicao, resposta){
        resposta.type("application/json");

        if(requisicao.method === "GET"){       
                
            const funcionario = new Funcionarios();
            funcionario.consultar('').then((funcionario)=>{
                    resposta.status(200).json(funcionario);
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