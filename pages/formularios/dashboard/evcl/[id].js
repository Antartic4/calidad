import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Maestroprods from '../../../../models/Maestroprods';
import db from '../../../../utils/connectMongo';
import Layout from '../../../../src/components/Layout';
import EVCLheader from '../../../../models/EVCLheader';
import EVCLdetail from '../../../../models/EVCLdetail';

export default function ScreenEachDash({
  EVCLheaders,
  EVCLdetails,
  MaestroProd,
}) {
  const { query } = useRouter();
  const productId = query.id;

  // init + cargar base de cabecera2
  let cabecera2 = [];

  cabecera2.push({
    id: EVCLheaders._id,
    datenow: EVCLheaders.datenow,
    tipolata: EVCLheaders.tipolata,
    producto: EVCLheaders.producto,
    productoname: '',
    createdAt: EVCLheaders.createdAt,
    cosas: [],
  });

  // init + cargar base de detalles
  let detalles = [];

  EVCLdetails.forEach((element) => {
    detalles.push({
      idpropio: element._id,
      id: element.headid,
      horanow: element.horanow,
      codigo: element.codigo,
      fabricalatas: element.fabricalatas,
      cabeza1: element.cabeza1,
      cabeza2: element.cabeza2,
      cabeza3: element.cabeza3,
      cabeza4: element.cabeza4,
      cabeza5: element.cabeza5,
      cabeza6: element.cabeza6,
      danos: element.danos,
      estado: element.estado,
      aceptacion: element.aceptacion,
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

  let comentarios = [];
  detalles.forEach((element) => {
    comentarios.push(element.comentarios);
  });

  const textorojo = (
    <>
      <h1 className="text-red-600">hola, soy el texto rojo.</h1>
    </>
  );

  console.log('cabecera', cabecera2);
  console.log('detalle', detalles);

  return (
    <Layout>
      <div className="text-2xl">
        <div className="flex items-center">
          <h1 className="font-bold">Dia:</h1>
          <h1 className="pl-4">{cabecera2[0].datenow}</h1>
        </div>
        <div className="flex items-center">
          <h1 className="font-bold">Producto:</h1>
          <h1 className="pl-4">{cabecera2[0].producto}</h1>
        </div>
        <div className="flex items-center">
          <h1 className="font-bold">Nombre:</h1>
          <h1 className="pl-4">{cabecera2[0].productoname}</h1>
        </div>
        <div className="flex items-center">
          <h1 className="font-bold">Tipo lata:</h1>
          <h1 className="pl-4">{cabecera2[0].tipolata}</h1>
        </div>
        <div className="flex items-center">
          <h1 className="font-bold">Registros:</h1>
          <h1 className="pl-4">{cabecera2[0].cosas.length}</h1>
        </div>
      </div>
      <br />

      {cabecera2[0].cosas.forEach((item) => (
        <div></div>
      ))}

      <div className="grid grid-cols-4 gap-3">
        {/* ancho minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Ancho Minimo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">{EVCLheaders.datenow}</h1>
            {/* <ProgressBar progressPercentage={anchoMin * 50} /> */}
            <h1 className="pl-5 text-xs">2</h1>
          </div>
          {/* <h1 className="text-xs">{`Ancho Min Promedio: ${anchoMin}`}</h1> */}
        </div>
        {/* ancho maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Ancho Maximo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={anchoMax * 50} /> */}
            <h1 className="pl-5 text-xs">2</h1>
          </div>
          {/* <h1 className="text-xs">{`Ancho Max Promedio: ${anchoMax}`}</h1> */}
        </div>
        {/* espesor minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Espesor Minimo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={espesorMin * 20} /> */}
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          {/* <h1 className="text-xs">{`Ancho Max Promedio: ${espesorMin.toFixed(
            3
          )}`}</h1> */}
        </div>
        {/* espesor maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Espesor Maximo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={espesorMax * 20} /> */}
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          {/* <h1 className="text-xs">{`Ancho Max Promedio: ${espesorMax.toFixed(
            3
          )}`}</h1> */}
        </div>

        {/* profund minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Profun Minima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={profundMin * 20} /> */}
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          {/* <h1 className="text-xs">{`Ancho Max Promedio: ${profundMin.toFixed(
            3
          )}`}</h1> */}
        </div>
        {/* profund maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Profun Maxima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={profundMax * 20} /> */}
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          {/* <h1 className="text-xs">{`Ancho Max Promedio: ${profundMax.toFixed(
            3
          )}`}</h1> */}
        </div>

        {/* gancho cuerpo minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          GanCu Minima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={ganchocuerpoMin * 20} /> */}
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          {/* <h1 className="text-xs">{`Gancho Cuerpo Promedio: ${ganchocuerpoMin.toFixed(
            3
          )}`}</h1> */}
        </div>
        {/* gancho cuerpo maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          GanCu Maxima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={ganchocuerpoMax * 20} /> */}
            <h1 className="pl-5 text-xs">5</h1>
          </div>
          {/* <h1 className="text-xs">{`Gancho Cuerpo Promedio: ${ganchocuerpoMax.toFixed(
            3
          )}`}</h1> */}
        </div>

        {/* gancho tapa minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          GanTapa Minima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={ganchotapaMin} /> */}
            <h1 className="pl-5 text-xs">100</h1>
          </div>
          {/* <h1 className="text-xs">{`Gancho Tapa Promedio: ${ganchotapaMin.toFixed(
            3
          )}`}</h1> */}
        </div>
        {/* gancho tapa maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          GanTapa Maxima:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={ganchotapaMax} /> */}
            <h1 className="pl-5 text-xs">100</h1>
          </div>
          {/* <h1 className="text-xs">{`Gancho Tapa Promedio: ${ganchotapaMax.toFixed(
            3
          )}`}</h1> */}
        </div>
        {/* traslape minimo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Traslape Minimo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={traslapeMin * 4} /> */}
            <h1 className="pl-5 text-xs">25</h1>
          </div>
          {/* <h1 className="text-xs">{`Traslape Promedio: ${traslapeMin.toFixed(
            3
          )}`}</h1> */}
        </div>
        {/* traslape maximo */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          Traslape Maximo:
          <div className="flex justify-center items-center">
            <h1 className="pr-5 text-xs">0</h1>
            {/* <ProgressBar progressPercentage={traslapeMax * 4} /> */}
            <h1 className="pl-5 text-xs">25</h1>
          </div>
          {/* <h1 className="text-xs">{`Traslape Promedio: ${traslapeMax.toFixed(
            3
          )}`}</h1> */}
        </div>

        {/* arrugas */}
        <div className="rounded px-5 py-10 text-2xl bg-gray-400 text-black ">
          {/* {`Arrugas: ${arrugas}`} */}
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

  const EVCLheaders = await EVCLheader.findOne({ params }).lean();
  const EVCLdetails = await EVCLdetail.find({ headid }).lean();
  const MaestroProd = await Maestroprods.find().lean();
  return {
    props: {
      EVCLheaders: JSON.parse(JSON.stringify(EVCLheaders)),
      EVCLdetails: JSON.parse(JSON.stringify(EVCLdetails)),
      MaestroProd: JSON.parse(JSON.stringify(MaestroProd)),
    },
  };
}
