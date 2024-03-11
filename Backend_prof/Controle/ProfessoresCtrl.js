import Professores from "../Modelo/Professores.js";

export default class ProfessoresCtrl{

    gravar(requisicao, resposta){
        resposta.type("application/json");

        if(requisicao.method === "POST" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;            
            const nome = dados.nome;
            const graduacao = dados.graduacao;
            const departamento = dados.departamento;
            const especialidade = dados.especialidade;
            const anograduacao = dados.anograduacao;
            const datanascimento = dados.datanascimento;
            const endereco = dados.endereco;
            const cidade = dados.cidade;
            const bairro = dados.bairro;
            const telefone =dados.telefone;
            const email = dados.email;
            if(cpf && nome && graduacao && departamento && especialidade &&
                anograduacao && datanascimento && endereco && cidade &&
                bairro && telefone && email)
                {
                    const professores = new Professores(cpf, nome, graduacao, departamento, especialidade,
                                                        anograduacao, datanascimento, endereco, cidade, bairro,
                                                         telefone, email);
                    professores.gravar().then(()=>{
                        resposta.status(200).json({
                            status:true,
                            mensagem:"Professor gravado com sucesso!"
                        });
                    }).catch((erro) => {
                        resposta.status(500).json({
                            status:false,
                            mensagem: erro.message
                        })
                    });
                }
                else{
                    resposta.status(400).json({
                        status:false,
                        mensagem:"Informe todos os dados corretamente, conforme documentação da API!"
                    })
                }
            
        }
        else{
            resposta.status(400).json({
                status:false,
                mensagem:"Método não permitido ou Professor no formato JSON não fornecido!"
            });
        }
    }


    atualizar(requisicao, resposta){
        resposta.type("application/json");

        if(requisicao.method === "PUT" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;            
            const nome = dados.nome;
            const graduacao = dados.graduacao;
            const departamento = dados.departamento;
            const especialidade = dados.especialidade;
            const anograduacao = dados.anograduacao;
            const datanascimento = dados.datanascimento;
            const endereco = dados.endereco;
            const cidade = dados.cidade;
            const bairro = dados.bairro;
            const telefone =dados.telefone;
            const email = dados.email;
            if(cpf && nome && graduacao && departamento && especialidade &&
                anograduacao && datanascimento && endereco && cidade &&
                bairro && telefone && email)
                {
                    const professores = new Professores(cpf, nome, graduacao, departamento, especialidade,
                                                        anograduacao, datanascimento, endereco, cidade, bairro,
                                                         telefone, email);
                    professores.atualizar().then(()=>{
                        resposta.status(200).json({
                            status:true,
                            mensagem:"Professor atualizado com sucesso!"
                        });
                    }).catch((erro) => {
                        resposta.status(500).json({
                            status:false,
                            mensagem: erro.message
                        })
                    });
                }
                else{
                    resposta.status(400).json({
                        status:false,
                        mensagem:"Informe todos os dados corretamente, conforme documentação da API!"
                    })
                }
            
        }
        else{
            resposta.status(400).json({
                status:false,
                mensagem:"Método não permitido ou Professor no formato JSON não fornecido!"
            });
        }
    }


    excluir(requisicao, resposta){
        resposta.type("application/json");

        if(requisicao.method === "DELETE" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;            
            
            if(cpf )
                {
                    const professores = new Professores(cpf);
                    professores.removerBanco().then(()=>{
                        resposta.status(200).json({
                            status:true,
                            mensagem:"Preofessor deletado com sucesso!"
                        });
                    }).catch((erro) => {
                        resposta.status(500).json({
                            status:false,
                            mensagem: erro.message
                        })
                    });
                }
                else{
                    resposta.status(400).json({
                        status:false,
                        mensagem:"Informe o cpf do professor, conforme documentação da API!"
                    })
                }
            
        }
        else{
            resposta.status(400).json({
                status:false,
                mensagem:"Método não permitido ou Professor no formato JSON não fornecido!"
            });
        }
    }


    consultar(requisicao, resposta){
        resposta.type("application/json");

        if(requisicao.method === "GET"){       
                
            const professores = new Professores();
            professores.consultar('').then((professores)=>{
                    resposta.status(200).json(professores);
            }).catch((erro) => {
                resposta.status(500).json({
                    status:false,
                    mensagem: erro.message
                })
            });
        }        
        
        else{
            resposta.status(400).json({
                status:false,
                mensagem:"Método não permitido!"
            });
        }
    }


    consultarPeloCPF(requisicao, resposta){
        resposta.type("application/json");

        const cpf = requisicao.params['cpf'];

        if(requisicao.method === "GET"){       
                
            const professores = new Professores();
            professores.consultarCPF(cpf).then((professores)=>{
                    resposta.status(200).json(professores);
            }).catch((erro) => {
                resposta.status(500).json({
                    status:false,
                    mensagem: erro.message
                })
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