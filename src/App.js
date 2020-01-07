import React, { Component } from 'react';
import Nav from './Nav';
import Perfil from './Perfil';
import Repo from './Repo';
import axios from 'axios';
import './index.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

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
    const styleMap = {
      width: '80%',
      height: '50%',
      marginTop: '40px',
      marginLeft: '20px',
      
    }
    return( 
      <div className='container'>      
        <div className="row"> 
        <div className="col-md-1 mt-4"></div>         
          <div className="col-md-5 mt-4">
                <Perfil user={user}></Perfil>                     
          </div>
          <div className="col-md-6 mt-4">
            {repos.map(repo => <Repo key={repo.url} repo={repo} />)}
          </div>                            
        </div>
        <div className='row' >
        <Map google={this.props.google} style={styleMap}  zoom={5}> 
        <Marker onClick={this.onMarkerClick}
                name={'Localização'} /> 
       
        </Map>
        </div>
      </div>  

    );
  }
 
  render(){    
  return (
    <div className="App">     
      <Nav/>
      
      <div className="container">
        <div className='row'>        
          <div className='col-md-1 users '></div>
          <div className='card card-body col-md-11'>
          <input onChange={this.getUser} id="buscar" type="text" className="form-control" 
              placeholder="Digite aqui seu usuário" />
          </div>
      </div>
           
              
           
        {this.state.user.length !== 0 ? this.renderPerfil() : null}
      </div>     
    </div> 
     
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('')
})(App)





