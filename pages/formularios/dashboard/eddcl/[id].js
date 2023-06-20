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
      <div className="w-20 h-1 bg-gray-300">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${
            progressPercentage < 0 || progressPercentage > 100
              ? 'bg-red-600'
              : 'bg-green-600'
          }`}
        ></div>
      </div>
    );
  };

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold">Averages</h1>
      </div>
      <br />
      <div>
        <h1 className="text-lg">Ancho:</h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* ancho minimo */}
        <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
          Minimo:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">110</h1>
            <ProgressBar progressPercentage={(anchoMin - 100) * (10 / 3)} />
            <h1 className="pl-5 text-xs">120</h1>
          </div>
          <h1 className="text-xs">{`Minimo Promedio: ${anchoMin.toFixed(
            2
          )}`}</h1>
        </div>
        {/* ancho maximo */}
        <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
          Maximo:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">110</h1>
            <ProgressBar progressPercentage={(anchoMax - 100) * (10 / 3)} />
            <h1 className="pl-5 text-xs">120</h1>
          </div>
          <h1 className="text-xs">{`Maximo Promedio: ${anchoMax.toFixed(
            2
          )}`}</h1>
        </div>
      </div>
      <div>
        <br />
        <h1 className="text-lg">Espesor:</h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* espesor minimo */}
        <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
          Minimo:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">40</h1>
            <ProgressBar progressPercentage={(espesorMin - 40) * 20} />
            <h1 className="pl-5 text-xs">45</h1>
          </div>
          <h1 className="text-xs">{`Ancho Max Promedio: ${espesorMin.toFixed(
            2
          )}`}</h1>
        </div>
        {/* espesor maximo */}
        <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
          Maximo:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">40</h1>
            <ProgressBar progressPercentage={(espesorMax - 40) * 20} />
            <h1 className="pl-5 text-xs">45</h1>
          </div>
          <h1 className="text-xs">{`Maximo Promedio: ${espesorMax.toFixed(
            2
          )}`}</h1>
        </div>
      </div>
      {/* profund minimo */}
      <div>
        <br />
        <h1 className="text-lg">Profundidad:</h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
          Minimo:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">135</h1>
            <ProgressBar progressPercentage={(profundMin - 135) * 20} />
            <h1 className="pl-5 text-xs">140</h1>
          </div>
          <h1 className="text-xs">{`Minimo Promedio: ${profundMin.toFixed(
            2
          )}`}</h1>
        </div>
        {/* profund maximo */}
        <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
          Maximo:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">135</h1>
            <ProgressBar progressPercentage={(profundMax - 135) * 20} />
            <h1 className="pl-5 text-xs">140</h1>
          </div>
          <h1 className="text-xs">{`Maximo Promedio: ${profundMax.toFixed(
            2
          )}`}</h1>
        </div>
      </div>
      {/* gancho cuerpo minimo */}
      <div>
        <br />
        <h1 className="text-lg">Gancho Cuerpo:</h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Minimo:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">75</h1>
            <ProgressBar progressPercentage={(ganchocuerpoMin - 75) * 20} />
            <h1 className="pl-5 text-xs">80</h1>
          </div>
          <h1 className="text-xs">{`Gancho Cuerpo Promedio: ${ganchocuerpoMin.toFixed(
            2
          )}`}</h1>
        </div>
        {/* gancho cuerpo maximo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Maximo:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">75</h1>
            <ProgressBar progressPercentage={(ganchocuerpoMax - 75) * 20} />
            <h1 className="pl-5 text-xs">80</h1>
          </div>
          <h1 className="text-xs">{`Gancho Cuerpo Promedio: ${ganchocuerpoMax.toFixed(
            2
          )}`}</h1>
        </div>
      </div>
      {/* gancho tapa minimo */}
      <div>
        <br />
        <h1 className="text-lg">Gancho Tapa:</h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
          Minimo:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">65</h1>
            <ProgressBar progressPercentage={(ganchotapaMin - 65) * 20} />
            <h1 className="pl-5 text-xs">70</h1>
          </div>
          <h1 className="text-xs">{`Minimo Promedio: ${ganchotapaMin.toFixed(
            2
          )}`}</h1>
        </div>
        {/* gancho tapa maximo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Maximo:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">65</h1>
            <ProgressBar progressPercentage={(ganchotapaMax - 65) * 20} />
            <h1 className="pl-5 text-xs">70</h1>
          </div>
          <h1 className="text-xs">{`Maximo Promedio: ${ganchotapaMax.toFixed(
            2
          )}`}</h1>
        </div>
      </div>
      {/* traslape minimo */}
      <div>
        <br />
        <h1 className="text-lg">Traslape + Arrugas:</h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
          Traslape:
          <div className="flex items-center justify-center">
            <h1 className="pr-5 text-xs">40</h1>
            <ProgressBar progressPercentage={(traslapeMin - 40) * 10} />
            <h1 className="pl-5 text-xs">50</h1>
          </div>
          <h1 className="text-xs">{`Traslape Promedio: ${traslapeMin.toFixed(
            3
          )}`}</h1>
        </div>

        {/* arrugas */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          {arrugas === 0 ? (
            <>
              <div className="py-3 bg-green-500 rounded-lg">
                {`Arrugas: ${arrugas}`}
              </div>
            </>
          ) : (
            <>
              <div className="py-3 bg-red-600 rounded-lg ">
                {`Arrugas: ${arrugas}`}
              </div>
            </>
          )}
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
