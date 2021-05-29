import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

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
    !session && { label: 'Sign Up', href: '/auth/signup' },
    !session && { label: 'Sign In', href: '/auth/signin' },
    session && { label: 'Profile', href: '/profile' },
    session && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a
              className="nav-link"
              onClick={
                label == 'Sign In'
                  ? handleSignin
                  : label == 'Sign Out'
                  ? handleSignout
                  : label == 'Sign Up'
                  ? handleSignup
                  : handleProfile
              }
            >
              {label}
            </a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">
          <Image src="/Mp.svg" alt="mp" width="64" height="64" />
        </a>
      </Link>
      <Link href="https://twitter.com/minorityprogram" passHref={true}>
        <a>
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
      </Link>
      <Link href="https://www.facebook.com/MinorityProgrammers" passHref={true}>
        <a>
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
      </Link>
      <Link
        href="https://www.linkedin.com/company/minority-programmers/"
        passHref={true}
      >
        <a>
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </Link>
      <Link
        href="https://www.instagram.com/minorityprogrammers/"
        passHref={true}
      >
        <a>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
}
