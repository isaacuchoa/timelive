import React from 'react';
const Repo = ({repo}) => (
    <div className="card card-body mb-2">
        <div className="col-md-6">
<a href="repo.html_url" target="_blank">{repo.starred_url}</a>
        </div>
        <div className="col-md-6">
            <span className="badge badge-primary">Estrelas:{repo.stargazers_count}</span>            
        </div>
    </div>

)
export default Repo;