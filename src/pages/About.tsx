import React from 'react';
import { Link } from 'react-router-dom';


const ProfilePage: React.FC = () => {

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
    
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4 mb-sm-5">
            <div className="card card-style1 border-0">
              <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <img src="/animationgirl.jpg" alt="girlImage" />
                  </div>
                  <div className="col-lg-6 px-xl-10">
                    <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                      <h3 className="h2 text-white mb-0">Jane Doe</h3>
                      <span className="text-primary">Interior Designer</span>
                    </div>
                    <ul className="list-unstyled mb-1-9">
                      <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Position:</span> Interior Designer</li>
                      <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Experience:</span> 10 Years</li>
                      <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email:</span> JaneDoe@mail.com</li>
                      <li className="display-28"><span className="display-26 text-secondary me-2 font-weight-600">Phone:</span> 507 - 541 - 4567</li>
                    </ul>
                    <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                      <li><a href="#!"><i className="ti-twitter-alt"></i></a></li>
                      <li><a href="#!"><i className="ti-facebook"></i></a></li>
                      <li><a href="#!"><i className="ti-pinterest"></i></a></li>
                      <li><a href="#!"><i className="ti-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-4 mb-sm-5">
            <div>
              <span className="section-title text-primary mb-3 mb-sm-4">About Me</span>
              <p>Hello, I’m Jane Doe, a graphic designer with a passion for creating meaningful designs that make a lasting impact. With 10 years of experience, I’ve worked with clients across a range of industries, from healthcare to tech startups. My specialties include branding, illustration, and UX design, and I’m always looking for ways to push the boundaries of what’s possible in design.</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12 mb-4 mb-sm-5">
                <div className="mb-4 mb-sm-5">
                  <span className="section-title text-primary mb-3 mb-sm-4">Skill</span>
                  <div className="progress-text">
                    <div className="row">
                      <div className="col-6">Creativity</div>
                      <div className="col-6 text-end">80%</div>
                    </div>
                  </div>
                  <div className="custom-progress progress progress-medium mb-3" style={{ height: '4px' }}>
                    <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{ width: '80%' }} aria-valuemax={100} aria-valuemin={0} aria-valuenow={10} role="progressbar"></div>
                  </div>
                  <div className="progress-text">
                    <div className="row">
                      <div className="col-6">Collaboration</div>
                      <div className="col-6 text-end">90%</div>
                    </div>
                  </div>
                  <div className="custom-progress progress progress-medium mb-3" style={{ height: '4px' }}>
                    <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{ width: '90%' }} aria-valuemax={100} aria-valuemin={0} aria-valuenow={70} role="progressbar"></div>
                  </div>
                  <div className="progress-text">
                    <div className="row">
                      <div className="col-6">Attention to detail</div>
                      <div className="col-6 text-end">50%</div>
                    </div>
                  </div>
                  <div className="custom-progress progress progress-medium mb-3" style={{ height: '4px' }}>
                    <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{ width: '50%' }} aria-valuemax={100} aria-valuemin={0} aria-valuenow={70} role="progressbar"></div>
                  </div>
                  <div className="progress-text">
                    <div className="row">
                      <div className="col-6">Time Management</div>
                      <div className="col-6 text-end">60%</div>
                    </div>
                  </div>
                  <div className="custom-progress progress progress-medium" style={{ height: '4px' }}>
                    <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{ width: '60%' }} aria-valuemax={100} aria-valuemin={0} aria-valuenow={70} role="progressbar"></div>
                  </div>
                </div>
                <div>
                  <span className="section-title text-primary mb-3 mb-sm-4">Education</span>
                  <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                  <p className="mb-1-9">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default ProfilePage;
