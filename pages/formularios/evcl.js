import React, { useState } from 'react';
import Layout from '../../src/components/Layout';
import Maestroprods from '../../models/Maestroprods';
import db from '../../utils/connectMongo';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EVCLheader from '../../models/EVCLheader';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

export default function Eddcl2({ maestroprods, EVCLheaders }) {
  const router = useRouter();

  const sortedEHeaders = EVCLheaders.reverse();

  const productos = JSON.parse(maestroprods);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

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
    '209/211 x 200',
    '209/211 x 300',
    '209/211 x 400',
    '209/211 x 413',
    '214/300 x 407',
    '401 x 411',
    '603 x 700',
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

  const [selectedOptions, setSelectedOptions] = useState();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData, e) => {
    // console.log(formData);
    try {
      await axios.post('/../api/evclinsert', {
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

  console.log('sortedEHeaders', sortedEHeaders);

  const paraTabla = [];
  sortedEHeaders.forEach((item) => {
    let fechaString = item.datenow;
    let [dia, mes, ano] = fechaString.split('-');
    let objFecha = new Date(+ano, +mes - 1, +dia);
    let linklink = (
      <div className="p-3 text-base bg-yellow-400 font-semi rounded-xl">
        <Link href={`/formularios/evcl/${item._id}`}>Editar</Link>
      </div>
    );
    paraTabla.push({
      id: item._id,
      datenow: objFecha,
      tipolata: item.tipolata,
      producto: item.producto,
      link: linklink,
    });
  });

  function dateTemplate(rowData, column) {
    return rowData['datenow'].toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  }

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <Link href="https://i.ibb.co/gRvS3np/evcl.png">
          <div className="button-borders top-3">
            <button className="primary-button ">Ver Version Fisica</button>
          </div>
        </Link>
      </div>
      <div className="flex justify-center h-screen bg-white ">
        <div className="relative top-10">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-semi">Examen Visual Cierre Latas</h1>
              <br />
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl text-left font-semi ">Fecha :</h4>
                  <h4 className="text-xl text-right">{datenow}</h4>
                </div>
                <div>
                  <h2 className="text-2xl text-left font-semi">Producto:</h2>
                  <Controller
                    name="producto"
                    control={control}
                    render={({ onChange, value, ref }) => (
                      <Select
                        options={paraCBP}
                        placeholder="Producto"
                        className="text-xl"
                        value={selectedOptions}
                        onChange={(val) => onChange(val.value)}
                        isSearchable={true}
                      />
                    )}
                  />
                </div>
                <div>
                  <h2 className="text-2xl text-left font-semi">Tamaño Lata:</h2>
                  <Controller
                    name="tipolata"
                    control={control}
                    render={({ onChange, value, ref }) => (
                      <Select
                        options={paraCBTL2}
                        className="text-xl"
                        placeholder="Tipo de Lata"
                        value={selectedOptions}
                        onChange={(val) => onChange(val.value)}
                        isSearchable={true}
                      />
                    )}
                  />
                </div>
              </div>
              <br />
              <div className="text-xl">
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
      <br />

      {/* <div className="relative flex flex-col w-full overflow-x-auto rounded-xl">
        <div className="flex-grow overflow-auto ">
          <table>
            <thead>
              <tr>
                <th
                  className="sticky top-0 px-4 py-3 text-black bg-slate-300"
                  width={'200px'}
                >
                  Fecha
                </th>
                <th
                  className="sticky top-0 px-4 py-3 text-black bg-slate-300"
                  width={'200px'}
                >
                  Tipo Lata
                </th>
                <th
                  className="sticky top-0 px-4 py-3 text-black bg-slate-300"
                  width={'200px'}
                >
                  Producto
                </th>
                <th className="sticky top-0 px-2 py-3 text-black bg-slate-300">
                  Accion
                </th>
              </tr>
            </thead>
            <tbody className="divide-y bg-slate-100">
              {sortedEHeaders.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b"
                >
                  <td className="text-center">{item.datenow}</td>
                  <td className="overflow-x-auto text-center">
                    {item.tipolata}
                  </td>
                  <td className="text-center">{item.producto}</td>
                  <td className="text-center">
                    <Link
                      href={`/formularios/evcl/${item._id}`}
                      className="bg-gray-100"
                    >
                      <div
                        className="flex justify-center"
                        style={{
                          width: '100px',
                          alignContent: 'center',
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
      <br />
      <div className="text-xl text-center App">
        Buscar <br />
        <InputText
          onInput={(e) =>
            setFilters({
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            })
          }
        />
        <br />
        <DataTable
          className="pt-3"
          value={paraTabla}
          sortMode="multiple"
          filters={filters}
          resizableColumns="true"
          showGridlines
        >
          <Column field="datenow" body={dateTemplate} header="Fecha" sortable />
          <Column field="tipolata" header="Tipo Lata" sortable />
          <Column field="producto" header="Producto" sortable />
          <Column field="link" header="Link" />
        </DataTable>
      </div>
      {/* <div className="grid grid-cols-1 gap-4 py-3">
        {sortedEHeaders.map((EVCLheader) => (
          <Link
            key={EVCLheader._id}
            href={`/formularios/evcl/${EVCLheader._id}`}
            className="bg-gray-100"
          >
            <button id="notabutton" className="w-full h-full">
              <div className="py-2 border border-black rounded-lg">
                <div className="flex justify-center object-cover pt-2 px-auto">
                  {EVCLheader._id}
                </div>
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="mb-2 font-bold text-left">Fecha: </p>
                    <p className="ml-5 text-right">{EVCLheader.datenow}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="mb-2 font-bold text-left">Tipo de Lata: </p>
                    <p className="ml-5 text-right">{EVCLheader.tipolata}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="mb-2 font-bold text-left">Producto ID: </p>
                    <p className="ml-5 text-right">{EVCLheader.producto}</p>
                  </div>
                </div>
              </div>
            </button>
          </Link>
        ))}
      </div> */}
      <br />
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const EVCLheaders = await EVCLheader.find().lean();
  const maestroprods = await Maestroprods.find().lean();
  return {
    props: {
      EVCLheaders: EVCLheaders.map(db.convertDocToObj),
      maestroprods: JSON.stringify(maestroprods),
    },
  };
}
