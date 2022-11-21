import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewUsuario() {
  const [usuario, setUsuario] = useState({
    nome: "",
    Sobrenome: "",
    email: "",
    orcamento: " ",
  });

  const { id } = useParams();

  useEffect(() => {
    carregarUsuario();
  }, []);

  const carregarUsuario = async () => {
    const resultado = await axios.get(`http://localhost:8080/api/users/${id}`);
    setUsuario(resultado.data);
  };

  return (
    <div className="container">
      <div className="">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalhes usuário</h2>

          <div className="">
            <div className="card-header">
              detalhes do usuario:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nome:</b>
                  {usuario.nome}
                </li>
                <li className="list-group-item">
                  <b>Sobrenome:</b>
                  {usuario.sobrenome}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {usuario.email}
                </li>
                <li className="list-group-item">
                  <b>Orçamento:</b>
                </li>
              </ul>
            </div>
          </div>

          <Link className="btn btn-primary my-2" to={"/"}>
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
