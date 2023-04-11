import EDDCLdetail from '../../models/EDDCLdetail';
import db from '../../utils/connectMongo';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  var time = new Date();
  const tiempoahora = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const {
    horanow,
    headid,
    codigo,
    cabeza,
    anchomin,
    anchomax,
    espesormin,
    espesormax,
    profundmin,
    profundmax,
    ganchocuerpomin,
    ganchocuerpomax,
    ganchotapamin,
    ganchotapamax,
    traslapemin,
    traslapemax,
    arrugas,
    bandaimp,
    fabricalatas,
    observaciones,
  } = req.body;

  await db.connect();

  const newEDDCL = new EDDCLdetail({
    horanow: tiempoahora,
    headid,
    codigo,
    cabeza,
    anchomin,
    anchomax,
    espesormin,
    espesormax,
    profundmin,
    profundmax,
    ganchocuerpomin,
    ganchocuerpomax,
    ganchotapamin,
    ganchotapamax,
    traslapemin,
    traslapemax,
    arrugas,
    bandaimp,
    fabricalatas,
    observaciones,
  });

  console.log(newEDDCL);

  const eddcl = await newEDDCL.save();
  await db.disconnect();
  res.status(201).send({
    message: 'Detail Creado!',
    _id: eddcl._id,
    headid: eddcl.headid,
    horanow: eddcl.tiempoahora,
    codigo: eddcl.codigo,
    cabeza: eddcl.cabeza,
    anchomin: eddcl.anchomin,
    anchomax: eddcl.anchomax,
    espesormin: eddcl.espesormin,
    espesormax: eddcl.espesormax,
    profundmin: eddcl.profundmin,
    profundmax: eddcl.profundmax,
    ganchocuerpomin: eddcl.ganchocuerpomin,
    ganchocuerpomax: eddcl.ganchocuerpomax,
    ganchotapamin: eddcl.ganchotapamin,
    ganchotapamax: eddcl.ganchotapamax,
    traslapemin: eddcl.traslapemin,
    traslapemax: eddcl.traslapemax,
    arrugas: eddcl.arrugas,
    bandaimp: eddcl.bandaimp,
    fabricalatas: eddcl.fabricalatas,
    observaciones: eddcl.observaciones,
  });
}

export default handler;
