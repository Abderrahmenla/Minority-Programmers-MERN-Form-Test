import { connectToDatabase } from '../util/mongodb';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

import { Button } from 'react-bootstrap';

export default function Home({ isConnected }) {
  const [session, loading] = useSession();
  const signoutHandler = (event) => {
    event.preventDefault();
    signOut({
      callbackUrl: 'http://localhost:3000/signout',
    });
  };
  if (typeof window !== 'undefined' && loading) return null;
  if (!session) {
    return (
      <>
        Not signed in
        <br />
        <Button onClick={signIn}>Sign In</Button>
      </>
    );
  } else {
    return (
      <>
        signed in a {session.user.email} <br />
        <div>You can now access our super secret pages </div>
        <Button onClick={signoutHandler}>Sign Out</Button>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
