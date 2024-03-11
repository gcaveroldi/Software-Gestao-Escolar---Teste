import FuncionariosBD from "../Persistencia/funcionariosBD.js";
export default class Funcionarios{

    #cpf;
    #nome;
    #endereco;
    #bairro
    #cidade;
    #estado;
    #telefone;
    #setor;

    
    constructor(cpf, nome, endereco, bairro, cidade, estado, telefone, setor){
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#telefone = telefone;
        this.#setor = setor;

    }

    get cpf(){
        return this.#cpf;
    }
    set cpf(novoCpf){
        if(novoCpf != "")
            this.#cpf = novoCpf;
    }
    get nome(){
        return this.#nome;
    }
    set nome(novoNome){
        if(novoNome != "")
            this.#nome = novoNome;
    }
    get endereco(){
        return this.#endereco;
    }
    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }
    get bairro(){
        return this.#bairro;
    }
    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }
    get cidade(){
        return this.#cidade;
    }
    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }
    get estado(){
        return this.#estado;
    }
    set estado(novoEstado){
        this.#estado = novoEstado;
    }
    get telefone(){
        return this.#telefone;
    }
    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }
    get setor(){
        return this.#setor;
    }
    set setor(novoSetor){
        this.#setor = novoSetor;
    }

    toJSON(){
        return{
            "cpf"     : this.#cpf,
            "nome"    : this.#nome,
            "endereco": this.#endereco,
            "bairro"  : this.#bairro,
            "cidade"  : this.#cidade,
            "estado"  : this.#estado,
            "telefone": this.#telefone,
            "setor"   : this.#setor,
        }
    }
    async gravar(){
        const funcionariosBD = new FuncionariosBD();
        await funcionariosBD.incluir(this);
    }

    async atualizar(){
        const funcionariosBD = new FuncionariosBD();
        await funcionariosBD.alterar(this);
    }

    async removerBanco(){
        const funcionariosBD = new FuncionariosBD();
        await funcionariosBD.excluir(this);
    }

    async consultar(){
        const funcionariosBD = new FuncionariosBD();
        const funcionario = await funcionariosBD.consultar("");
        return funcionario;
    }
  
}