import React from 'react';
const Repo = ({repo}) => (
    <div className="card card-body mb-2">
        <div className="col-md-8">
<a href="repo.html_url" target="_blank">{repo.url}</a>
        </div>
        <div className="col-md-6">
            <span className="badge badge-primary">Estrelas:{repo.starred_url}</span>            
        </div>
    </div>

)
export default Repo;