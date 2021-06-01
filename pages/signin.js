import { useState } from 'react';
import { signIn, useSession } from 'next-auth/client';
import Link from 'next/link';
import Router from 'next/router';
import Message from '../components/message';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from 'mdbreact';

export default function signin() {
  const [session] = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSigninGoogle = (e) => {
    e.preventDefault();
    signIn('google');
  };
  const handleSigninFacebook = (e) => {
    e.preventDefault();
    signIn('facebook');
  };
  const handleSigninLinkedIn = (e) => {
    e.preventDefault();
    signIn('linkedin');
  };
  const handleSigninGithub = (e) => {
    e.preventDefault();
    signIn('github');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    Router.push(`/profile`);
  };
  if (session) {
    return <Message variant="danger">You're already signed in</Message>;
  } else {
    return (
      <MDBContainer
        style={{
          padding: '4% 0%',
        }}
      >
        <MDBRow>
          <MDBCol
            style={{
              padding: 'auto auto',
              margin: 'auto auto',
            }}
            md="5"
          >
            <form onSubmit={onSubmit}>
              <MDBCard>
                <div className="header pt-3 peach-gradient">
                  <MDBRow className="d-flex justify-content-center">
                    <h3 className="white-text mb-3 pt-3 font-weight-bold">
                      Log in
                    </h3>
                  </MDBRow>
                  <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                    <Link href="#">
                      <a
                        onClick={handleSigninFacebook}
                        className="fa-lg p-2 m-2 fb-ic"
                      >
                        <MDBIcon
                          fab
                          icon="facebook-f"
                          size="lg"
                          className="white-text"
                        />
                      </a>
                    </Link>
                    <Link href="#">
                      <a
                        onClick={handleSigninLinkedIn}
                        className="fa-lg p-2 m-2 tw-ic"
                      >
                        <MDBIcon fab className="fa-linkedin white-text fa-lg" />
                      </a>
                    </Link>
                    <Link href="#">
                      <a
                        onClick={handleSigninGithub}
                        className="fa-lg p-2 m-2 tw-ic"
                      >
                        <MDBIcon fab className="fa-github white-text fa-lg" />
                      </a>
                    </Link>
                    <Link href="#">
                      <a
                        onClick={handleSigninGoogle}
                        className="fa-lg p-2 m-2 gplus-ic"
                      >
                        <MDBIcon
                          fab
                          className="fa-google-plus-g white-text fa-lg"
                        />
                      </a>
                    </Link>
                  </MDBRow>
                </div>
                <MDBCardBody className="mx-4 mt-4">
                  <MDBInput
                    label="Your email"
                    group
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    validate
                  />
                  <MDBInput
                    label="Your password"
                    group
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    validate
                    containerClass="mb-0"
                  />
                  <p className="font-small grey-text d-flex justify-content-end">
                    Forgot
                    <a
                      href="#!"
                      className="dark-grey-text ml-1 font-weight-bold"
                    >
                      Password?
                    </a>
                  </p>
                  <MDBRow className="d-flex align-items-center mb-4 mt-5">
                    <MDBCol md="5" className="d-flex align-items-start">
                      <div className="text-center">
                        <MDBBtn
                          color="grey"
                          rounded
                          type="submit"
                          className="z-depth-1a"
                        >
                          Log in
                        </MDBBtn>
                      </div>
                    </MDBCol>
                    <MDBCol md="7" className="d-flex justify-content-end">
                      <p className="font-small grey-text mt-3">
                        Don't have an account?
                        <a
                          href="#!"
                          className="dark-grey-text ml-1 font-weight-bold"
                        >
                          Sign up
                        </a>
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
