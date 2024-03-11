import express from 'express';

import rotaProfessores from './Rotas/rotaProfessores.js';
import cors from 'cors';

const app = express();

app.use(cors({origin:"*"})),

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/professores', rotaProfessores);

app.listen(3000, 'localhost', ()=>{
    console.log("Backend ouvindo em http://localhost:3000")
});

















/*import Professores from "./Modelo/Professores.js";

let objProfessores = new Professores('444.447.088-79',
                                'João Fernando',
                                'Mestre',
                                'Informática',
                                'Backend',
                                '2002',
                                '12/5/1979',
                                'Av. Manoel Romeu Caires 633',
                                'Presidente Prudente',
                                'Humberto Salvador',
                                '(18) 99773-8400',
                                'joaofernando@gmail.com');*/

/*objProfessores.nome = "João Fernando da Silva";
objProfessores.endereco = "Rua José Bongiovani";*/

/*objProfessores.atualizar(()=>{
    console.log('Os dados do professor foram atualizados!');
})*/

/*objProfessores.removerBanco(()=>{
    console.log("Professor excluído!");
})*/

/*objProfessores.gravar().then(()=>{
    console.log("Professor salvo com sucesso no Banco de Dados!");
})*/

/*const objprofessores = new Professores();
objprofessores.consultar("João Fernando").then((professores)=>{
    for(const professor of professores){
        console.log(professor.toJSON());
    }
});*/