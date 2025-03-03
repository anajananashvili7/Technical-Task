import React from 'react';
import { Link } from 'react-router-dom';



const MyCards: React.FC = () => {
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
    <div>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">My Cards</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('b1.avif')" }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('b3.jpg')" }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                    <small>Pakistan</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('b1.png')" }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MyCards;
