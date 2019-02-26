import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div>
      <h1>Top page</h1>
      <p>
        <Link to="/edit">Edit Page</Link>
      </p>
    </div>
  );
}
