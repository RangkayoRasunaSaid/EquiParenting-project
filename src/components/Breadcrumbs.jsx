// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length < 2) {
    // Return null if it's not 2 levels deep
    return null;
  }

  return (
    <nav className='ps-4 pb-3'>
      <ul className='flex font-bold' style={{color:"#a49eb5"}}>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={segment}>
            <li>
              <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`} style={{color: '#a49eb5'}} className='no-underline'>
                {titleCase(segment.replace('-', ' '))}
              </Link>
            </li>
            {index < pathSegments.length - 1 && <span className='mx-2'>{'>'}</span>}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

// Helper function to convert a string to title case
function titleCase(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

export default Breadcrumbs;
