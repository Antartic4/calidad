import EVCLdetail from '../../models/EVCLdetail';
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
    fabricalatas,
    cabeza1,
    cabeza2,
    cabeza3,
    cabeza4,
    cabeza5,
    cabeza6,
    danos,
    estado,
    aceptacion,
    observaciones,
  } = req.body;

  await db.connect();

  const newEVCL = new EVCLdetail({
    horanow: tiempoahora,
    headid,
    codigo,
    fabricalatas,
    cabeza1,
    cabeza2,
    cabeza3,
    cabeza4,
    cabeza5,
    cabeza6,
    danos,
    estado,
    aceptacion,
    observaciones,
  });

  console.log(newEVCL);

  const evcl = await newEVCL.save();
  await db.disconnect();
  res.status(201).send({
    message: 'Detail Creado!',
    _id: evcl._id,
    headid: evcl.headid,
    horanow: evcl.tiempoahora,
    codigo: evcl.codigo,
    fabricalatas: evcl.fabricalatas,
    cabeza1: evcl.cabeza1,
    cabeza2: evcl.cabeza2,
    cabeza3: evcl.cabeza3,
    cabeza4: evcl.cabeza4,
    cabeza5: evcl.cabeza5,
    cabeza6: evcl.cabeza6,
    danos: evcl.danos,
    estado: evcl.estado,
    aceptacion: evcl.aceptacion,
    observaciones: evcl.observaciones,
  });
}

export default handler;
