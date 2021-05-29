import Head from 'next/head';
import { connectToDatabase } from '../util/mongodb';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

import { Button } from 'react-bootstrap';

export default function Home({ isConnected }) {
  const [session, loading] = useSession();
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {!session && (
          <>
            Not signed in
            <br />
            <Button onClick={signIn}>Sign In</Button>
          </>
        )}
        {session && (
          <>
            signed in a {session.user.email} <br />
            <div>You can now access our super secret pages</div>
            <Button
              onClick={signOut({
                callbackUrl: 'http://localhost:3000/auth/signout',
              })}
            >
              Sign Out
            </Button>
          </>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
