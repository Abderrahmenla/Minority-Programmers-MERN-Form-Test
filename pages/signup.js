import { useState } from 'react';
import Router from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Message from '../components/message';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Image from 'next/image';

export default function signup() {
  const [session] = useSession();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSigninGoogle = (e) => {
    e.preventDefault();
    signIn('google');
    console.log(session.user.name);
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
  };
  if (session) {
    return <Message variant="danger">You're already signed in</Message>;
  } else {
    return (
      <Container
        style={{
          padding: '5% 3%',
        }}
      >
        <Row>
          <Col className="register">
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
                Register for MPA
              </h2>
              <h5 style={{ color: '#fff', textAlign: 'center' }}>
                To keep connecting with us please register with your personal
                info
              </h5>
            </div>
          </Col>
          <Col style={{ background: '#fff' }}>
            <FormContainer>
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
          </Col>
        </Row>
      </Container>
    );
  }
}
