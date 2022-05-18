import React from 'react';
import './AsideCenter.scss';

import NavBar2 from '../NavBar2';
import Posts from '../Posts';

const AsideCenter = () => {
  return (
    <div className="AsideCenter">
      <div className="AsideCenter-Container">
        <div className="AsideCenter-Content">
          <NavBar2/>
          <Posts />
         </div>
      </div>
    </div>
  );
};

export default AsideCenter;