import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
  const [session] = useSession();
  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut({ callbackUrl: 'http://localhost:3000/auth/signout' });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    Router.push('/auth/signup');
  };
  const handleProfile = (e) => {
    e.preventDefault();
    Router.push('/profile');
  };
  const links = [
    !session && { label: 'Join', href: '/auth/signup' },
    !session && { label: 'Sign In', href: '/auth/signin' },
    session && { label: 'Profile', href: '/profile' },
    session && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <Nav.Link
          key={href}
          onClick={
            label == 'Sign In'
              ? handleSignin
              : label == 'Sign Out'
              ? handleSignout
              : label == 'Join'
              ? handleSignup
              : handleProfile
          }
        >
          {label}
        </Nav.Link>
      );
    });

  return (
    <Navbar bg="light" variant="light">
      <Link href="/" passHref={true}>
        <Navbar.Brand>
          <Image src="/Mp.svg" alt="mp" width="64" height="64" />
        </Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link href="https://twitter.com/minorityprogram" passHref={true}>
          <Nav.Link key={7}>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            yalay
          </Nav.Link>
        </Link>
        <Link
          href="https://www.facebook.com/MinorityProgrammers"
          passHref={true}
        >
          <Nav.Link key={6}>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
            yolo
          </Nav.Link>
        </Link>
        <Link
          href="https://www.linkedin.com/company/minority-programmers/"
          passHref={true}
        >
          <Nav.Link key={5}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            yoo
          </Nav.Link>
        </Link>
        <Link
          href="https://www.instagram.com/minorityprogrammers/"
          passHref={true}
        >
          <Nav.Link key={4}>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            bara
          </Nav.Link>
        </Link>
      </Nav>
      <Nav className="d-flex justify-content-end">
        <Nav.Link key={1}>Service</Nav.Link>
        <Nav.Link key={2}>Events</Nav.Link>
        <Nav.Link key={3}>Learn</Nav.Link>
        {links}
      </Nav>
    </Navbar>
  );
}
