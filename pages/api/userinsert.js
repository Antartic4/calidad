import User from '../../models/User';
import db from '../../utils/connectMongo';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }
  const { first, last, email, phone } = req.body;

  await db.connect();

  const newUser = new User({
    first,
    last,
    email,
    phone,
  });

  const user = await newUser.save();
  await db.disconnect();
  res.status(201).send({
    message: 'Usuario creado!',
    _id: user._id,
    first: user.first,
    last: user.last,
    email: user.email,
    phone: user.phone,
  });
}

export default handler;
