/* eslint-disable jsx-a11y/alt-text */
import React from 'react';


const Perfil = ({user}) => (
    <div>
        <div className="row" >
            <div className="col-md-6">
                <div className="card">
                    <img className="card-img" src={user.avatar_url}/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item ">
                                Apelido:
                                <span className="item-card">{user.login}</span>
                            </li>
                            <li className="list-group-item">
                                Biografia:
                                <span className="item-card">{user.bio}</span>
                            </li>
                            <li className="list-group-item">
                                URL:
                                <span className="item-card">{user.html_url}</span>
                            </li>
                           
                        </ul>                   
                </div>
            </div>

        </div>
    </div>
)

export default Perfil;