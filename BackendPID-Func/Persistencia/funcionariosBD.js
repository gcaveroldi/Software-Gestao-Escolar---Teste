import Funcionarios from "../Modelo/Funcionarios.js";
import conectar from "./Conexao.js";


export default class FuncionariosBD{

    async incluir(funcionario){

        if (funcionario instanceof Funcionarios){
            const conexao = await conectar();
            const sql="INSERT INTO funcionarios(cpf,nome,endereco,bairro,cidade,estado,telefone,setor)\
                                            VALUES(?,?,?,?,?,?,?,?)";
            const valores = [funcionario.cpf,funcionario.nome,funcionario.endereco,funcionario.bairro,funcionario.cidade,
                funcionario.estado,funcionario.telefone,funcionario.setor];
            await conexao.query(sql,valores);
        }

    }
    async alterar(funcionario){

        if (funcionario instanceof Funcionarios){
            const conexao = await conectar();
            const sql="UPDATE funcionarios SET nome=?,endereco=?,bairro=?,cidade=?,estado=?,telefone=?,setor=?\
                       WHERE cpf=?";
            const valores = [funcionario.nome,funcionario.endereco,funcionario.bairro,funcionario.cidade,
                funcionario.estado,funcionario.telefone,funcionario.setor, funcionario.cpf];
            await conexao.query(sql,valores);
        }

    }
    async excluir(funcionario){

        if (funcionario instanceof Funcionarios){
            const conexao = await conectar();
            const sql="DELETE FROM funcionarios WHERE cpf=?";
            const valores = [funcionario.cpf];
            await conexao.query(sql,valores);
        }

    }
    async consultar(termo){
        const conexao = await conectar();
        const sql = "SELECT * FROM funcionarios WHERE nome LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        const listaFuncionario = [];
        for(const row of rows){
            const funcionario = new Funcionarios(row['cpf'],row['nome'],row['endereco'],row['bairro'],row['cidade'],row['estado'],row['telefone'],row['setor']);
            listaFuncionario.push(funcionario);
        }
        return listaFuncionario;
    }
}