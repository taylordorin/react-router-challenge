import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

const Layout = (props) => {
 return(
   <div>
      <BackButton />
      <span>
        <Link to='/'> Home </Link>
        <Link to='/resume'> Jane's Resume </Link>
        <Link to='/projects'> Jane's Project </Link>
      </span>
     <h1 className="page-title text-center"> Jane Jupiter, Developer </h1>
     { props.children }
   </div>
 )
}

export default Layout;
