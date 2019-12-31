import React from 'react';
const Repositorio = ({Repositorio}) => (
    <div className="card card-body mb-2">
        <div className="col-md-6">
<a href="repo.html_url" target="_blank">{Repositorio.name}</a>
        </div>
        <div className="col-md-6">
            <span className="badge badge-primary">Estrelas:{Repositorio.stargazers_count}</span>
            <span className="badge badge-primary">Assistindo:{Repositorio.watchers_count}</span>
            <span className="badge badge-primary">Compartilhamento:{Repositorio.forks_count}</span>
        </div>
    </div>

)
export default Repositorio;