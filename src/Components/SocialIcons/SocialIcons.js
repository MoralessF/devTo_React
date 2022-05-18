import React from 'react';
import './SocialIcons.scss';



const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <div className="SocialIcons-Container">
        <div className="socialmedia d-flex justify-content-evenly mb-3 gap-3 p-3">
       
                <span><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></span>
                <span><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></span>
                <span><a href="#" className="github"><i className="fab fa-github"></i></a></span>
                <span><a href="#" className="instagram"><i className="fab fa-instagram"></i></a></span>
                <span><a href="#" className="twitch"><i className="fab fa-twitch"></i></a></span>
              
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;