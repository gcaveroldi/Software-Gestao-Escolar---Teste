import Aluno from "../Modelo/Alunos.js";
import conectar from "./Conexao.js";


export default class AlunosBD{

    async incluir(aluno){

        if (aluno instanceof Aluno){
            const conexao = await conectar();
            const sql="INSERT INTO alunos(cpf,nome,endereco,bairro,cidade,estado,telefone)\
                                            VALUES(?,?,?,?,?,?,?)";
            const valores = [aluno.cpf,aluno.nome,aluno.endereco,aluno.bairro, aluno.cidade,
                            aluno.estado,aluno.telefone];
            await conexao.query(sql,valores);
        }

    }
    async alterar(aluno){

        if (aluno instanceof Aluno){
            const conexao = await conectar();
            const sql="UPDATE alunos SET nome=?,endereco=?,bairro=?,cidade=?,estado=?,telefone=?\
                        WHERE cpf=?";
            const valores = [aluno.nome,aluno.endereco,aluno.bairro, aluno.cidade,
                            aluno.estado,aluno.telefone, aluno.cpf];
            await conexao.query(sql,valores);
        }

    }
    async excluir(aluno){

        if (aluno instanceof Aluno){
            const conexao = await conectar();
            const sql="DELETE FROM alunos WHERE cpf=?";
            const valores = [aluno.cpf];
            await conexao.query(sql,valores);
        }

    }
    async consultar(termo){
        const conexao = await conectar();
        const sql = "SELECT * FROM alunos WHERE nome LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        const listaAluno = [];
        for(const row of rows){
            const aluno = new Aluno(row['cpf'],row['nome'],row['endereco'],row['bairro'],row['cidade'],row['estado'],row['telefone']);
            listaAluno.push(aluno);
        }
        return listaAluno;
    }
}