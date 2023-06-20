import React, { useState } from 'react';
import Layout from '../../src/components/Layout';
import Maestroprods from '../../models/Maestroprods';
import db from '../../utils/connectMongo';
import { Controller, useForm } from 'react-hook-form';
import { Combobox } from '@headlessui/react';
import { Autocomplete, TextField } from '@mui/material';
import Select from 'react-select';
import axios from 'axios';
import Link from 'next/link';
import EDDCLheader from '../../models/EDDCLheader';
import { useRouter } from 'next/router';

export default function Eddcl2({ maestroprods, EDDCLheaders }) {
  const router = useRouter();

  const sortedEHeaders = EDDCLheaders.reverse();

  //console.log(EDDCLheaders);
  //console.log(sortedEHeaders);

  const productos = JSON.parse(maestroprods);

  //tipo lata (limpiar lo que pude)
  const unicotl = Array.from(new Set(productos.map((item) => item.tipolata)));
  const paraCBTL = [];
  const paraCBTL2 = [];

  //producto (limpiar lo que pude)
  const paraCBP = [];
  productos.forEach((element) =>
    paraCBP.push({
      value: element.material,
      label: element.descripcion,
    })
  );

  const artipolata = [
    '214/300X407 PASTA FAMOSA EASY OPEN',
    '209/ 211 X 300 A/F PARCIAL LECHE DE COCO',
    '209/ 211 X 400.5 LECHE/CREMA TAPA SOT',
    '209/ 211 X 413 E/P LECHE DE COCO',
    '209/211 X 300 E/P GRANOS',
    '209/211 X 300 PASTA TOMATE FAMOSA',
    '209/211 X 300 PLAIN/ PASTA VARIOS',
    '209/211 X 400.5 MANZANA LA FAMOSA',
    '209/211 X 400.5 PASTA DE TOM FAMOSA',
    '209/211 X 400.5 PERA LA FAMOSA',
    '209/211 X 400.5 PINA  FAMOSA',
    '209/211X200 SALCH JAJA SALSA TOM LI',
    '209/211X200 SALCH.COCKTAIL JAJA LIT',
    '209/211X200 SALCH.JAJA D/PAVO LITO',
    '209/211X200 SALCH.JAJA D/POLLO LITO',
    '209/211X200 SALCH.JAJA PICADERA LIT',
    '209/211X200 SALCH.JAJA T/VIENA LITO',
    '209/211X200 SALCH.PREDILECTA AF JAJ',
    '209/211X200LECHE EVAPO.JAJA 145G LI',
    '209/211X300 E/P TAPA SOT(ABRE F.PAR',
    '209/211X300 FRAPPE COCO LA FAMOSA',
    '209/211X300 PASTA TOMATE JAJA',
    '209/211X300 PLAIN TOM BARNIZ EXT.',
    '209/211X300 T/SOT SUCOCO FAMOSA',
    '209/211X300 TOMATE ENTERO (PLAIN PLAIN)',
    '209/211X400 EVAPORADA CON TAPA SOT',
    '209/211X400 LECHE DE COCO JAJA LIT0',
    '209/211X400 PLAIN BARNIZ EXT.LECHE EVAPO',
    '209/211X400 SALCH.COCKTAIL JAJA LIT',
    '209/211X400 SALCH.JAJA D/PAVO LITO',
    '209/211X400 SALCH.JAJA D/POLLO LITO',
    '209/211X400 SALCH.JAJA PICADERA LIT',
    '209/211X400 SALCH.JAJA T/VIENA LITO',
    '209/211X400.5 E/P SALAMI GUISADO',
    '209/211X400.5 JUGO PINA JAJA',
    '209/211X400.5 LECHE EVAPOR. PLAIN',
    '209/211X400.5 NECTAR PERA BAJO EN AZUCAR',
    '209/211X400.5 NECTAR PERA JAJA',
    '209/211X400.5 PLAIN LECHE COCO',
    '209/211X400.5 SALCH.PREDILEC.AF JAJ',
    '209/211X413 ABRE FACIL(T) S/BNIZ EX',
    '209/211X413 LECHE /CREMA TAPA SOT',
    '209/211X413 LECHE/CREMA  C/BARNIZ EXT',
    '211 DIA PLAIN P/PROD VARI A/F TOTAL',
    '211 DIA. ESMALTE INT. PLAIN EXT. EVAPORA',
    '211 DIA. P/PASTA DE TOMATE LITO.',
    '211 DIA. PLAIN P/PRODS. VARIOS',
    '211 DIA. VARIOS A/F PARCIAL  SOT',
    '211 LECHE EVAPO.ESMALTADA(BARNIZADA',
    '214/300 X 407 A/F PARCIAL  LECHE COCO',
    '214/300 X 407 DULCE/TOMATE/LECHE PLAIN',
    '214/300 X 407 GRANOS PLAIN',
    '214/300 X 407 PASTA FAMOSA',
    '214/300X407 PASTA DE TOMATE JAJA',
    '214/300X407 PLAIN TOMATE BARNIZ EXT.',
    '214/300X407 SALCHICHA JAJA T/VIENA LITO',
    '214/300X407 TROCI.SALCHICHA SALSA TOMATE',
    '300 DIA PLAIN/PROD VARI A/F PARCIAL SOT',
    '300 DIA PROD VARI ABRE FACIL TOTAL',
    '300 DIA. PLAIN P/PRODS. VARIOS',
    '401 DIA. GRANOS',
    '401 DIA. LECHE DE COCO',
    '401 DIA. PASTA PRODS. VARIOS A/F TOTAL',
    '401 DIA. PASTA Y PRODS. VARIOS',
    '401 X 411 CATCHUP LA FAMOSA',
    '401 X 411 E/P PRODS. VARIOS(TOMATE)',
    '401 X 411 E/P. GRANOS.',
    '401 X 411 TOMATE ABRE FACIL TOTAL FAMOSA',
    '401 X 411 TOMATE ABRE FACIL TOTAL JAJA',
    '401 X 411 TOMATE LA FAMOSA',
    '401X411 A/F PARCIAL BARNIZ EXT LECHE  CO',
    '401X411 CATCHUP JAJA',
    '401X411 PLAIN GRANOS BARNIZ EXT ABRE FAC',
    '401X411 PLAIN GRANOS BARNIZ EXT.',
    '401X411 PLAIN TOMATE C/BARNIZ EXT.',
    '401X411 TOMATE JAJA',
    '603 DIA. PLAIN P/GRANOS Y OTROS',
    '603 DIA. TOMATE PLAIN VARIOS',
    '603 X 700 CATCHUP LA FAMOSA',
    '603 X 700 E/P PASTA',
    '603 X 700 P/P PI?A',
    '603 X 700 PASTA DE TOMATE FAMOSA',
    '603 X 700 PASTA DE TOMATE POSSI',
    '603 X 700 PLAIN GRANOS BARNIZ EXT.',
    '603 X 700 TOMATE ESM. BARNIZ EXT. PLAIN',
    '603X700 CATCHUP JAJA',
    '603X700 PASTA DE TOMATE JAJA',
    'ROLL TOP 2/11 PARA LECHE DE COCO',
    'ROLL TOP 2/11 PARA MAJARETE',
    'ROLL TOP 300 VEG MIXTOS Y GRANOS',
  ];

  const CBtapadora = [
    {
      value: 1,
      label: 'Tapadora #1',
    },
    {
      value: 2,
      label: 'Tapadora #2',
    },
    {
      value: 3,
      label: 'Tapadora #3',
    },
    {
      value: 4,
      label: 'Tapadora #4',
    },
    {
      value: 5,
      label: 'Tapadora #5',
    },
    {
      value: 6,
      label: 'Tapadora #6',
    },
    {
      value: 7,
      label: 'Tapadora #7',
    },
    {
      value: 8,
      label: 'Tapadora #8',
    },
    {
      value: 9,
      label: 'Tapadora #9',
    },
    {
      value: 10,
      label: 'Tapadora #10',
    },
  ];

  artipolata.forEach((element) => {
    paraCBTL2.push({
      value: element,
      label: element,
    });
  });

  unicotl.forEach((element) =>
    paraCBTL.push({
      value: element,
      label: element,
    })
  );

  // ordenar fechas
  EDDCLheaders.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const [selectedOptions, setSelectedOptions] = useState();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData, e) => {
    console.log(formData);
    try {
      await axios.post('/../api/eddclinsert', {
        tapadora: formData.tapadora,
        tipolata: formData.tipolata,
        producto: formData.producto,
        descripcion: formData.descripcion,
      });
    } catch (err) {
      alert(err);
    }
    router.reload();
  };

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

  return (
    <Layout>
      <div className="flex justify-center h-screen bg-white ">
        <div className="relative w-full top-36 ">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="pb-5 text-2xl font-bold">
                Examen Destructivo Cierre de Latas
              </h1>
              <h1 className="text-lg font-bold">&apos;Header&apos;</h1>
              <br />
              <div className="flex">
                <h2 className="font-bold ">Fecha:</h2>
                <h2 className="pb-3 pl-5">{datenow}</h2>
              </div>
              <div>
                <h2 className="font-bold">Tapadora:</h2>
                <div className="dropdown-container"></div>
                <Controller
                  name="tapadora"
                  className="pb-3"
                  control={control}
                  render={({ onChange, value, ref }) => (
                    <Select
                      options={CBtapadora}
                      placeholder="Tapadora"
                      value={selectedOptions}
                      onChange={(val) => onChange(val.value)}
                      isSearchable={true}
                    />
                  )}
                />
              </div>
              <div>
                <h2 className="pt-3 font-bold">Tipo de Lata:</h2>
                <div className="dropdown-container"></div>
                <Controller
                  name="tipolata"
                  control={control}
                  render={({ onChange, value, ref }) => (
                    <Select
                      options={paraCBTL2}
                      placeholder="Tipo de Lata"
                      value={selectedOptions}
                      onChange={(val) => onChange(val.value)}
                      isSearchable={true}
                    />
                  )}
                />
              </div>
              <div>
                <h2 className="pt-3 font-bold">Producto:</h2>
                <div className="dropdown-container"></div>
                <Controller
                  name="producto"
                  control={control}
                  render={({ onChange, value, ref }) => (
                    <Select
                      options={paraCBP}
                      placeholder="Producto"
                      value={selectedOptions}
                      onChange={(val) => onChange(val.value)}
                      isSearchable={true}
                    />
                  )}
                />
              </div>
              <br />
              <div className="text-center">
                <input
                  type="submit"
                  style={{
                    width: 287,
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold">Registros</h1>
      <div className="grid grid-cols-1 gap-4 py-3 md:grid-cols-3 lg:grid-cols-4">
        {EDDCLheaders.map((EDDCLheader) => (
          <Link
            key={EDDCLheader._id}
            href={`/formularios/eddcl/${EDDCLheader._id}`}
          >
            <div className="py-2 border border-black rounded-lg">
              <div className="flex justify-center object-cover pt-2 px-auto">
                {EDDCLheader._id}
              </div>
              <div className="p-5">
                <div className="flex justify-between">
                  <p className="mb-2 font-bold text-left">Fecha: </p>
                  <p className="ml-5 text-right">{EDDCLheader.datenow}</p>
                </div>
                <div className="flex justify-between">
                  <p className="mb-2 font-bold text-left">Tapadora: </p>
                  <p className="ml-5 text-right">{EDDCLheader.tapadora}</p>
                </div>
                <div className="flex justify-between">
                  <p className="mb-2 font-bold text-left">Tipo de Lata: </p>
                  <p className="ml-5 text-right">{EDDCLheader.tipolata}</p>
                </div>
                <div className="flex justify-between">
                  <p className="mb-2 font-bold text-left">Producto ID: </p>
                  <p className="ml-5 text-right">{EDDCLheader.producto}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const EDDCLheaders = await EDDCLheader.find().lean();
  const maestroprods = await Maestroprods.find().lean();
  return {
    props: {
      EDDCLheaders: EDDCLheaders.map(db.convertDocToObj),
      maestroprods: JSON.stringify(maestroprods),
    },
  };
}
