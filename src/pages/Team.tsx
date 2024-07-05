import React from 'react';
import { Link } from 'react-router-dom';


const teamMembers = [
  { imgSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png', name: 'Virgie Perry', position: 'Athletic Trainer' },
  { imgSrc: 'https://bootdey.com/img/Content/avatar/avatar2.png', name: 'Virgie Perry', position: 'Athletic Trainer' },
  { imgSrc: 'https://bootdey.com/img/Content/avatar/avatar3.png', name: 'Virgie Perry', position: 'Athletic Trainer' },
  { imgSrc: 'https://bootdey.com/img/Content/avatar/avatar4.png', name: 'Virgie Perry', position: 'Athletic Trainer' },
  { imgSrc: 'https://bootdey.com/img/Content/avatar/avatar5.png', name: 'Virgie Perry', position: 'Athletic Trainer' },
  { imgSrc: 'https://bootdey.com/img/Content/avatar/avatar6.png', name: 'Virgie Perry', position: 'Athletic Trainer' },
  { imgSrc: 'https://bootdey.com/img/Content/avatar/avatar7.png', name: 'Virgie Perry', position: 'Athletic Trainer' },
  { imgSrc: 'https://bootdey.com/img/Content/avatar/avatar8.png', name: 'Virgie Perry', position: 'Athletic Trainer' },
];

const TeamArea: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <ul className="nav col-12 col-md-auto mb-2 align-items-center flex-row justify-content-center">
          <li className="nav-item"><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link px-2">About me</Link></li>
          <li className="nav-item"><Link to="/myCards" className="nav-link px-2">My cards</Link></li>
          <li className="nav-item"><Link to="/team" className="nav-link px-2">Team</Link></li>
          <li className="nav-item"><Link to="/reviews" className="nav-link px-2">Reviews</Link></li>
          <li className="nav-item"><a href="https://anajananashvili7.github.io/final-project-20/" className="text-decoration-none">Website</a></li>
        </ul>
      </div>

      <div className="team-area sp">
        <div className="container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card border-light">
                  <div className="card-img-top">
                    <img src={member.imgSrc} className="img-fluid" alt="Member Photo" />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="card-title">{member.name}</h4>
                    <h5 className="card-subtitle mb-2 text-muted">{member.position}</h5>
                    <div className="team-social">
                      <a href="#" className="btn btn-outline-secondary btn-sm"><i className="fa fa-facebook"></i></a>
                      <a href="#" className="btn btn-outline-secondary btn-sm"><i className="fa fa-twitter"></i></a>
                      <a href="#" className="btn btn-outline-secondary btn-sm"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;
