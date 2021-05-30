import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../util/mongodb';
import * as mongodb from 'mongodb';

export default async (req, res) => {
  const session = await getSession({ req });
  const { db } = await connectToDatabase();
  if (session) {
    const data = req.query;
    data._id = new mongodb.ObjectId(session.id);
    const response = await db.collection('profile').insertOne(data);
    res.json(response);
  } else {
    res.send({
      error: 'You need to be signed in.',
    });
  }
};
