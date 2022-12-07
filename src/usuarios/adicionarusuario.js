import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import CustomizedSnackbars from "../componentes/snackbar";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { setSnackbar, SET_SNACKBAR } from "../Redux/snackbar";
import {
  createStoreHook,
  Provider,
  useDispatch,
  useSelector,
} from "react-redux";
import "./formikstyles.css";

export default function Adicionarusuario() {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const [usuario, setUsuario] = useState({
    nome: "",
    Sobrenome: "",
    email: "",
  });

  const { nome, sobrenome, email } = usuario;

  const onInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const basicSchema = yup.object().shape({
    nome: yup.string().required("campo obrigatorio"),
    sobrenome: yup.string().required("campo obrigatorio"),
    email: yup
      .string()
      .email("digite um email valido")
      .required("campo obrigatorio"),
  });

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      nome: "",
      sobrenome: "",
      email: "",
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:8080/api/users", values);
      handleDispatch();
      navigate("/");
      console.log(values);
    },
    validationSchema: basicSchema,
  });
  console.log(values);
  console.log(errors);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/users", usuario);

    navigate("/");
  };

  const handleDispatch = () => {
    dispatch(setSnackbar(true, "success", "USUARIO CADASTRADO"));
  };



  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">CADASTRO</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlfor="name" className="form-label">
                Nome
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="digite o nome"
                name="nome"
                value={values.nome}
                onChange={handleChange}
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
                value={values.sobrenome}
                onChange={handleChange}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlfor="email" className="form-label">
                Email
              </label>
              <input
                type={"email"}
                className={errors.email ? "input-error" : ""}
                placeholder="digite o email"
                name="email"
                value={values.email}
                onChange={handleChange}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary mx-2"
            
            >
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
