import React from 'react';
import './styles/ConnectedSCDB.css'; // Make sure the CSS file is correctly linked

function ConnectedSCDB({ databases }) {
  return (
    <div className="connected-scdb">
      <div className="connected-scdb-header">Connected SCDB</div>
      <ul>
        {databases.map((db, index) => (
          <li key={index}>
            <input type="checkbox" id={db} name={db} />
            <label htmlFor={db}>{db}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConnectedSCDB;
