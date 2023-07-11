import React from 'react';
import Layout from '../../../../src/components/Layout';
import Link from 'next/link';
import EDDCLheader from '../../../../models/EDDCLheader';
import EDDCLdetail from '../../../../models/EDDCLdetail';
import db from '../../../../utils/connectMongo';
import Maestroprods from '../../../../models/Maestroprods';

export default function ScreenEDDCL({
  EDDCLheaders,
  EDDCLdetails,
  MaestroProd,
}) {
  let cabecera = [];
  let cabecera2 = [];
  let detalles = [];
  let junto = [];
  let maestroItems = [];

  //console.log(MaestroProd);

  MaestroProd.forEach((element) => {
    maestroItems.push({
      codigo: element.material,
      matptname: element.materialptname,
      tipolata: element.tipolata,
      desc: element.descripcion,
    });
  });

  EDDCLdetails.forEach((element) => {
    detalles.push({
      idpropio: element._id,
      id: element.headid,
      horanow: element.horanow,
      codigo: element.codigo,
      cabeza: element.cabeza,
      anchomin: element.anchomin,
      anchomax: element.anchomax,
      espesormin: element.espesormin,
      espesormax: element.espesormax,
      profundmin: element.profundmin,
      profundmax: element.profundmax,
      ganchocuerpomin: element.ganchocuerpomin,
      ganchocuerpomax: element.ganchocuerpomax,
      ganchotapamin: element.ganchotapamin,
      ganchotapamax: element.ganchotapamax,
      traslapemin: element.traslapemin,
      traslapemax: element.traslapemax,
      arrugas: element.arrugas,
      bandaimp: element.bandaimp,
      fabricalatas: element.fabricalatas,
      observaciones: element.observaciones,
      createdAt: element.createdAt,
      updatedAt: element.updatedAt,
    });
  });

  EDDCLheaders.forEach((element) => {
    cabecera.push({
      id: element._id,
      datenow: element.datenow,
      tapadora: element.tapadora,
      tipolata: element.tipolata,
      producto: element.producto,
      createdAt: element.createdAt,
      cosas: [],
    });
  });

  EDDCLheaders.forEach((element) => {
    cabecera2.push({
      id: element._id,
      datenow: element.datenow,
      tapadora: element.tapadora,
      tipolata: element.tipolata,
      producto: element.producto,
      productoname: '',
      createdAt: element.createdAt,
      cosas: [],
    });
  });

  for (let i = 0; i < cabecera2.length; i++) {
    for (let j = 0; j < detalles.length; j++) {
      if (cabecera2[i].id === detalles[j].id) {
        cabecera2[i].cosas.push(detalles[j]);
      }
    }
  }

  for (let i = 0; i < cabecera2.length; i++) {
    const productoID = cabecera2[i].producto.toString();

    for (let j = 0; j < maestroItems.length; j++) {
      if (maestroItems[j].codigo.toString() === productoID) {
        cabecera2[i].productoname = maestroItems[j].desc;
        break;
      }
    }
  }

  // list de dias

  let dias = [];

  cabecera2.forEach((element) => {
    dias.push(element.datenow);
  });

  const uniqueDates = [];
  const seenDates = {};

  for (const dateString of dias) {
    if (!seenDates[dateString]) {
      seenDates[dateString] = true;
      uniqueDates.push(dateString);
    }
  }

  let cb2 = cabecera2;
  cb2.reverse();

  console.log(cabecera2);

  // limpiar fecha y llamar por fecha

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <Link href="https://i.ibb.co/9GdTS3m/eddcl.png">
          <div className="button-borders">
            <button className="primary-button">Ver Version Fisica</button>
          </div>
        </Link>
      </div>
      <br />
      <div>
        <h1 className="text-2xl font-semi">Totales:</h1>
        <br />
        <div>
          <div className="items-center text-center ">
            <div className="flex ">
              <div className="text-left font-semi">
                COUNT de datos en Cabecera:
              </div>
              <div className="pl-2 text-right">{EDDCLheaders.length}</div>
            </div>
            <div className="flex ">
              <div className="text-left font-semi">
                COUNT de datos en Detalles:
              </div>
              <div className="pl-2 text-right ">{detalles.length}</div>
            </div>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-1 gap-5">
          {cabecera2.map((item) => (
            <div
              key={item.id}
              className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "
            >
              <div className="px-6 py-3 border-b-2 border-neutral-100 ">
                {item.productoname}
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                  Entradas: {item.cosas.length}
                </h5>
                <Link
                  legacyBehavior
                  key={item.id}
                  href={`/formularios/dashboard/eddcl/${item.id}`}
                >
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Ver detalle
                  </button>
                </Link>
              </div>
              <div className="px-6 py-3 border-t-2 border-neutral-100 ">
                {item.datenow}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const EDDCLheaders = await EDDCLheader.find().lean();
  const EDDCLdetails = await EDDCLdetail.find().lean();
  const MaestroProd = await Maestroprods.find().lean();
  return {
    props: {
      EDDCLheaders: EDDCLheaders.map(db.convertDocToObj),
      EDDCLdetails: JSON.parse(JSON.stringify(EDDCLdetails)),
      MaestroProd: JSON.parse(JSON.stringify(MaestroProd)),
    },
  };
}
