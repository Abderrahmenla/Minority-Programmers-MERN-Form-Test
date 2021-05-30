import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import { signIn, useSession } from 'next-auth/client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Message from '../../components/message';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';
import Image from 'next/image';

export default () => {
  const [session] = useSession();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/signup',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });
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
    await doRequest();
  };
  if (session) {
    return <Message variant="danger">You're already signed in</Message>;
  } else {
    return (
      <Container className="mx-auto my-2">
        <Row>
          <Col
            style={{
              backgroundImage:
                'url(' +
                'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' +
                ')',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Image src="/mp_asset_icon.svg" alt="mp" width="64" height="64" />
            <div>
              <h1>yolo</h1>
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
                <Row>
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
                {errors}
              </Form>
            </FormContainer>
          </Col>
        </Row>
      </Container>
    );
  }
};
