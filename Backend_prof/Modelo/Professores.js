import ProfessoresBD from "../Persistencia/ProfessoresBD.js";
export default class Professores{

    #cpf;
    #nome;
    #graduacao;
    #departamento;
    #especialidade;
    #anograduacao;
    #datanascimento;
    #endereco;
    #cidade;
    #bairro;
    #telefone;
    #email;

    constructor(cpf, nome, graduacao, departamento, especialidade, anograduacao, datanascimento, endereco, cidade, bairro, telefone, email){
        this.#cpf = cpf;
        this.#nome = nome;
        this.#graduacao = graduacao;
        this.#departamento = departamento;
        this.#especialidade = especialidade;
        this.#anograduacao = anograduacao;
        this.#datanascimento = datanascimento;
        this.#endereco = endereco;
        this.#cidade = cidade;
        this.#bairro = bairro;
        this.#telefone = telefone;
        this.#email = email;
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
    get graduacao(){
        return this.#graduacao;
    }
    set graduacao(novaGraduacao){
        this.#graduacao = novaGraduacao;
    }
    get departamento(){
        return this.#departamento;
    }
    set departamento(novoDepartamento){
        this.#departamento = novoDepartamento;
    }
    get especialidade(){
        return this.#especialidade;
    }
    set especiaidade(novaEspecialidade){
        this.#especialidade = novaEspecialidade;
    }
    get anograduacao(){
        return this.#anograduacao;
    }
    set anograduacao(novoAnoGraduacao){
        this.#anograduacao = novoAnoGraduacao;
    }
    get datanascimento(){
        return this.#datanascimento;
    }
    set datanascimento(novaDataNascimento){
        this.#datanascimento = novaDataNascimento;
    }
    get endereco(){
        return this.#endereco;
    }
    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }
    get cidade(){
        return this.#cidade;
    }
    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }
    get bairro(){
        return this.#bairro;
    }
    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }
    get telefone(){
        return this.#telefone;
    }
    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }
    get email(){
        return this.#email;
    }
    set email(novoEmail){
        this.#email = novoEmail;
    }

    toJSON(){
        return{
            "cpf": this.#cpf,
            "nome": this.#nome,
            "graduacao": this.#graduacao,
            "departamento": this.#departamento,
            "especialidade": this.#especialidade,
            "anograduacao": this.#anograduacao,
            "datanascimento": this.#datanascimento,
            "endereco": this.#endereco,
            "cidade": this.#cidade,
            "bairro": this.#bairro,
            "telefone": this.#telefone,
            "email": this.#email,
        }
    }
    async gravar(){
        const professorBD = new ProfessoresBD();
        await professorBD.incluir(this);
    }

    async atualizar(){
        const professorBD = new ProfessoresBD();
        await professorBD.alterar(this);
    }

    async removerBanco(){
        const professorBD = new ProfessoresBD();
        await professorBD.excluir(this);
    }

    async consultar(){
        const professorBD = new ProfessoresBD();
        const professores = await professorBD.consultar("");
        return professores;
    }

    async consultarCPF(cpf){
        const professorBD = new ProfessoresBD();
        const professores = await professorBD.consultarCPF(cpf);
        return professores;
    }
}