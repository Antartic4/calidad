import EVCLheader from '../../models/EVCLheader';
import db from '../../utils/connectMongo';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  function getCurrentDate(separator = '-') {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
  }

  const datenow = getCurrentDate().toString();

  const { tipolata, producto } = req.body;

  await db.connect();

  const newEVCL = new EVCLheader({
    datenow,
    tipolata,
    producto,
  });

  console.log(newEVCL);

  const eddcl = await newEVCL.save();
  await db.disconnect();
  res.status(201).send({
    message: 'Header Creado!',
    _id: eddcl._id,
    datenow: eddcl.datenow,
    tipolata: eddcl.tipolata,
    producto: eddcl.producto,
  });
}

export default handler;
