import React, { Component } from 'react';
import Nav from './Nav';
import Perfil from './Perfil';
import axios from 'axios';


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
  }
  
  render(){
    const {user} = this.state;
  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <div className="card card-body">
          <h1>Pesquisar usuários do github</h1>
          <p className="lead">Digite um nome</p>
          <input onChange={this.getUser} id="buscar" type="text" className="form-control"></input>
        </div>
        {user.length !== 0 ? <Perfil user={user}/> : null}
      </div>
    </div>
  );
  }
}

export default App;
