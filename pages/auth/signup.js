import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import { signIn } from 'next-auth/client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
export default () => {
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

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      Already have an account?
      <Link href="/auth/signin">
        <a>Login</a>
      </Link>{' '}
      <br />
      <Button onClick={handleSigninGithub}>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </Button>
      <Button onClick={handleSigninFacebook}>
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </Button>
      <Button onClick={handleSigninGoogle}>
        <FontAwesomeIcon icon={['fab', 'google']} />
      </Button>
      <Button onClick={handleSigninLinkedIn}>
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </Button>
      <div className="form-group">
        <label>Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      {errors}
      <Button className="btn btn-primary">Register</Button>
    </form>
  );
};
