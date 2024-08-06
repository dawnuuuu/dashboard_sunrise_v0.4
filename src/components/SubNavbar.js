import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/SubNavbar.css';  // Make sure to create this CSS file

function SubNavbar() {
  return (
    <div className="sub-navbar">
      <NavLink to="/dashboard/general" activeClassName="active">General Information</NavLink>
      <NavLink to="/dashboard/scenarios" activeClassName="active">Scenarios</NavLink>
      <NavLink to="/dashboard/parameters" activeClassName="active">Parameters</NavLink>
      <NavLink to="/dashboard/meta-data" activeClassName="active">Meta-data</NavLink>
      <NavLink to="/dashboard/quality-metrics" activeClassName="active">Quality Metrics</NavLink>
    </div>
  );
}

export default SubNavbar;
