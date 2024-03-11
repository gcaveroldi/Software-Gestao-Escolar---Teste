import {Router} from "express";
import FuncionarioCtrl from "../Controle/FuncionarioCtrl.js";

const rotaFuncionario = new Router();
const funcionariosBD = new FuncionarioCtrl();

rotaFuncionario.post('/', funcionariosBD.gravar)
.put('/', funcionariosBD.atualizar)
.delete('/', funcionariosBD.excluir)
.get('/', funcionariosBD.consultar);


export default rotaFuncionario;