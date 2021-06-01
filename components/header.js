import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import Router from 'next/router';
import Image from 'next/image';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from 'mdbreact';
import { Router as Yolo } from 'react-router-dom';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();
export default function Header() {
  const [session] = useSession();
  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut({ callbackUrl: 'http://localhost:3000/signout' });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    Router.push('/signup');
  };
  const handleProfile = (e) => {
    e.preventDefault();
    Router.push('/profile');
  };
  const links = [
    !session && { label: 'Join', href: '/signup' },
    !session && { label: 'Sign In', href: '/signin' },
    session && { label: 'Profile', href: '/profile' },
    session && { label: 'Sign Out', href: '/signout' },
  ];

  return (
    <Yolo history={history}>
      <MDBNavbar color="white" dark expand="md">
        <Link href="/" passHref={true}>
          <MDBNavbarBrand>
            <Image src="/Mp.svg" alt="mp" width="64" height="64" />
          </MDBNavbarBrand>
        </Link>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink
              className="waves-effect waves-light "
              to="https://twitter.com/minorityprogram"
            >
              <MDBIcon fab icon="twitter" className="black-text pr-3" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              className="waves-effect waves-light"
              to="https://www.facebook.com/MinorityProgrammers"
            >
              <MDBIcon fab icon="facebook" className="black-text pr-3" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              className="waves-effect waves-light"
              to="https://www.linkedin.com/company/minority-programmers/"
            >
              <MDBIcon fab icon="linkedin" className="black-text pr-3" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              className="waves-effect waves-light"
              to="https://www.instagram.com/minorityprogrammers/"
            >
              <MDBIcon fab icon="instagram" className="black-text pr-3" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active>
            <Link
              href="https://minorityprogrammers.com/services"
              passHref={true}
            >
              <a className="nav-link black-text">Service</a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="https://minorityprogrammers.com/events" passHref={true}>
              <a className="nav-link black-text">Events</a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="https://minorityprogrammers.com/learn" passHref={true}>
              <a className="nav-link black-text">Learn</a>
            </Link>
          </MDBNavItem>
          {session && (
            <>
              <MDBNavItem>
                <Link href="/profile" className="nav-link black-text">
                  <a className="nav-link black-text">Profile</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/signout">
                  <a onClick={handleSignout} className="nav-link black-text">
                    Signout
                  </a>
                </Link>
              </MDBNavItem>
            </>
          )}
          {!session && (
            <>
              <MDBNavItem>
                <Link href="/signup">
                  <a className="nav-link black-text">Join</a>
                </Link>
              </MDBNavItem>
            </>
          )}
        </MDBNavbarNav>
      </MDBNavbar>
    </Yolo>
  );
}
