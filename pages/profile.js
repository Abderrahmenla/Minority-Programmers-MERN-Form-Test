import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Loader from '../components/loader';
import Message from '../components/message';
import { useSession } from 'next-auth/client';
import Image from 'next/image';
import Router from 'next/router';

export default function profile() {
  const [session, loading] = useSession();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [progLang, setProgLang] = useState('');
  const [nativeLang, setNativeLang] = useState('');
  const [passions, setPassions] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `https://minority-programmers-mern-form-test.vercel.app/api/user?progLang=${progLang}&nativeLang=${nativeLang}&passions=${passions}`
    );
    Router.push('/profile');
  };
  if (typeof window !== 'undefined' && loading) return <Loader />;
  if (!session) return <Message variant="danger">Please sign in</Message>;
  else {
    return (
      <Container style={{ background: '#fff' }}>
        <Row>
          <Col md={9}>
            <h2>User Profile</h2>
            <Image src={session.user.image} alt="mp" width="64" height="64" />
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder={session.user.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={session.user.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="progLang">
                <Form.Label>Programming languages</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={progLang}
                  value={progLang}
                  onChange={(e) => setProgLang(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="nativeLang">
                <Form.Label>Native languages</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={nativeLang}
                  value={nativeLang}
                  onChange={(e) => setNativeLang(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="passion">
                <Form.Label>Passions</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={passions}
                  value={passions}
                  onChange={(e) => setPassions(e.target.value)}
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

              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
