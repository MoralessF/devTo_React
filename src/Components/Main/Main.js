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
<<<<<<< HEAD
          <div>
            <NavBar />
          </div>
          <div className="Home">
            <AsideLeft />
            <AsideCenter />
            <AsideRight />
          </div>
=======
       
        <div className='Home'>
        <AsideLeft />
          <AsideCenter/>
          <AsideRight />
        </div>
         
>>>>>>> 34d4fb9489389c3e185c5e8a9963a3b657fbafd2
        </div>
      </div>
    </div>
  );
};

export default Main;
