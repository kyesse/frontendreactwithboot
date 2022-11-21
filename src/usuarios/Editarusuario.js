import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditarUsuario() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [usuario, setUsuario] = useState({
    nome: "",
    Sobrenome: "",
    email: "",
  });

  const { nome, sobrenome, email } = usuario;

  const onInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    carregarUsuario();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/users/${id}`, usuario);
    navigate("/");
  };

  const carregarUsuario = async () => {
    const resultado = await axios.get(`http://localhost:8080/api/users/${id}`);
    setUsuario(resultado.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">EDITAR</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlfor="name" className="form-label">
                Nome
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="digite o nome"
                name="nome"
                value={nome}
                onChange={(e) => onInputChange(e)}
                required
              ></input>
            </div>

            <div className="mb-3">
              <label htmlfor="sobrenome" className="form-label">
                Sobrenome
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="digite o sobrenome"
                name="sobrenome"
                value={sobrenome}
                onChange={(e) => onInputChange(e)}
                required
              ></input>
            </div>

            <div className="mb-3">
              <label htmlfor="email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="digite o email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary mx-2">
              Enviar
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
