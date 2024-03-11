import {Router} from "express";
import AlunoCtrl from "../Controle/AlunoCtrl.js";

const rotaAluno = new Router();
const alunosBD = new AlunoCtrl();

rotaAluno.post('/', alunosBD.gravar)
.put('/', alunosBD.atualizar)
.delete('/', alunosBD.excluir)
.get('/', alunosBD.consultar);


export default rotaAluno;