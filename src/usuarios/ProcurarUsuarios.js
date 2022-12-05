import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import fetchData from "../services/UserService";

export default function ProcurarUsuario() {
  let navigate = useNavigate();

  const { keyword } = useParams();

  const [search, setSearch] = useState({
    word: "",
  });

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    fetchData().then((res) => {
      setUsuario(res.data);
    });
  }, []);

  const { word } = search;

  const onInputChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchData().then((res) => {
      setSearch(res.data);
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

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.get(`http://localhost:8080/api/search/Peter`);
    carregarUsuario();
    //SearchUsers()
    // navigate("/");
  };

  const SearchUsers = async () => {
    const resultado = await axios.get(
      `http://localhost:8080/api/search/${word}`
    );
    setSearch(resultado.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlfor="keyword" className="form-label">
                Search
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="search"
                name="keyword"
                value={word}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <button type="submit" className="btn btn-outline-primary mx-2">
              Enviar
            </button>
            <Link
              type="submit"
              className="btn btn-outline-danger mx-2"
              to="/search/Peter"
            >
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
