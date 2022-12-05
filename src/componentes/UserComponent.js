import axios from "axios";
import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import fetchData from "../services/UserService";
import "./card.css";

const TabelaUsuarios = () => {
  const [usuario, setUsuario] = useState([]);

  const { id } = useParams;

  useEffect(() => {
    fetchData().then((res) => {
      setUsuario(res.data);
    });
  }, []);

  const carregarUsuario = async () => {
    fetchData().then((res) => {
      setUsuario(res.data);
    });
  };

  useEffect(() => {
    carregarUsuario();
  }, []);

  const deletarUsuario = async (id) => {
    await axios.delete(`http://localhost:8080/api/users/${id}`);
    carregarUsuario();
  };

  return (
    <div className="card">
      <h1 className="text-center">USUARIOS CADASTRADOS</h1>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID </td>
              <td>NOME </td>
              <td>SOBRENOME </td>
              <td>EMAIL</td>
              <td>AÇÃO</td>
            </tr>
          </thead>
          <tbody>
            {usuario.map((usuarioData) => (
              <tr key={usuarioData.id}>
                <td>{usuarioData.id}</td>
                <td>{usuarioData.nome}</td>
                <td>{usuarioData.sobrenome}</td>
                <td>{usuarioData.email}</td>

                <Link
                  className="btn btn-primary mx-2"
                  to={`/viewuser/${usuarioData.id}`}
                >
                  view
                </Link>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/editusers/${usuarioData.id}`}
                >
                  edit
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deletarUsuario(usuarioData.id)}
                >
                  delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaUsuarios;
