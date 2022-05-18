import React from 'react';
import './Main.scss';
import AsideLeft from '../AsideLeft';
import AsideRight from '../AsideRight';
import AsideCenter from '../AsideCenter';


const Main = () => {
  return (
    <div className="Main">
      <div className="Main-Container">
        <div className="Main-Content">
       
        <div className='Home'>
        <AsideLeft />
          <AsideCenter/>
          <AsideRight />
        </div>
         
        </div>
      </div>
    </div>
  );
};

export default Main;