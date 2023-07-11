import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import EDDCLheader from '../../../../models/EDDCLheader';
import EDDCLdetail from '../../../../models/EDDCLdetail';
import Maestroprods from '../../../../models/Maestroprods';
import db from '../../../../utils/connectMongo';
import Layout from '../../../../src/components/Layout';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Link from 'next/link';

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
  let arregloAnchoMin = [];
  for (let i = 0; i < detalles.length; i++) {
    arregloAnchoMin.push(detalles[i].anchomin);
    anchMin += detalles[i].anchomin;
  }
  let anchoMinProm = anchMin / detalles.length;
  let anchoMinMin = Math.min.apply(Math, arregloAnchoMin);
  let anchoMinMax = Math.max.apply(Math, arregloAnchoMin);

  // Ancho Max
  let anchMax = 0;
  let arregloAnchoMax = [];
  for (let i = 0; i < detalles.length; i++) {
    arregloAnchoMax.push(detalles[i].anchomax);
    anchMax += detalles[i].anchomax;
  }
  let anchoMaxProm = anchMax / detalles.length;
  let anchoMaxMin = Math.min.apply(Math, arregloAnchoMax);
  let anchoMaxMax = Math.max.apply(Math, arregloAnchoMax);

  // Espesor Min
  let espeMin = 0;
  let arregloEspeMin = [];
  for (let i = 0; i < detalles.length; i++) {
    arregloEspeMin.push(detalles[i].espesormin);
    espeMin += detalles[i].espesormin;
  }
  let espesorMinProm = espeMin / detalles.length;
  let espesorMinMin = Math.min.apply(Math, arregloEspeMin);
  let espesorMinMax = Math.max.apply(Math, arregloEspeMin);

  // Espesor Max
  let espeMax = 0;
  let arregloEspeMax = [];
  for (let i = 0; i < detalles.length; i++) {
    arregloEspeMax.push(detalles[i].espesormax);
    espeMax += detalles[i].espesormax;
  }
  let espesorMaxProm = espeMax / detalles.length;
  let espesorMaxMin = Math.min.apply(Math, arregloEspeMax);
  let espesorMaxMax = Math.max.apply(Math, arregloEspeMax);

  // Profundidad Min
  let profMin = 0;
  let arregloProfMin = [];
  for (let i = 0; i < detalles.length; i++) {
    arregloProfMin.push(detalles[i].profundmin);
    profMin += detalles[i].profundmin;
  }
  let profMinProm = profMin / detalles.length;
  let profMinMin = Math.min.apply(Math, arregloProfMin);
  let profMinMax = Math.max.apply(Math, arregloProfMin);

  // Profundidad Max
  let profMax = 0;
  let arregloProfMax = [];

  for (let i = 0; i < detalles.length; i++) {
    arregloProfMax.push(detalles[i].profundmax);
    profMax += detalles[i].profundmax;
  }
  let profMaxProm = profMax / detalles.length;
  let profMaxMin = Math.min.apply(Math, arregloProfMax);
  let profMaxMax = Math.max.apply(Math, arregloProfMax);

  // Gancho Cuerpo Min
  let gancuMin = 0;
  let arregloGanCuMin = [];
  for (let i = 0; i < detalles.length; i++) {
    arregloGanCuMin.push(detalles[i].ganchocuerpomin);
    gancuMin += detalles[i].ganchocuerpomin;
  }
  let ganCuMinProm = gancuMin / detalles.length;
  let ganCuMinMin = Math.min.apply(Math, arregloGanCuMin);
  let ganCuMinMax = Math.max.apply(Math, arregloGanCuMin);

  // Gancho Cuerpo Max
  let gancuMax = 0;
  let arregloGanCuMax = [];
  for (let i = 0; i < detalles.length; i++) {
    arregloGanCuMax.push(detalles[i].ganchocuerpomax);
    gancuMax += detalles[i].ganchocuerpomax;
  }
  let ganCuMaxProm = gancuMax / detalles.length;
  let ganCuMaxMin = Math.min.apply(Math, arregloGanCuMax);
  let ganCuMaxMax = Math.max.apply(Math, arregloGanCuMax);

  // Gancho Tapa Min
  let gantaMin = 0;
  let arregloGanTaMin = [];
  for (let i = 0; i < detalles.length; i++) {
    arregloGanTaMin.push(detalles[i].ganchotapamin);
    gantaMin += detalles[i].ganchotapamin;
  }
  let ganTaMinProm = gantaMin / detalles.length;
  let ganTaMinMin = Math.min.apply(Math, arregloGanTaMin);
  let ganTaMinMax = Math.max.apply(Math, arregloGanTaMin);

  // Gancho Tapa Max
  let gantaMax = 0;
  let arregloGanTaMax = [];
  for (let i = 0; i < detalles.length; i++) {
    arregloGanTaMax.push(detalles[i].ganchotapamax);
    gantaMax += detalles[i].ganchotapamax;
  }
  let ganTaMaxProm = gantaMax / detalles.length;
  let ganTaMaxMin = Math.min.apply(Math, arregloGanTaMin);
  let ganTaMaxMax = Math.max.apply(Math, arregloGanTaMin);

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
      <div className="">
        <div className="flex items-center justify-center">
          <Link href="https://i.ibb.co/9GdTS3m/eddcl.png">
            <div className="button-borders">
              <button className="primary-button">Ver Version Fisica</button>
            </div>
          </Link>
        </div>
        <br />
        <div className="text-lg">
          <h2 className="text-2xl font-semi">Dashboard EDDCL</h2>
          <br />
          <div className="flex items-center justify-between">
            <h4 className="px-5 font-bold text-left">Dia:</h4>
            <h4 className="pr-5 text-right ">{cabecera2[0].datenow}</h4>
          </div>
          <br />
          <div className="flex items-center justify-between">
            <h4 className="px-5 font-bold text-left">Codigo Producto:</h4>
            <h4 className="pr-5 text-right ">{cabecera2[0].producto}</h4>
          </div>
          <br />
          <div className="flex items-center justify-between">
            <h4 className="px-5 font-bold text-left">Nombre Producto:</h4>
            <h4 className="pr-5 text-right ">{cabecera2[0].productoname}</h4>
          </div>
          <br />
          <div className="flex items-center justify-between">
            <h4 className="px-5 font-bold text-left">Tipo lata:</h4>
            <h4 className="pr-5 text-right ">{cabecera2[0].tipolata}</h4>
          </div>
          <br />
          <div className="flex items-center justify-between">
            <h4 className="px-5 font-bold text-left">Registros:</h4>
            <h4 className="pr-5 text-right ">{detalles.length}</h4>
          </div>
          <br />
        </div>
        <div>
          <h1 className="text-2xl font-semi">Averages</h1>
        </div>
        <br />
        <div>
          <h1 className="text-xl font-semi">Ancho:</h1>
        </div>
        <div className="grid grid-cols-1 gap-5">
          {/* ancho minimo */}
          <div className="px-5 py-10 text-xl text-black bg-gray-400 rounded ">
            Minimo:
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{'Minimo Promedio: '}</h1>
              <h1 className="text-lg">{`${anchoMinProm.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{'Minimo: '}</h1>
              <h1 className="text-lg">{`${anchoMinMin.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{'Maximo: '}</h1>

              <h1 className="text-lg">{`${anchoMinMax.toFixed(2)}`}</h1>
            </div>
          </div>
          {/* ancho maximo */}
          <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
            Maximo:
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo Promedio: `}</h1>
              <h1 className="text-lg">{`${anchoMaxProm.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo: `}</h1>
              <h1 className="text-lg">{`${anchoMaxMin.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo: `}</h1>
              <h1 className="text-lg">{`${anchoMaxMax.toFixed(2)}`}</h1>
            </div>
          </div>
        </div>
        <div>
          <br />
          <h1 className="text-xl font-bold">Espesor:</h1>
        </div>
        <div className="grid grid-cols-1 gap-5">
          {/* espesor minimo */}
          <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
            Minimo:
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo Promedio: `}</h1>
              <h1 className="text-lg">{`${espesorMinProm.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo: `}</h1>
              <h1 className="text-lg">{`${espesorMinMin.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo: `}</h1>
              <h1 className="text-lg">{`${espesorMinMax.toFixed(2)}`}</h1>
            </div>
          </div>
          {/* espesor maximo */}
          <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
            Maximo:
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo Promedio: `}</h1>
              <h1 className="text-lg">{`${espesorMaxProm.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo: `}</h1>
              <h1 className="text-lg">{`${espesorMaxMin.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo: `}</h1>
              <h1 className="text-lg">{`${espesorMaxMax.toFixed(2)}`}</h1>
            </div>
          </div>
        </div>
        {/* profund minimo */}
        <div>
          <br />
          <h1 className="text-xl font-bold">Profundidad:</h1>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
            Minimo:
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo Promedio: `}</h1>
              <h1 className="text-lg">{`${profMinProm.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo: `}</h1>
              <h1 className="text-lg">{`${profMinMin.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo: `}</h1>
              <h1 className="text-lg">{`${profMinMax.toFixed(2)}`}</h1>
            </div>
          </div>
          {/* profund maximo */}
          <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
            Maximo:
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo Promedio: `}</h1>
              <h1 className="text-lg">{`${profMaxProm.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo: `}</h1>
              <h1 className="text-lg">{`${profMaxMin.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo: `}</h1>
              <h1 className="text-lg">{`${profMaxMax.toFixed(2)}`}</h1>
            </div>
          </div>
        </div>
        {/* gancho cuerpo minimo */}
        <div>
          <br />
          <h1 className="text-xl font-bold">Gancho Cuerpo:</h1>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
            Minimo:
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo Promedio: `}</h1>
              <h1 className="text-lg">{`${ganCuMinProm.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo: `}</h1>
              <h1 className="text-lg">{`${ganCuMinMin.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo: `}</h1>
              <h1 className="text-lg">{`${ganCuMinMax.toFixed(2)}`}</h1>
            </div>
          </div>
          {/* profund maximo */}
          <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
            Maximo:
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo Promedio:`}</h1>
              <h1 className="text-lg">{` ${ganCuMaxProm.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo: `}</h1>
              <h1 className="text-lg">{`${ganCuMaxMin.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo: `}</h1>
              <h1 className="text-lg">{`${ganCuMaxMax.toFixed(2)}`}</h1>
            </div>
          </div>
        </div>
        {/* gancho tapa minimo */}
        <div>
          <br />
          <h1 className="text-xl font-bold">Gancho Tapa:</h1>
        </div>
        <div className="grid grid-cols-1 gap-5">
          {/* gancho tapa maximo */}
          <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
            Minimo:
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo Promedio: `}</h1>
              <h1 className="text-lg">{`${ganTaMinProm.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo: `}</h1>
              <h1 className="text-lg">{`${ganTaMinMin.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo: `}</h1>
              <h1 className="text-lg">{`${ganTaMinMax.toFixed(2)}`}</h1>
            </div>
          </div>
          {/* espesor maximo */}
          <div className="px-5 py-10 text-lg text-black bg-gray-400 rounded ">
            Maximo:
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo Promedio: `}</h1>
              <h1 className="text-lg">{`${ganTaMaxProm.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Minimo: `}</h1>
              <h1 className="text-lg">{`${ganTaMaxMin.toFixed(2)}`}</h1>
            </div>
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-lg font-bold">{`Maximo: `}</h1>
              <h1 className="text-lg">{`${ganTaMaxMax.toFixed(2)}`}</h1>
            </div>
          </div>
        </div>
        {/* traslape minimo */}
        <div>
          <br />
          <h1 className="text-xl font-bold">Traslape</h1>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div className="px-5 py-10 text-lg font-bold text-black bg-gray-400 rounded ">
            Traslape:
            <div className="flex items-center justify-center">
              <h1 className="pr-5 text-lg">40</h1>
              <ProgressBar progressPercentage={(traslapeMin - 40) * 10} />
              <h1 className="pl-5 text-lg">50</h1>
            </div>
            <div className="flex items-center justify-center pt-2">
              <h1 className="text-lg font-bold">{`Traslape Promedio: `}</h1>
              <h1 className="pl-5 text-lg">{`${traslapeMin.toFixed(3)}`}</h1>
            </div>
          </div>
          {/* arrugas */}
          <div>
            <br />
            <h1 className="text-xl font-bold">Arrugas</h1>
          </div>
          <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
            {arrugas === 0 ? (
              <span className="px-5 py-5 text-2xl font-medium text-green-800 bg-green-300 rounded-full dark:bg-green-900 dark:text-green-300">
                Arrugas: {arrugas}
              </span>
            ) : (
              <span className="px-5 py-5 text-2xl font-medium text-red-800 bg-red-300 rounded-full dark:bg-red-900 dark:text-red-300">
                Arrugas: {arrugas}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400">
              <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Hora
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Codigo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cabeza
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Ancho
                    <div className="flex justify-evenly">
                      <div>Min</div>
                      <div>Max</div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Espesor
                    <div className="flex justify-evenly">
                      <div>Min</div>
                      <div>Max</div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Profundidad
                    <div className="flex justify-evenly">
                      <div>Min</div>
                      <div>Max</div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Gancho Cuerpo
                    <div className="flex justify-evenly">
                      <div>Min</div>
                      <div>Max</div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Gancho Tapa
                    <div className="flex justify-evenly">
                      <div>Min</div>
                      <div>Max</div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Traslape
                    <div className="flex justify-evenly">
                      <div>Min</div>
                      <div>Max</div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Arrugas
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Banda Impresion
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fabrica Lata
                  </th>
                </tr>
              </thead>
              <tbody>
                {detalles.map((item) => (
                  <tr
                    key={item.headid}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="text-center">{item.horanow}</td>
                    <td className="text-center">{item.codigo}</td>
                    <td className="text-center">{item.cabeza}</td>
                    <td className="">
                      <div className="flex justify-evenly">
                        <div>{item.anchomin}</div>
                        <div>{item.anchomax}</div>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-evenly">
                        <div>{item.espesormin}</div>
                        <div>{item.espesormax}</div>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-evenly">
                        <div>{item.profundmin}</div>
                        <div>{item.profundmax}</div>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-evenly">
                        <div>{item.ganchocuerpomin}</div>
                        <div>{item.ganchocuerpomax}</div>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-evenly">
                        <div>{item.ganchotapamin}</div>
                        <div>{item.ganchotapamax}</div>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-evenly">
                        <div>{item.traslapemin}</div>
                        <div>{item.traslapemax}</div>
                      </div>
                    </td>
                    <td className="text-center">{item.arrugas}</td>
                    <td className="text-center">{item.bandaimp}</td>
                    <td className="text-center">{item.fabricalatas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
