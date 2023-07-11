import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import EDDCLheader from '../../../../../models/EDDCLheader';
import EDDCLdetail from '../../../../../models/EDDCLdetail';
import Maestroprods from '../../../../../models/Maestroprods';
import db from '../../../../../utils/connectMongo';
import Layout from '../../../../../src/components/Layout';
import Link from 'next/link';

//inventando
import {
  PageContent,
  PageFooter,
  PageHeader,
  pageMargin,
  pageSize,
  ReportRoot,
  ReportView,
  Section,
  SectionFooter,
  SectionHeader,
} from '@jikji/react';

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

  function MyReport() {
    return (
      <ReportRoot>
        <ReportView>
          <Section dimension={pageSize.A4} margin={pageMargin.Narrow}>
            <SectionHeader>Section Header</SectionHeader>
            <SectionFooter>Section Footer</SectionFooter>
            <PageHeader>Page Header</PageHeader>
            <PageContent>Report Content</PageContent>
            <PageFooter>Page Footer</PageFooter>
          </Section>
        </ReportView>
      </ReportRoot>
    );
  }

  return (
    <Layout>
      <div>{MyReport}</div>
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
