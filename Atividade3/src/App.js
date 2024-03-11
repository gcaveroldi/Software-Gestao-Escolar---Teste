
import TelaCadastroProfessores from "./telas/TeleCadastroProfessores";
import TelaCadastroAlunos from "./telas/TelaCadastroAlunos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaMenu from "./telas/TelaMenu";
import Tela404 from "./telas/Tela404";
import TelaCadastroFuncionarios from "./telas/TelaCadastroFuncionarios";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/cadastroProfessores" element={<TelaCadastroProfessores />}/>
          <Route path="/cadastroAlunos" element={<TelaCadastroAlunos />}/>
          <Route path="/funcionarios" element={<TelaCadastroFuncionarios/>}/>
          <Route path="/" element={<TelaMenu/>}/>
          <Route path="*" element={<Tela404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
