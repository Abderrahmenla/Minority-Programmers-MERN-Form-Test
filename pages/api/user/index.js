import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../util/mongodb';
import * as mongodb from 'mongodb';

export default async function user(req, res) {
  const session = await getSession({ req });
  const { db } = await connectToDatabase();
  if (session) {
    const data = req.query;
    data._id = new mongodb.ObjectId(session.id);
    console.log(session);
    data.name = session.user.name;
    data.email = session.user.email;
    data.image = session.user.image;
    try {
      await db
        .collection('profile')
        .replaceOne({ _id: data._id }, data, { upsert: true });
      res.status(200).json({ result: 'success' });
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  } else {
    res.send({
      error: 'You need to be signed in.',
    });
  }
}
