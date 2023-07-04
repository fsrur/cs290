import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav>
        {location.pathname !== '/' && <Link to="/">Home</Link>}
        {location.pathname !== '/add-exercise' && <Link to="/add-exercise">Add Exercise</Link>}
    </nav>
  );
}

export default Navigation;
