import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
  return (
    <>
 <div className="container-fluid">
      <ul className="nav col-12 col-md-auto mb-2 align-items-center flex-raw justify-content-center">
        <li className="nav-item"><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link px-2">About me</Link></li>
        <li className="nav-item"><Link to="/myCards" className="nav-link px-2">My cards</Link></li>
        <li className="nav-item"><Link to="/team" className="nav-link px-2">Team</Link></li>
        <li className="nav-item"><Link to="/reviews" className="nav-link px-2">Reviews</Link></li>
        <li className="nav-item"><a href="https://anajananashvili7.github.io/final-project-20/" className="text-decoration-none">Website</a></li>
      </ul>
    </div>
    
    <div className="container mt-3">
      <div className="mb-4 pb-3 text-center border-bottom border-warning">
        <h4 className="font-weight-bold text-warning mb-3" contentEditable={false}>Not Yet Convinced?</h4>
        <h1 className="font-weight-bold text-dark" contentEditable={false}>Read Customer Reviews</h1>
      </div>
      <ul className="list-unstyled row mx-auto text-center p-3">
        <li className="col-md-4 border-right border-bottom mb-3">
          <img 
            src="/avatar1.png" 
            className="w-25 rounded-circle mb-3 mt-3" 
            title="" 
            alt="" 
            data-edit="false" 
            data-editor="field" 
            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" 
          />
          <p className="font-weight-light" contentEditable={false}>" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 className="font-weight-bold text-dark" contentEditable={false}>Martha Stewart</h5>
          <small className="text-uppercase text-muted" contentEditable={false}>Business Woman - New York</small>
        </li>
        <li className="col-md-4 border-right border-bottom mb-3">
          <img 
            src="/avatar2.png" 
            className="w-25 rounded-circle mb-3 mt-3" 
            title="" 
            alt="" 
            data-edit="false" 
            data-editor="field" 
            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" 
          />
          <p className="font-weight-light" contentEditable={false}>" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 className="font-weight-bold text-dark" contentEditable={false}>Ariana Menage</h5>
          <small className="text-uppercase text-muted" contentEditable={false}>Recording Artist - Los Angeles</small>
        </li>
        <li className="col-md-4 border-bottom mb-3">
          <img 
            src="/avatar3.png" 
            className="w-25 rounded-circle mb-3 mt-3" 
            title="" 
            alt="" 
            data-edit="false" 
            data-editor="field" 
            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" 
          />
          <p className="font-weight-light" contentEditable={false}>" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 className="font-weight-bold text-dark" contentEditable={false}>Sean Carter</h5>
          <small className="text-uppercase text-muted" contentEditable={false}>Fund Manager - Chicago</small>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Reviews;



