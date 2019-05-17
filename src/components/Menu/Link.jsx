import React from 'react';
import {Link as RouteLink} from 'react-router-dom';

const Link = (props) => {
  return (
    <RouteLink to={props.to} className={`${"nav-link " + (props.pathname == props.to? "active" : '')}`}>{props.title}</RouteLink>       
  );
};

export default Link;