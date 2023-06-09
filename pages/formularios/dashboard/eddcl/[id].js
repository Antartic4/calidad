import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import EDDCLheader from '../../../../models/EDDCLheader';
import EDDCLdetail from '../../../../models/EDDCLdetail';
import Maestroprods from '../../../../models/Maestroprods';
import db from '../../../../utils/connectMongo';
import Layout from '../../../../src/components/Layout';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function ScreenEachDash({
  EDDCLheaders,
  EDDCLdetails,
  MaestroProd,
}) {
  const { query } = useRouter();
  const productId = query.id;

  // init + cargar base de cabecera2
  let cabecera2 = [];

  cabecera2.push({
    id: EDDCLheaders._id,
    datenow: EDDCLheaders.datenow,
    tapadora: EDDCLheaders.tapadora,
    tipolata: EDDCLheaders.tipolata,
    producto: EDDCLheaders.producto,
    productoname: '',
    createdAt: EDDCLheaders.createdAt,
    cosas: [],
  });

  // init + cargar base de detalles
  let detalles = [];

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

  // init + cargar base de maestroitems
  let maestroItems = [];

  MaestroProd.forEach((element) => {
    maestroItems.push({
      codigo: element.material,
      matptname: element.materialptname,
      tipolata: element.tipolata,
      desc: element.descripcion,
    });
  });

  // entrar a cabecera2 los docs en detalles

  for (let i = 0; i < cabecera2.length; i++) {
    for (let j = 0; j < detalles.length; j++) {
      if (cabecera2[i].id === detalles[j].id) {
        cabecera2[i].cosas.push(detalles[j]);
      }
    }
  }

  // entrar nombres a cabecera2 desde maestroitems

  for (let i = 0; i < cabecera2.length; i++) {
    const productoID = cabecera2[i].producto.toString();

    for (let j = 0; j < maestroItems.length; j++) {
      if (maestroItems[j].codigo.toString() === productoID) {
        cabecera2[i].productoname = maestroItems[j].desc;
        break;
      }
    }
  }

  // ordenar fechas
  detalles.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // arreglo de datos a comparar
  let datos = [];

  console.log('cabecera2', cabecera2);
  console.log('detalles', detalles);

  console.log('detalles.length', detalles.length);

  // Ancho Min
  let anchMin = 0;
  let anchoMin = 0;
  for (let i = 0; i < detalles.length; i++) {
    anchMin += detalles[i].anchomin;
  }
  anchoMin = anchMin / detalles.length;

  // Ancho Max
  let anchMax = 0;
  let anchoMax = 0;
  for (let i = 0; i < detalles.length; i++) {
    anchMax += detalles[i].anchomax;
  }
  anchoMax = anchMax / detalles.length;

  // Espesor Min
  let espeMin = 0;
  let espesorMin = 0;
  for (let i = 0; i < detalles.length; i++) {
    espeMin += detalles[i].espesormin;
  }
  espesorMin = espeMin / detalles.length;

  // Espesor Max
  let espeMax = 0;
  let espesorMax = 0;
  for (let i = 0; i < detalles.length; i++) {
    espeMax += detalles[i].espesormax;
  }
  espesorMax = espeMax / detalles.length;

  // Profundidad Min
  let profMin = 0;
  let profundMin = 0;
  for (let i = 0; i < detalles.length; i++) {
    profMin += detalles[i].profundmin;
  }
  profundMin = profMin / detalles.length;

  // Profundidad Max
  let profMax = 0;
  let profundMax = 0;
  for (let i = 0; i < detalles.length; i++) {
    profMax += detalles[i].profundmax;
  }
  profundMax = profMax / detalles.length;

  // Gancho Cuerpo Min
  let gancuMin = 0;
  let ganchocuerpoMin = 0;
  for (let i = 0; i < detalles.length; i++) {
    gancuMin += detalles[i].ganchocuerpomin;
  }
  ganchocuerpoMin = gancuMin / detalles.length;

  // Gancho Cuerpo Max
  let gancuMax = 0;
  let ganchocuerpoMax = 0;
  for (let i = 0; i < detalles.length; i++) {
    gancuMax += detalles[i].ganchocuerpomax;
  }
  ganchocuerpoMax = gancuMax / detalles.length;

  // Gancho Tapa Min
  let gantaMin = 0;
  let ganchotapaMin = 0;
  for (let i = 0; i < detalles.length; i++) {
    gantaMin += detalles[i].ganchotapamin;
  }
  ganchotapaMin = gantaMin / detalles.length;

  // Gancho Tapa Max
  let gantaMax = 0;
  let ganchotapaMax = 0;
  for (let i = 0; i < detalles.length; i++) {
    gantaMax += detalles[i].ganchotapamax;
  }
  ganchotapaMax = gantaMax / detalles.length;

  // Traslape Min
  let trasMin = 0;
  let traslapeMin = 0;
  for (let i = 0; i < detalles.length; i++) {
    trasMin += detalles[i].traslapemin;
  }
  traslapeMin = trasMin / detalles.length;

  // Traslape Max
  let trasMax = 0;
  let traslapeMax = 0;
  for (let i = 0; i < detalles.length; i++) {
    trasMax += detalles[i].traslapemax;
  }
  traslapeMax = trasMax / detalles.length;

  // Arrugas
  let arrugas = 0;
  for (let i = 0; i < detalles.length; i++) {
    arrugas += parseInt(detalles[i].arrugas);
  }

  let comentarios = [];
  detalles.forEach((element) => {
    comentarios.push(element.comentarios);
  });

  const ProgressBar = ({ progressPercentage }) => {
    return (
      <div className="h-1 w-20 bg-gray-300">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${
            progressPercentage < 50 ? 'bg-red-600' : 'bg-green-600'
          }`}
        ></div>
      </div>
    );
  };

  return (
    <Layout>
      {/* <div>
        {detalles.map((element) => (
          <h1 key={element.idpropio}>{element.idpropio}</h1>
        ))}
      </div> */}
      <div>
        <h1 className="text-2xl font-bold">Averages</h1>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {/* ancho minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Ancho Minimo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={anchoMin * 50} />
            <h1 className="pl-5 text-xs">2</h1>
          </div>
          <h1 className="text-xs">{`Ancho Min Promedio: ${anchoMin}`}</h1>
        </div>
        {/* ancho maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Ancho Maximo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={anchoMax * 50} />
            <h1 className="pl-5 text-xs">2</h1>
          </div>
          <h1 className="text-xs">{`Ancho Max Promedio: ${anchoMax}`}</h1>
        </div>
        {/* espesor minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Espesor Minimo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={espesorMin * 20} />
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          <h1 className="text-xs">{`Ancho Max Promedio: ${espesorMin.toFixed(
            3
          )}`}</h1>
        </div>
        {/* espesor maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Espesor Maximo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={espesorMax * 20} />
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          <h1 className="text-xs">{`Ancho Max Promedio: ${espesorMax.toFixed(
            3
          )}`}</h1>
        </div>

        {/* profund minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Profun Minima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={profundMin * 20} />
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          <h1 className="text-xs">{`Ancho Max Promedio: ${profundMin.toFixed(
            3
          )}`}</h1>
        </div>
        {/* profund maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Profun Maxima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={profundMax * 20} />
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          <h1 className="text-xs">{`Ancho Max Promedio: ${profundMax.toFixed(
            3
          )}`}</h1>
        </div>

        {/* gancho cuerpo minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          GanCu Minima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={ganchocuerpoMin * 20} />
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          <h1 className="text-xs">{`Gancho Cuerpo Promedio: ${ganchocuerpoMin.toFixed(
            3
          )}`}</h1>
        </div>
        {/* gancho cuerpo maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          GanCu Maxima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={ganchocuerpoMax * 20} />
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          <h1 className="text-xs">{`Gancho Cuerpo Promedio: ${ganchocuerpoMax.toFixed(
            3
          )}`}</h1>
        </div>

        {/* gancho tapa minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          GanTapa Minima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={ganchotapaMin} />
            <h1 className="pl-5 text-xs">100</h1>
          </div>
          <h1 className="text-xs">{`Gancho Tapa Promedio: ${ganchotapaMin.toFixed(
            3
          )}`}</h1>
        </div>
        {/* gancho tapa maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          GanTapa Maxima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={ganchotapaMax} />
            <h1 className="pl-5 text-xs">100</h1>
          </div>
          <h1 className="text-xs">{`Gancho Tapa Promedio: ${ganchotapaMax.toFixed(
            3
          )}`}</h1>
        </div>
        {/* traslape minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Traslape Minimo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={traslapeMin * 4} />
            <h1 className="pl-5 text-xs">25</h1>
          </div>
          <h1 className="text-xs">{`Traslape Promedio: ${traslapeMin.toFixed(
            3
          )}`}</h1>
        </div>
        {/* traslape maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Traslape Maximo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            <ProgressBar progressPercentage={traslapeMax * 4} />
            <h1 className="pl-5 text-xs">25</h1>
          </div>
          <h1 className="text-xs">{`Traslape Promedio: ${traslapeMax.toFixed(
            3
          )}`}</h1>
        </div>

        {/* arrugas */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          {`Arrugas: ${arrugas}`}
        </div>
      </div>
      <div className="pt-10">
        <div>
          <ul>
            {detalles.forEach((element) => (
              <li>{element}</li>
            ))}
          </ul>
        </div>
        <table>
          <tbody>
            <tr className="text-center">
              <th>Hora</th>
              <th>Codigo</th>
              <th>Ancho Min</th>
              <th>Ancho Max</th>
              <th>Espesor Min</th>
              <th>Espesor Max</th>
              <th>Profundidad Min</th>
              <th>Profundidad Max</th>
              <th>Gancho Cuerpo Min</th>
              <th>Gancho Cuerpo Max</th>
              <th>Gancho Tapa Min</th>
              <th>Gancho Tapa Max</th>
              <th>Traslape Min</th>
              <th>Traslape Max</th>
              <th>Arrugas</th>
              <th>Banda Impresion</th>
            </tr>
            {detalles.map((element) => (
              <tr key={element.idpropio} className="text-center">
                <td>{element.horanow}</td>
                <td>{element.codigo}</td>
                <td>{element.anchomin}</td>
                <td>{element.anchomax}</td>
                <td>{element.espesormin}</td>
                <td>{element.espesormax}</td>
                <td>{element.profundmin}</td>
                <td>{element.profundmax}</td>
                <td>{element.ganchocuerpomin}</td>
                <td>{element.ganchocuerpomax}</td>
                <td>{element.ganchotapamin}</td>
                <td>{element.ganchotapamax}</td>
                <td>{element.traslapemin}</td>
                <td>{element.traslapemax}</td>
                <td>{element.arrugas}</td>
                <td>{element.bandaimp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  await db.connect();

  const { params } = context;
  const { slug } = params;

  const headid = params.id.toString();

  console.log(params.id);

  const EDDCLheaders = await EDDCLheader.findOne({ params }).lean();
  const EDDCLdetails = await EDDCLdetail.find({ headid }).lean();
  const MaestroProd = await Maestroprods.find().lean();
  return {
    props: {
      EDDCLheaders: JSON.parse(JSON.stringify(EDDCLheaders)),
      EDDCLdetails: JSON.parse(JSON.stringify(EDDCLdetails)),
      MaestroProd: JSON.parse(JSON.stringify(MaestroProd)),
    },
  };
}
