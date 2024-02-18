import React from 'react';

export default function ModuleList({ modules }) {
  

  return (
    <div>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-success">Modules</span>
        <span className="badge bg-success rounded-pill">{modules.length}</span>
      </h4>
      <ul className="list-group mb-3">
        {modules.map((module, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">{module.code}</h6>
              <small className="text-muted">{module.moduleName}</small>
            </div>
            <span className="text-muted">Credits: {module.credit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


