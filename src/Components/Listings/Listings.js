import React from 'react';
import './Listings.scss';

const Listings = () => {
  return (
    <div className="Listings">
      <div className="Listings-Container">
        <div className="Listings-Content">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            <p className="mb-1"> [Deepgram x DEV Hackathon Submission Post Placeholder Title]</p>
            <small className="text-muted">collabs</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <p className="mb-1"> Generate video thumbnails with vanilla JS, ReactJS. Like YouTube has done
              <small>frontend completely</small></p>
            <small className="text-muted">education</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <p className="mb-1">Render-Atlanta 2022 | 50+Speakers | June 1 - 4 | Front-End Engineering & Web3</p>
            <small className="text-muted">collabs</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <p className="mb-1"> NotDB: Innovative database engine for Node.js-fully serializable, atomic transactions
              backed by cloud storage</p>
            <small className="text-muted">products</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <p className="mb-1">Render-Atlanta 2022 | 50+Speakers | June 1 - 4 | Front-End Engineering & Web3</p>
            <small className="text-muted">collabs</small>
          </a>
        </div>
         </div>
      </div>
    </div>
  );
};

export default Listings;