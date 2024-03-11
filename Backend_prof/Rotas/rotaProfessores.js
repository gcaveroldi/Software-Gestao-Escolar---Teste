import { Router } from "express";
import ProfessoresCtrl from "../Controle/ProfessoresCtrl.js";

const rotaProfessores = new Router();
const professoresCtrl = new ProfessoresCtrl();

rotaProfessores.post('/', professoresCtrl.gravar)
.put('/', professoresCtrl.atualizar)
.delete('/', professoresCtrl.excluir)
.get('/', professoresCtrl.consultar)
.get('/:cpf', professoresCtrl.consultarPeloCPF);


export default rotaProfessores;