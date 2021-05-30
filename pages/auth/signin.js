import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';
import Link from 'next/link';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { doRequest, errors } = useRequest({
  //   url: '/api/users/signin',
  //   method: 'post',
  //   body: {
  //     email,
  //     password,
  //   },
  //   onSuccess: () => Router.push('/'),
  // });

  const onSubmit = async (event) => {
    event.preventDefault();
    signIn();
    // await doRequest();
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
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
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New User? <Link href="/auth/signup">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};
