import AlunosBD from "../Persistencia/alunosBD.js";
export default class Aluno{

    #cpf;
    #nome;
    #endereco;
    #bairro
    #cidade;
    #estado;
    #telefone;

    
    constructor(cpf, nome, endereco, bairro, cidade, estado, telefone){
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#telefone = telefone;

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

    toJSON(){
        return{
            "cpf"     : this.#cpf,
            "nome"    : this.#nome,
            "endereco": this.#endereco,
            "bairro"  : this.#bairro,
            "cidade"  : this.#cidade,
            "estado"  : this.#estado,
            "telefone": this.#telefone,
        }
    }
    async gravar(){
        const alunosBD = new AlunosBD();
        await alunosBD.incluir(this);
    }

    async atualizar(){
        const alunosBD = new AlunosBD();
        await alunosBD.alterar(this);
    }

    async removerBanco(){
        const alunosBD = new AlunosBD();
        await alunosBD.excluir(this);
    }

    async consultar(){
        const alunosBD = new AlunosBD();
        const aluno = await alunosBD.consultar("");
        return aluno;
    }
  
}