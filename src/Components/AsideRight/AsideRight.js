import React from 'react';
import './AsideRight.scss';

import News from '../News';
import Listings from '../Listings';


const AsideRight = () => {
  return (
    <div className="AsideRight">
      <div className="AsideRight-Container">
        <div className="AsideRight-Content">
        
          <News/>
          <Listings />
          <Listings />
          <Listings />
         </div>
      </div>
    </div>
  );
};

export default AsideRight;