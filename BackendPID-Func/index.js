import express from 'express';

import rotaFuncionario from './Rotas/rotaFuncionario.js';
import cors from 'cors';

const app = express();

app.use(cors({origin:"*"}));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/Funcionario', rotaFuncionario);

app.listen(3334, 'localhost', ()=>{
    console.log("Backend ouvindo em http://localhost:3334")
});