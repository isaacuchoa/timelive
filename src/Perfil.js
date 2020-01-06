/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Perfil = ({user}) => (
    <div>
        <div className="row">
            <div className="col-md-4">
                <div className="card" style={{width: '18rem;'}}>
                    <img className="card-img-top" src={user.avatar_url}/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Apelido:
                                <span className="badge badge-success">{user.login}</span>
                            </li>
                            <li className="list-group-item">
                                Biografia:
                                <span className="badge badge-success">{user.bio}</span>
                            </li>
                            <li className="list-group-item">
                                URL:
                                <span className="badge badge-success">{user.html_url}</span>
                            </li>
                           
                        </ul>                   
                </div>
            </div>

        </div>
    </div>
)

export default Perfil;