//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adicionarusuario from "./usuarios/adicionarusuario";
import EditarUsuario from "./usuarios/Editarusuario";
import ViewUsuario from "./usuarios/viewusuario";
import PermanentDrawerLeft from "./componentes/SideDrawer";
import TabelaUsuariosNew from "./componentes/TabelaUsers";
import Frmbts from "./componentes/frmbts";
import ProcurarUsuario from "./usuarios/ProcurarUsuarios";
import NewScrollTable from "./componentes/TabelaUsersNew";
import CustomizedSnackbars from "./componentes/snackbar";
import { setSnackbar,SET_SNACKBAR } from "./Redux/snackbar";
import { createStoreHook, Provider } from "react-redux";
//TabelaUsuariosNew




const App=()=> {

  const store = createStoreHook(SET_SNACKBAR);

  return (
    <div className="App">
      
   
      <Router>
        <CustomizedSnackbars/>
        <PermanentDrawerLeft />

        <Routes>
          
          <Route exact path="/bootstrap" element={<Frmbts />} />
          
          <Route exact path="/viewuser/:id" element={<ViewUsuario />} />
          <Route exact path="/" element={<NewScrollTable />} />

          
          <Route exact path="/adduser" element={<Adicionarusuario />} />
         

          <Route exact path="/editusers/:id" element={<EditarUsuario />} />
          
        </Routes>
      </Router>

      <div></div>
      <div className="card">
        <header className="App-header"></header>
      </div>
    </div>
  );
}

export default App;
