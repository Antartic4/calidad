import React from 'react';
import Layout from '../../../../src/components/Layout';
import Link from 'next/link';
import db from '../../../../utils/connectMongo';
import Maestroprods from '../../../../models/Maestroprods';
import EVCLheader from '../../../../models/EVCLheader';
import EVCLdetail from '../../../../models/EVCLdetail';

export default function ScreenEDDCL({ EVCLheaders, EVCLdetails, MaestroProd }) {
  let cabecera = [];
  let cabecera2 = [];
  let detalles = [];
  let junto = [];
  let maestroItems = [];

  MaestroProd.forEach((element) => {
    maestroItems.push({
      codigo: element.material,
      matptname: element.materialptname,
      tipolata: element.tipolata,
      desc: element.descripcion,
    });
  });

  EVCLheaders.forEach((element) => {
    cabecera2.push({
      id: element._id,
      datenow: element.datenow,
      tipolata: element.tipolata,
      producto: element.producto,
      productoname: '',
      createdAt: element.createdAt,
      cosas: [],
    });
  });

  EVCLdetails.forEach((element) => {
    detalles.push({
      idpropio: element._id,
      id: element.headid,
      horanow: element.horanow,
      codigo: element.codigo,
      fabricalatas: element.fabricalatas,
      cabeza1: element.cabeza,
      cabeza2: element.cabeza,
      cabeza3: element.cabeza,
      cabeza4: element.cabeza,
      cabeza5: element.cabeza,
      cabeza6: element.cabeza,
      danos: element.danos,
      estado: element.estado,
      aceptacion: element.aceptacion,
      observaciones: element.observaciones,
      createdAt: element.createdAt,
      updatedAt: element.updatedAt,
    });
  });

  for (let i = 0; i < cabecera2.length; i++) {
    for (let j = 0; j < detalles.length; j++) {
      if (cabecera2[i].id === detalles[j].id) {
        cabecera2[i].cosas.push(detalles[j]);
      }
    }
  }

  MaestroProd.forEach((element) => {
    maestroItems.push({
      codigo: element.material,
      matptname: element.materialptname,
      tipolata: element.tipolata,
      desc: element.descripcion,
    });
  });

  for (let i = 0; i < cabecera2.length; i++) {
    const productoID = cabecera2[i].producto.toString();

    for (let j = 0; j < maestroItems.length; j++) {
      if (maestroItems[j].codigo.toString() === productoID) {
        cabecera2[i].productoname = maestroItems[j].desc;
        break;
      }
    }
  }
  cabecera2.reverse();

  console.log('cabecera2', cabecera2);

  // limpiar fecha y llamar por fecha

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <Link href="https://i.ibb.co/gRvS3np/evcl.png">
          <div className="button-borders">
            <button className="primary-button">Ver Version Fisica</button>
          </div>
        </Link>
      </div>
      <br />
      <div className="">
        <h1 className="text-2xl font-bold">Totales:</h1>

        <div className="">
          <div className="items-center font-bold text-center ">
            <div className="flex ">
              <div className="text-left">COUNT de datos en Cabecera:</div>
              <div className="pl-2 text-right">{EVCLheaders.length}</div>
            </div>
            <div className="flex ">
              <div className="text-left">COUNT de datos en Detalles:</div>
              <div className="pl-2 text-right">{detalles.length}</div>
            </div>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-2 gap-5">
          {cabecera2.map((item) => (
            <div
              key={item.id}
              className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            >
              <div className="px-6 py-3 border-b-2 border-neutral-100 dark:border-neutral-600 dark:text-neutral-50">
                {item.productoname}
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Entradas: {item.cosas.length}
                </h5>
                <Link
                  legacyBehavior
                  key={item.id}
                  href={`/formularios/dashboard/evcl/${item.id}`}
                >
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Ver detalle
                  </button>
                </Link>
              </div>
              <div className="px-6 py-3 border-t-2 border-neutral-100 dark:border-neutral-600 dark:text-neutral-50">
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
  const EVCLheaders = await EVCLheader.find().lean();
  const EVCLdetails = await EVCLdetail.find().lean();
  const MaestroProd = await Maestroprods.find().lean();
  return {
    props: {
      EVCLheaders: EVCLheaders.map(db.convertDocToObj),
      EVCLdetails: JSON.parse(JSON.stringify(EVCLdetails)),
      MaestroProd: JSON.parse(JSON.stringify(MaestroProd)),
    },
  };
}
