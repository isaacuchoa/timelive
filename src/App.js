import React, { Component } from 'react';
import Nav from './Nav';
import Perfil from './Perfil';
import Repo from './Repo';
import axios from 'axios';
import { Map, GoogleMapReact } from 'google-maps-react';


class App extends Component {
  constructor(){
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id:"Iv1.270c791b4c0bf66b",
        client_secret:"307dfcd7b4a067d8f02a23f80cc599ab597424a5",
        count: 7,
        sort: "created: asc"

      },
      user: [],
      repos:[]
    }    

    }
    getUser = (e) => {
      const user = e.target.value;
      const {url, client_id, client_secret, count, sort} = this.state.github;
      axios
          .get(
          `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
          ).then(({data}) => this.setState({user: data}));
      axios
          .get(
          `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&
           client_secret=${client_secret}`).then(({data}) => this.setState({repos: data}));
  }
  
  renderPerfil = () =>{
    const {user, repos} = this.state;

    return(
      <div className="row">
        <div className="col-md-7 mt-4">
            <Perfil user={user}></Perfil>                     
        </div>
        <div className="col-md-5 mt-6">
         {repos.map(repo => <Repo key={repo.url} repo={repo} />)}
         </div>              
      </div>
    )
  } 

  render(){    
  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <div className="card card-body">
          <h1>Usuários:</h1>
            <input onChange={this.getUser} id="buscar" type="text" className="form-control" placeholder="Digite aqui seu usuário"/>
        </div>
        {this.state.user.length !== 0 ? this.renderPerfil() : null}
      </div>
    </div> 

     
  );
  }
}

export default App;



