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
    formState,
  } = useForm();

  const { isSubmitting } = formState;

  const onSubmit = async (formData, e) => {
    try {
      await axios.post('/../api/evclinsert', {
        tipolata: formData.tipolata,
        producto: formData.producto,
        descripcion: formData.descripcion,
      });
    } catch (err) {
      alert(err);
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
      router.reload();
    });
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
              <div className="relative z-0 flex justify-center text-center pt-7">
                <div className="button-borders">
                  <button
                    disabled={isSubmitting}
                    className="z-20 primary-button"
                  >
                    {isSubmitting ? (
                      <p className="text-lg">Cargando</p>
                    ) : (
                      <p className="text-lg">Submit</p>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
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
