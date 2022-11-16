import React, { useState, useEffect } from "react";
import fetchData from "../services/UserService";
import "./card.css";

const TabelaUsuarios = () => {

  const [usuario, setUsuario] = useState([]);

  useEffect(() => { fetchData().then((res) => {setUsuario(res.data); });}, []);

  return (
    <div className="card">
      <h1 className="text-center">USUARIOS CADASTRADOS</h1>
      <div>
        <table className="table table-striped">
          <thead>
             

          <td width="4%">nome:</td>
            <input type="text" size="11"></input>
            <label>sobrenome:</label>

            <input type="text" className="formSizeTb" size="11"></input>
            <label>email</label>
            <input type="text" size="11"></input>
            <button>Enviar</button>



 
            <tr>
              <td>ID </td>
              <td>NOME </td>
              <td>SOBRENOME </td>
              
              <td>EMAIL</td>
            </tr>
          </thead>
          <tbody>
            {usuario.map((usuarioData) => (
              <tr key={usuarioData.id}>
                <td>{usuarioData.id}</td>
                <td>{usuarioData.nome}</td>
                <td>{usuarioData.sobrenome}</td>
                <td>{usuarioData.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaUsuarios;
