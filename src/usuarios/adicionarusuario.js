import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import CustomizedSnackbars from "../componentes/NotificationPop";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Adicionarusuario() {
  let navigate = useNavigate();
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

  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      nome: "",
      sobrenome: "",
      email: "",
    },
    validationSchema: basicSchema,
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/users", usuario);

    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">CADASTRO</h2>

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
