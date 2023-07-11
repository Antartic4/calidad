import React, { useEffect, useState } from 'react';
import Layout from '../../src/components/Layout';
import Maestroprods from '../../models/Maestroprods';
import db from '../../utils/connectMongo';
import { Controller, useForm } from 'react-hook-form';
import { Combobox } from '@headlessui/react';
import Select from 'react-select';
import axios from 'axios';
import Link from 'next/link';
import EDDCLheader from '../../models/EDDCLheader';
import { useRouter } from 'next/router';

//invento
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

export default function Eddcl2({ maestroprods, EDDCLheaders }) {
  const router = useRouter();

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const { producto, fecha, tipolata, tapadora } = router.query;

  const query = router.query;

  const sortedEHeaders = EDDCLheaders.reverse();

  const [sortedData, setSortedData] = useState(sortedEHeaders);

  // 1
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setUpdated(message);
      router.push(`/formularios/eddcl2?tapadora=${message}`);
    }
  };

  useEffect(() => {}, [router.query]);

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
    '209/211 x 200',
    '209/211 x 300',
    '209/211 x 400',
    '209/211 x 413',
    '214/300 x 407',
    '401 x 411',
    '603 x 700',
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
    formState,
  } = useForm();

  const { isSubmitting } = formState;

  const onSubmit = async (formData, e) => {
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

  const nuevoSort = [];

  EDDCLheaders.forEach((element) => {
    nuevoSort.push(element);
  });

  // if (query.'tapadora'=== undefined) {
  //   console.log('UNDEFINED', query.tapadora);
  // } else {
  //   console.log('QUERY.TAPADORA', query.tapadora);
  // }

  const Dropdown = ({ placeHolder, options }) => {
    const getDisplay = () => {
      return placeHolder;
    };
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue;
    }
    return placeHolder;
  };

  const arrFechaDif = [];
  sortedData.forEach((item) => {
    if (arrFechaDif.includes(item.datenow)) {
    } else {
      arrFechaDif.push(item.datenow);
    }

    arrFechaDif.reverse();
  });

  const doThis = (event) => {
    let klk = event.target.value;
    router.push(`/formularios/eddcl2?fecha=${klk}`);
  };

  const doThisProd = (event) => {
    let klk = event.target.value;
    router.push(`/formularios/eddcl2?producto=${klk}`);
  };

  const doThisTapadora = (event) => {
    let klk = event.target.value;
    router.push(`/formularios/eddcl2?tapadora=${klk}`);
  };

  const doThisTL = (event) => {
    let klk = event.target.value;
    router.push(`/formularios/eddcl2?tipolata=${klk}`);
  };

  const arrProd = [];
  sortedData.forEach((element) => {
    arrProd.push({
      value: element.producto,
      label: '',
    });
  });

  arrProd.forEach((item) => {
    const match = paraCBP.find(
      (paraItem) => paraItem.value.toString() === item.value
    );
    if (match) {
      item.label = match.label;
    }
  });

  const arrTL = [];
  sortedData.forEach((element) => {
    arrTL.push({
      value: element.tipolata,
      label: element.tipolata,
    });
  });

  // console.log('sortedData', sortedData);

  const paraTabla = [];
  sortedData.forEach((item) => {
    let fechaString = item.datenow;
    let [dia, mes, ano] = fechaString.split('-');
    let objFecha = new Date(+ano, +mes - 1, +dia);
    let linklink = (
      <div className="p-3 text-base bg-yellow-400 font-semi rounded-xl">
        <Link href={`/formularios/eddcl/${item._id}`}>Editar</Link>
      </div>
    );
    paraTabla.push({
      id: item._id,
      fechanow: item.datenow,
      datenow: objFecha,
      tapadora: item.tapadora,
      tipolata: item.tipolata,
      producto: item.producto,
      link: linklink,
    });
  });
  // console.log('paraTabla', paraTabla);

  function dateTemplate(rowData, column) {
    return rowData['datenow'].toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  }

  // console.log('paraCBP', paraCBP);

  return (
    <Layout>
      <div className="flex justify-center h-screen ">
        <div className="relative w-full top-12">
          <div className="">
            <div className="flex items-center justify-center">
              <Link href="https://i.ibb.co/9GdTS3m/eddcl.png">
                <div className="button-borders">
                  <button className="primary-button">
                    <p className="text-lg">Ver Version Fisica</p>
                  </button>
                </div>
              </Link>
            </div>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="py-5 text-3xl font-bold">
                Examen Destructivo Cierre de Latas
              </h1>
              <br />
              <div>
                <div>
                  <h2 className="text-2xl font-bold">Fecha:</h2>
                  <h2 className="text-2xl">{datenow}</h2>
                </div>
                <br />
                <div>
                  <h2 className="pt-2 text-2xl font-bold ">Tapadora:</h2>
                  <div className="">
                    <Controller
                      name="tapadora"
                      control={control}
                      render={({ onChange, value, ref }) => (
                        <Select
                          options={CBtapadora}
                          placeholder="Tapadora"
                          className="text-2xl"
                          value={selectedOptions}
                          onChange={(val) => onChange(val.value)}
                          isSearchable={true}
                        />
                      )}
                    />
                  </div>
                </div>
                <br />
                <div>
                  <h2 className="pt-3 text-2xl font-bold">Tipo de Lata:</h2>
                  <div className="w-full">
                    <Controller
                      name="tipolata"
                      control={control}
                      render={({ onChange, value, ref }) => (
                        <Select
                          options={paraCBTL2}
                          placeholder="Tipo de Lata"
                          value={selectedOptions}
                          className="text-xl"
                          onChange={(val) => onChange(val.value)}
                          isSearchable={true}
                        />
                      )}
                    />
                  </div>
                  <div></div>
                  <h2 className="pt-3 text-2xl font-bold">Producto:</h2>
                  <br />
                  <div className="dropdown-container"></div>
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
              </div>
              <br />
              <div className="relative z-0 flex justify-center text-center">
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
      {/* <button className="bg-green-400 border rounded-2xl" onSubmit={handleSort}>
        Producto
      </button> */}

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
        <DataTable
          className="pt-3"
          value={paraTabla}
          sortMode="multiple"
          filters={filters}
          resizableColumns="true"
          showGridlines
          alwaysShowPaginator
        >
          <Column field="datenow" body={dateTemplate} header="Fecha" sortable />
          <Column field="tapadora" header="Tapadora" sortable />
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
  const EDDCLheaders = await EDDCLheader.find().lean();
  const maestroprods = await Maestroprods.find().lean();
  return {
    props: {
      EDDCLheaders: EDDCLheaders.map(db.convertDocToObj),
      maestroprods: JSON.stringify(maestroprods),
    },
  };
}
