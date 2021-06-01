import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const Footer = () => {
  return (
    <MDBFooter
      color="unique-color-dark"
      className="page-footer font-small pt-0"
    >
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>About</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: '60px' }}
            />
            <p>
              We are an international network of programmers unifying together
              to deliver socially impactful software solutions.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Services</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: '60px' }}
            />
            <p>
              <a href="#!">Consultancy</a>
            </p>
            <p>
              <a href="#!">Mentorship</a>
            </p>
            <p>
              <a href="#!">Training/Onboarding</a>
            </p>
            <p>
              <a href="#!">MPUniversity</a>
            </p>
            <p>
              <a href="#!">CodeCamp</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Explore</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: '60px' }}
            />
            <p>
              <a href="#!">About</a>
            </p>
            <p>
              <a href="#!">Events</a>
            </p>
            <p>
              <a href="#!">Join a Course</a>
            </p>
            <p>
              <a href="#!">Become a Sponsor</a>
            </p>
            <p>
              <a href="#!">Careers</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: '60px' }}
            />
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href="https://www.MDBootstrap.com"> Minorityprogrammers.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
