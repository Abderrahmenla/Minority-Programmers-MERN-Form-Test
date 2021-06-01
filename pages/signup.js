import { useState } from 'react';
import { signIn, useSession } from 'next-auth/client';
import Link from 'next/link';
import Message from '../components/message';
import Image from 'next/image';
import Router from 'next/router';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
} from 'mdbreact';

export default function signup() {
  const [session] = useSession();
  const [name, setName] = useState('');
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
    const data = await fetch(
      `http://localhost:3000/api/signup?email=${email}&password=${password}&name=${name}`
    );
    Router.push('/profile');
  };
  if (session) {
    return <Message variant="danger">You're already signed in</Message>;
  } else {
    return (
      <MDBContainer
        style={{
          padding: '5% 3%',
        }}
      >
        <MDBRow>
          <MDBCol className="register">
            <Image src="/mp_asset_icon.svg" alt="mp" width="64" height="64" />
            <div
              style={{
                width: '400px',
                height: '300px',
                position: 'absolute',
                top: '40%',
                left: '15%',
              }}
            >
              <h2
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: '37px',
                  justifyContent: 'left',
                }}
              >
                Register for MP
              </h2>
              <h5 style={{ color: '#fff', textAlign: 'center' }}>
                To keep connecting with us please register with your personal
                info
              </h5>
            </div>
          </MDBCol>
          <MDBCol>
            {/* <FormContainer>
              <Form onSubmit={onSubmit}>
                <h1>Sign Up</h1>
                <Col>
                  Already have an account?
                  <Link href="/auth/signin">
                    <a>Login</a>
                  </Link>
                </Col>
                <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Col>
                    <Button onClick={handleSigninGithub}>
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </Button>
                  </Col>
                  <Col>
                    <Button onClick={handleSigninFacebook}>
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </Button>
                  </Col>
                  <Col>
                    <Button onClick={handleSigninGoogle}>
                      <FontAwesomeIcon icon={['fab', 'google']} />
                    </Button>
                  </Col>
                  <Col>
                    <Button onClick={handleSigninLinkedIn}>
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </Button>
                  </Col>
                </Row>

                <Form.Group controlId="name">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">
                  Register
                </Button>
              </Form>
            </FormContainer>
            */}
            <form onSubmit={onSubmit}>
              <MDBCard>
                <MDBCardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="black-text mb-5">
                      <strong>Sign Up</strong>
                    </h3>
                  </div>
                  <div className="grey-text">
                    <MDBInput
                      label="Full name"
                      icon="user"
                      group
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Email"
                      icon="envelope"
                      onChange={(e) => setEmail(e.target.value)}
                      group
                      type="email"
                    />

                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="exclamation-triangle"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                  <div className="text-center mb-3">
                    <MDBBtn
                      gradient="red"
                      type="submit"
                      rounded
                      className="btn-block z-depth-1a"
                    >
                      Register
                    </MDBBtn>
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                    or Register with:
                  </p>
                  <div className="row my-3 d-flex justify-content-center">
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="mr-md-3 z-depth-1a"
                      onClick={handleSigninGoogle}
                    >
                      <MDBIcon
                        fab
                        icon="google-plus-g"
                        className="pink-text text-center"
                      />
                    </MDBBtn>
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="mr-md-3 z-depth-1a"
                      onClick={handleSigninLinkedIn}
                    >
                      <MDBIcon fab icon="linkedin" className="pink-text" />
                    </MDBBtn>
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="z-depth-1a"
                      onClick={handleSigninGithub}
                    >
                      <MDBIcon fab icon="github" className="pink-text" />
                    </MDBBtn>
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="mr-md-3 z-depth-1a"
                      onClick={handleSigninFacebook}
                    >
                      <MDBIcon
                        fab
                        icon="facebook-f"
                        className="pink-text text-center"
                      />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
                <MDBModalFooter className="mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">
                    You already an account?
                    <Link href="/signin">
                      <a className="pink-text ml-1">Login</a>
                    </Link>
                  </p>
                </MDBModalFooter>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
