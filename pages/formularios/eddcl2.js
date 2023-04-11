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

  //producto (limpiar lo que pude)
  const paraCBP = [];
  productos.forEach((element) =>
    paraCBP.push({
      value: element.material,
      label: element.descripcion,
    })
  );

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

  unicotl.forEach((element) =>
    paraCBTL.push({
      value: element,
      label: element,
    })
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
      <div className="bg-white h-screen flex justify-center ">
        <div className="relative top-36 w-72 ">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-bold">
                Examen Destructive Cierre de Latas
              </h1>
              <h1 className="font-bold text-lg">&apos;Header&apos;</h1>
              <br />
              <div className="flex">
                <h2 className="font-bold">Fecha:</h2>
                <h2 className="pl-5">{datenow}</h2>
              </div>
              <div>
                <h2 className="font-bold">Tapadora:</h2>
                <div className="dropdown-container"></div>
                <Controller
                  name="tapadora"
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
                <h2 className="font-bold">Tipo de Lata:</h2>
                <div className="dropdown-container"></div>
                <Controller
                  name="tipolata"
                  control={control}
                  render={({ onChange, value, ref }) => (
                    <Select
                      options={paraCBTL}
                      placeholder="Tipo de Lata"
                      value={selectedOptions}
                      onChange={(val) => onChange(val.value)}
                      isSearchable={true}
                    />
                  )}
                />
              </div>
              <div>
                <h2 className="font-bold">Producto:</h2>
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
              <div className="">
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 py-3">
        {EDDCLheaders.map((EDDCLheader) => (
          <Link
            key={EDDCLheader._id}
            href={`/formularios/eddcl/${EDDCLheader._id}`}
          >
            <div className="rounded-lg border border-black py-2">
              <div className="flex object-cover justify-center pt-2 px-auto">
                {EDDCLheader._id}
              </div>
              <div className="p-5">
                <div className="flex justify-between">
                  <p className="mb-2 text-left font-bold">Fecha: </p>
                  <p className="ml-5 text-right">{EDDCLheader.datenow}</p>
                </div>
                <div className="flex justify-between">
                  <p className="mb-2 text-left font-bold">Tapadora: </p>
                  <p className="ml-5 text-right">{EDDCLheader.tapadora}</p>
                </div>
                <div className="flex justify-between">
                  <p className="mb-2 text-left font-bold">Tipo de Lata: </p>
                  <p className="ml-5 text-right">{EDDCLheader.tipolata}</p>
                </div>
                <div className="flex justify-between">
                  <p className="mb-2 text-left font-bold">Producto ID: </p>
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
