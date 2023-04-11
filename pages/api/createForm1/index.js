import { getSession } from 'next-auth/react';
import Form1 from '../../../../models/Product';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });

  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Metodo no permitido' });
  }
};

const postHandler = async (req, res) => {
  await db.connect();
  const newForm1 = new Form1({
    name: 'nombre de prueba',
    slug: 'slug-prueba-' + Math.random(),
    image: '/images/test.jpg',
    price: 0,
    category: 'categoria de prueba',
    brand: 'marca de prueba',
    countInStock: 0,
    description: 'descripcion de prueba',
    rating: 0,
    numReviews: 0,
  });

  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: 'Producto creado satisfactoriamente', product });
};

const getHandler = async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
};

export default handler;
