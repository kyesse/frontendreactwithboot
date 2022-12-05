import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import fetchData from "../services/UserService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SearchAppBar from "./PrimarySearchAppBar";
import ResponsiveStack from "./StackMenu";
import DividerStack from "./StackMenu";
import BoxSx from "./StackMenu";
//import Button from '@mui/material/Button';

const TabelaUsuariosNew = () => {
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




  return (
    
    <div >
<PrimarySearchAppBar/>
        <Grid container spacing={0}>
      <Grid item xs={12} >
      
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead></TableHead>

            <TableRow>
              
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Sobrenome</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
            <TableBody>
              
              {usuario.map((usuarioData) => (
                <TableRow
                  key={usuarioData.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 200 } }}
                >
                  <TableCell align="right">{usuarioData.id}</TableCell>
                  <TableCell align="right">{usuarioData.nome}</TableCell>
                  <TableCell align="right">{usuarioData.sobrenome}</TableCell>
                  <TableCell align="right">{usuarioData.email}</TableCell>
                  <TableCell align="right"> <Link
                    className="btn btn-outline-secondary mx-2"
                    to={`/viewuser/${usuarioData.id}`}
                  >
                    View
                  </Link>
                  
                  
                  <Link
                    className="btn btn-outline-secondary mx-2"
                    to={`/editusers/${usuarioData.id}`}
                  >
                    Editar
                  </Link>
                  <Link
                    className="btn btn-outline-secondary mx-2"
                    to={`/search/${usuarioData.nome}`}onClick={() => searchUser(usuarioData.nome)}
                  >
                    Search
                  </Link>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deletarUsuario(usuarioData.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    aria-label="search"
                    onClick={(e) =>  searchUser2(usuarioData.nome)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  
                  </TableCell>

                 
                </TableRow>
                
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
       
        </Grid>
       </Grid>
    </div>
  );
};

export default TabelaUsuariosNew;
