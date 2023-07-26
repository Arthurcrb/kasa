import React from 'react';
import logokasa from '../../assets/images/logokasa.png';
import {Link} from "react-router-dom";


const logo = () => {
  return (
      <div className="flex-fill">
      <Link to="/"><img src={logokasa} alt="logo Kasa" /></Link>
      </div>
   ) 
};

export default logo;