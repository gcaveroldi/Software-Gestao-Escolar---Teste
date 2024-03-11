import Professores from "../Modelo/Professores.js";
import conectar from "./Conexao.js";

export default class ProfessoresBD{

    async incluir(professores){

        if (professores instanceof Professores){
            const conexao = await conectar();
            const sql="INSERT INTO professores(cpf,nome,graduacao,departamento,especialidade,\
                                            anograduacao,datanascimento,endereco,\
                                            cidade,bairro,telefone,email)\
                                            VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
            const valores = [professores.cpf,professores.nome,professores.graduacao,professores.departamento,
                            professores.especialidade,professores.anograduacao,professores.datanascimento,
                            professores.endereco,professores.cidade,professores.bairro,professores.telefone,professores.email];
            await conexao.query(sql,valores);
        }

    }
    async alterar(professores){

        if (professores instanceof Professores){
            const conexao = await conectar();
            const sql="UPDATE professores SET nome=?,graduacao=?,departamento=?,especialidade=?,\
                                            anograduacao=?,datanascimento=?,endereco=?,\
                                            cidade=?,bairro=?,telefone=?,email=?\
                        WHERE cpf=?";
            const valores = [professores.nome,professores.graduacao,professores.departamento,
                            professores.especialidade,professores.anograduacao,professores.datanascimento,
                            professores.endereco,professores.cidade,professores.bairro,professores.telefone,professores.email,professores.cpf];
            await conexao.query(sql,valores);
        }

    }
    async excluir(professores){

        if (professores instanceof Professores){
            const conexao = await conectar();
            const sql="DELETE FROM professores WHERE cpf=?";
            const valores = [professores.cpf];
            await conexao.query(sql,valores);
        }

    }
    async consultar(termo){
        const conexao = await conectar();
        const sql = "SELECT * FROM professores WHERE nome LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        const listaProfessores = [];
        for(const row of rows){
            const professor = new Professores(row['cpf'],row['nome'],row['graduacao'],row['departamento'],row['especialidade'],
            row['anograduacao'],row['datanascimento'],row['endereco'],row['cidade'],row['bairro'],row['telefone'],row['email']);
            listaProfessores.push(professor);
        }
        return listaProfessores;

    }
    async consultarCPF(cpf){
        const conexao = await conectar();
        const sql = "SELECT * FROM professor WHERE cpf = ?";
        const valores = [cpf]
        const [rows] = await conexao.query(sql, valores);
        const listaProfessores = [];
        for(const row of rows){
            const professor = new Professores(row['cpf'],row['nome'],row['graduacao'],row['departamento'],row['especialidade'],
            row['anograduacao'],row['datanascimento'],row['endereco'],row['cidade'],row['bairro'],row['telefone'],row['email']);
            listaProfessores.push(professor);
        }
        return listaProfessores;       

    }
    async consultarDepartamento(departamento){
        const conexao = await conectar();
        const sql = "SELECT * FROM professor WHERE departamento = ?";
        const valores = [departamento]
        const [rows] = await conexao.query(sql, valores);
        const listaProfessores = [];
        for(const row of rows){
            const professor = new Professores(row['cpf'],row['nome'],row['graduacao'],row['departamento'],row['especialidade'],
            row['anograduacao'],row['datanascimento'],row['endereco'],row['cidade'],row['bairro'],row['telefone'],row['email']);
            listaProfessores.push(professor);
        }
        return listaProfessores;       

    }
    async consultarEspecialidade(especialidade){
        const conexao = await conectar();
        const sql = "SELECT * FROM professor WHERE especialidade = ?";
        const valores = [especialidade]
        const [rows] = await conexao.query(sql, valores);
        const listaProfessores = [];
        for(const row of rows){
            const professor = new Professores(row['cpf'],row['nome'],row['graduacao'],row['departamento'],row['especialidade'],
            row['anograduacao'],row['datanascimento'],row['endereco'],row['cidade'],row['bairro'],row['telefone'],row['email']);
            listaProfessores.push(professor);
        }
        return listaProfessores;   

    }
}