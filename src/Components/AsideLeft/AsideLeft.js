import React from 'react';
import './AsideLeft.scss';


import Menu from '../Menu';
import SocialIcons from '../SocialIcons';
import News from '../News';


const AsideLeft = () => {
  return (
    <div className="AsideLeft">
      <div className="AsideLeft-Container">
        <div className="AsideLeft-Content">
          <Menu/>
        
        
          <SocialIcons />
          <News/>
          <News/>
         </div>
      </div>
    </div>
  );
};

export default AsideLeft;