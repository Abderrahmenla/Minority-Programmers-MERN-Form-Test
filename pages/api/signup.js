import { connectToDatabase } from '../../util/mongodb';

export default async function user(req, res) {
  const { db } = await connectToDatabase();
  const data = req.query;
  data.proLang = '';
  data.nativeLang = '';
  data.passions = '';
  data.image = '';
  try {
    const response = await db.collection('profile').insertOne(data);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}
