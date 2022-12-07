import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import fetchData from "../services/UserService";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import { Grid } from "@mui/material";
import CustomizedSnackbars from "./snackbar";
import Adicionarusuario from "../usuarios/adicionarusuario";
import { createStoreHook, Provider } from "react-redux";
import { setSnackbar, SET_SNACKBAR } from "../Redux/snackbar";
const columns = [
  { id: "name", label: "ID", minWidth: 170 },
  { id: "ID", label: "ID", minWidth: 170 },
  { id: "code", label: "Nome", minWidth: 100 },
  {
    id: "population",
    label: "sobrenome",
    minWidth: 30,
  },
  {
    id: "size",
    label: "email",
    minWidth: 80,
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [createData("India", "IN", 1324171354, 3287263)];

const NewScrollTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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

  const searchUser = async (id) => {
    await axios.get(`http://localhost:8080/api/users/search/${id}`);
    carregarUsuario();
  };
  
  const searchUser2 = async (id) => {
    await axios.get(`http://localhost:8080/api/search/${id}`);
    carregarUsuario();
    //SearchUsers()
    // navigate("/");
  };
  const store = createStoreHook(setSnackbar);
  return (
    
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
        
   
      <PrimarySearchAppBar />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow hover role="checkbox" tabIndex={-1} key={columns.id}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {usuario
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((usuarioData) => (
                    <TableRow key={usuarioData.id} sx={{ "": { border: 0 } }}>
                      <TableCell>{usuarioData.id}</TableCell>
                      <TableCell>{usuarioData.id}</TableCell>

                      <TableCell>{usuarioData.nome}</TableCell>
                      <TableCell>{usuarioData.sobrenome}</TableCell>
                      <TableCell>{usuarioData.email}</TableCell>
                      <TableCell align="right">
                        {" "}
                        <Link
                          className="btn btn-outline-secondary mx-2"
                          to={`/viewuser/${usuarioData.id}`}
                        >
                          Perfil
                        </Link>
                        <Link
                          className="btn btn-outline-secondary mx-2"
                          to={`/editusers/${usuarioData.id}`}
                        >
                          Editar
                        </Link>
                        <Link
                          className="btn btn-outline-secondary mx-2"
                          onClick={(e) => searchUser2(usuarioData.nome)}
                        >
                          pesquisa
                        </Link>
                        <Link
                          className="btn btn-outline-secondary mx-2"
                          onClick={() => deletarUsuario(usuarioData.id)}
                        >
                          Deletar
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NewScrollTable;
