

import React from "react";
import UserService from "../services/UserService";
import "./card.css"

class UserComponent extends React.Component {


constructor(props){

    super(props)

    this.state = {

        users:[]


    }

}

//
componentDidMount(){

    UserService.getUsers().then((response)=>{

        this.setState({users: response.data})
    });
}
render(){

    return(

        <div className="card">
        <h1 className ="text-center">USUARIOS CADASTRADOS</h1>
        <div >

        <table className="table table-striped">

        <thead>

        <tr>

        <td>ID </td>
        <td>NOME </td>
        <td>SOBRENOME </td>
        <td>EMAIL</td>
        
        </tr>

        </thead>
        <tbody>

        {
            this.state.users.map(

                user => 
                <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.sobrenome}</td>
                <td>{user.email}</td>



                </tr>



            )


        }
        
        </tbody>
        
        
        
        
        
        </table>
        </div>

        
        
        
        
        </div>





    )



}

}

export default UserComponent;



