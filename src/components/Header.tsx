import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../app/page.module.css";

const Header: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-50">
        <div className="col-12 text-center">
          <div className="cover-image">
            <img src="/cover.jpg" alt="coverImg" className="img-fluid position-relative" />
          </div>
          <div className={`position-absolute bottom-0 start-50 translate-middle-x ${styles.profileImageContainer}`}>
            <img src="/profiling.jpg" alt="profileImg" className="rounded-circle" style={{ width: '100px', height: '100px' }} />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <ul className="nav col-12 col-md-auto mb-2 align-items-center flex-column justify-content-center text-dark">
          <li className="nav-item backGround"><Link to="/" className="nav-link px-2 text-dark mt-5">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link px-2 text-dark">About me</Link></li>
          <li className="nav-item"><Link to="/myCards" className="nav-link px-2 text-dark">My cards</Link></li>
          <li className="nav-item"><Link to="/team" className="nav-link px-2 text-dark">Team</Link></li>
          <li className="nav-item"><Link to="/reviews" className="nav-link px-2 text-dark">Reviews</Link></li>
          <li className="nav-item"><a href="https://anajananashvili7.github.io/final-project-20/" className="nav-link text-dark text-decoration-none">Website</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
