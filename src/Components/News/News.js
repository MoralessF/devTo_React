import React from 'react';
import './News.scss';



const News = () => {
  return (
    <div className="News">
      <div className="News-Container">
        <div className="News-Content">
        <div className="card-body">
                <h5 className="card-title fs-5 text-secondary">DEV runs on 100% open source code known as <a href="#"
                    className="text-decoration-none">Forem</a>. Contribute to the codebase or host your own!</h5>
                <p className="card-text">Some quick example text to build</p>
          </div>
              <div className="card-body">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--0VA_opuX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r958p7649efealx01xe6.png"
                  className="card-img-top" alt="..."></img>
                <h5 className="card-title fs-5 text-primary">Immerse yourself in the WebAssemblyecosystem
                  <img src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-18.png" alt="" width="20" height="20"></img>
                </h5>
              </div>
        </div>
      </div>
    </div>
    
  );
};

export default News;