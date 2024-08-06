import React from 'react';
import './styles/GeneralInformation.css'; // Ensure the CSS file is correctly linked

function GeneralInformation({ info }) {
  return (
    <div className="general-info">
      <h2 className="general-info-header">General Information</h2>
      <div className="info-list">
        {Object.entries(info).map(([key, value], index) => (
          <div key={index} className="info-item">
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralInformation;
