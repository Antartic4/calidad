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

export default function Eddcl2({ maestroprods, EDDCLheaders }) {
  const router = useRouter();

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

  console.log('arrTL', arrTL);

  // console.log('paraCBP', paraCBP);

  return (
    <Layout>
      <div className="flex justify-center h-screen bg-blue-300 ">
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
                  <h2 className="pt-2 text-2xl font-bold bg-red-300">
                    Tapadora:
                  </h2>
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
              <div className="text-center">
                <input
                  type="submit"
                  style={{
                    fontSize: '32px',
                    width: 287,
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semi">Registros</h1>
      {/* <button className="bg-green-400 border rounded-2xl" onSubmit={handleSort}>
        Producto
      </button> */}
      Sort
      <div className="">
        <div className="flex justify-center">
          <div className="w-1/2 px-2 py-2 border border-black rounded-lg">
            <h2 className="text-xl font-semi">Fecha</h2>
            <div className="flex justify-center">
              <div className="flex items-center">
                <a className="px-2 py-2 border rounded-lg bg-slate-300 hover:bg-slate-100">
                  <div>
                    <div className="relative flex justify-center">
                      <Link legacyBehavior href={'/formularios/eddcl2?fecha=0'}>
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
                            d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="relative flex justify-center">
                      <p className="text-sm">reciente a primero</p>
                    </div>
                  </div>
                </a>
                <a className="px-2 py-2 border rounded-lg bg-slate-300 hover:bg-slate-100">
                  <div>
                    <div className="relative flex justify-center">
                      <Link legacyBehavior href={'/formularios/eddcl2?fecha=1'}>
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
                            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="relative flex justify-center">
                      <p className="text-sm">primero a reciente</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-2 py-2 ml-1 border border-black rounded-lg">
            <h2 className="text-xl font-semi">Producto</h2>
            <div className="flex justify-center">
              <div className="flex items-center">
                <a className="px-2 py-2 border rounded-lg bg-slate-300 hover:bg-slate-100">
                  <div>
                    <div className="relative flex justify-center">
                      <Link
                        legacyBehavior
                        href={'/formularios/eddcl2?producto=0'}
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
                            d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="relative flex justify-center">
                      <p className="text-sm">primero a ultimo</p>
                    </div>
                  </div>
                </a>
                <a className="px-2 py-2 border rounded-lg bg-slate-300 hover:bg-slate-100">
                  <div>
                    <div className="relative flex justify-center">
                      <Link
                        legacyBehavior
                        href={'/formularios/eddcl2?producto=1'}
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
                            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="relative flex justify-center">
                      <p className="text-sm">ultimo a primero</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-1">
          <div className="w-1/2 px-2 py-2 border border-black rounded-lg">
            <h2 className="text-xl font-semi">Tapadora</h2>
            <div className="flex justify-center">
              <div className="flex items-center">
                <a className="px-2 py-2 border rounded-lg bg-slate-300 hover:bg-slate-100">
                  <div>
                    <div className="relative flex justify-center">
                      <Link
                        legacyBehavior
                        href={'/formularios/eddcl2?tapadora=0'}
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
                            d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="relative flex justify-center">
                      <p className="text-sm">primero a ultimo</p>
                    </div>
                  </div>
                </a>
                <a className="px-2 py-2 border rounded-lg bg-slate-300 hover:bg-slate-100">
                  <div>
                    <div className="relative flex justify-center">
                      <Link
                        legacyBehavior
                        href={'/formularios/eddcl2?tapadora=01'}
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
                            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="relative flex justify-center">
                      <p className="text-sm">ultimo a primero</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-2 py-2 ml-1 border border-black rounded-lg">
            <h2 className="text-xl font-semi">Tipo Lata</h2>
            <div className="flex justify-center">
              <div className="flex items-center">
                <a className="px-2 py-2 border rounded-lg bg-slate-300 hover:bg-slate-100">
                  <div>
                    <div className="relative flex justify-center">
                      <Link
                        legacyBehavior
                        href={'/formularios/eddcl2?tipolata=0'}
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
                            d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="relative flex justify-center">
                      <p className="text-sm">primero a ultimo</p>
                    </div>
                  </div>
                </a>
                <a className="px-2 py-2 border rounded-lg bg-slate-300 hover:bg-slate-100">
                  <div>
                    <div className="relative flex justify-center">
                      <Link
                        legacyBehavior
                        href={'/formularios/eddcl2?tipolata=1'}
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
                            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="relative flex justify-center">
                      <p className="text-sm">ultimo a primero</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        Filtro
        <div className="flex items-center justify-center">
          {/* Space # 1 - Fecha */}
          <div className="w-1/3 px-2 py-2 ml-4 border border-black rounded-lg">
            <h2 className="text-xl font-bold">Fecha</h2>
            <div className="">
              <div className="">
                <div className="flex items-center justify-center w-full bg-white">
                  <div className="relative w-full px-4 py-2 border-2 rounded border-grey ">
                    <form className="w-full">
                      <fieldset>
                        <div className="relative text-gray-800 bg-white border border-gray-300 shadow-lg">
                          <label for="frm-whatever" className="sr-only"></label>
                          <select
                            className="w-full px-2 py-1 bg-white appearance-none"
                            name="whatever"
                            id="frm-whatever"
                            placeholder="Fecha: "
                            onChange={doThis}
                          >
                            {arrFechaDif.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                          <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 border-l pointer-events-none">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Space # 2 */}
          <div className="w-1/3 px-2 py-2 ml-4 border border-black rounded-lg">
            <h2 className="text-xl font-bold">Producto</h2>
            <div className="">
              <div className="">
                <div className="flex items-center justify-center w-full bg-white">
                  <div className="relative w-full px-4 py-2 border-2 rounded border-grey ">
                    <form className="w-full">
                      <fieldset>
                        <div className="relative text-gray-800 bg-white border border-gray-300 shadow-lg">
                          <label for="frm-whatever" className="sr-only"></label>
                          <select
                            className="w-full px-2 py-1 bg-white appearance-none"
                            name="whatever"
                            id="frm-whatever"
                            placeholder="Fecha: "
                            // options={paraCBP}
                            // placeholder="Producto"
                            // value={selectedOptions}
                            // onChange={(val) => onChange(val.value)}
                            onChange={doThisProd}
                          >
                            {arrProd.map((item) => (
                              <option key={item.value} value={item.value}>
                                {item.label.length > 22
                                  ? item.label.slice(0, 22) + '...'
                                  : item.label}
                              </option>
                            ))}
                          </select>
                          <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 border-l pointer-events-none">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Space # 3 */}
          <div className="w-1/3 px-2 py-2 ml-4 border border-black rounded-lg">
            <h2 className="text-xl font-bold">Tapadora</h2>
            <div className="">
              <div className="">
                <div className="flex items-center justify-center w-full bg-white">
                  <div className="relative px-4 border-2 rounded border-grey">
                    <label className="absolute px-2 -mx-2 -my-2 bg-white text-grey-darker">
                      {message}
                    </label>
                    <input
                      id="message"
                      name="message"
                      autoFocus
                      value={message}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      type="text"
                      className="w-full py-2 leading-tight border-2 border-white rounded appearance-none text-grey-darker focus:outline-none focus:bg-white focus:border-white"
                    />
                  </div>
                </div>
              </div>
              <div>
                <form className="w-full">
                  <fieldset>
                    <div className="relative text-gray-800 bg-white border border-gray-300 shadow-lg">
                      <label for="frm-whatever" className="sr-only"></label>
                      <select
                        className="w-full px-2 py-1 bg-white appearance-none"
                        name="whatever"
                        id="frm-whatever"
                        placeholder="Fecha: "
                        // options={paraCBP}
                        // placeholder="Producto"
                        // value={selectedOptions}
                        // onChange={(val) => onChange(val.value)}
                        onChange={doThisTapadora}
                      >
                        {CBtapadora.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 border-l pointer-events-none">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>

          {/* Space # 4 */}
          {/* <div className="w-1/4 px-2 py-2 ml-4 border border-black rounded-lg">
            <h2 className="text-xl font-bold">Tipo Lata</h2>
            <div className="">
              <div className="">
                <div className="flex items-center justify-center w-full bg-white">
                  <div className="relative w-full px-4 py-2 border-2 rounded border-grey ">
                    <form className="w-full">
                      <fieldset>
                        <div className="relative text-gray-800 bg-white border border-gray-300 shadow-lg">
                          <label for="frm-whatever" className="sr-only"></label>
                          <select
                            className="w-full px-2 py-1 bg-white appearance-none"
                            name="whatever"
                            id="frm-whatever"
                            placeholder="Fecha: "
                            // options={paraCBP}
                            // placeholder="Producto"
                            // value={selectedOptions}
                            // onChange={(val) => onChange(val.value)}
                            onChange={doThisTL}
                          >
                            {arrProd.map((item) => (
                              <option key={item.value} value={item.value}>
                                {item.label.length > 13
                                  ? item.label.slice(0, 13) + '...'
                                  : item.label}
                              </option>
                            ))}
                          </select>
                          <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 border-l pointer-events-none">
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 py-3 md:grid-cols-3 lg:grid-cols-4">
        {query.fecha === '0'
          ? sortedData.map((item) => (
              <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                <div className="py-2 border border-black rounded-lg">
                  <div className="flex justify-center object-cover pt-2 px-auto">
                    {item._id}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between">
                      <p className="mb-2 font-bold text-left">Fecha: </p>
                      <p className="ml-5 text-right">{item.datenow}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="mb-2 font-bold text-left">Tapadora: </p>
                      <p className="ml-5 text-right">{item.tapadora}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="mb-2 font-bold text-left">Tipo de Lata: </p>
                      <p className="ml-5 text-right">{item.tipolata}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="mb-2 font-bold text-left">Producto ID: </p>
                      <p className="ml-5 text-right">{item.producto}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : query.fecha === '1'
          ? sortedData
              .map((item) => (
                <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                  <div className="py-2 border border-black rounded-lg">
                    <div className="flex justify-center object-cover pt-2 px-auto">
                      {item._id}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Fecha: </p>
                        <p className="ml-5 text-right">{item.datenow}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Tapadora: </p>
                        <p className="ml-5 text-right">{item.tapadora}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Tipo de Lata:
                        </p>
                        <p className="ml-5 text-right">{item.tipolata}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Producto ID:</p>
                        <p className="ml-5 text-right">{item.producto}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
              .reverse()
          : query.producto === '0'
          ? sortedData
              .sort((a, b) => (a.producto > b.producto ? 1 : -1))
              .map((item) => (
                <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                  <div className="py-2 border border-black rounded-lg">
                    <div className="flex justify-center object-cover pt-2 px-auto">
                      {item._id}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Fecha: </p>
                        <p className="ml-5 text-right">{item.datenow}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Tapadora: </p>
                        <p className="ml-5 text-right">{item.tapadora}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Tipo de Lata:
                        </p>
                        <p className="ml-5 text-right">{item.tipolata}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Producto ID:</p>
                        <p className="ml-5 text-right">{item.producto}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          : query.producto === '1'
          ? sortedData
              .sort((a, b) => (a.producto > b.producto ? 1 : -1))
              .map((item) => (
                <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                  <div className="py-2 border border-black rounded-lg">
                    <div className="flex justify-center object-cover pt-2 px-auto">
                      {item._id}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Fecha: </p>
                        <p className="ml-5 text-right">{item.datenow}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Tapadora: </p>
                        <p className="ml-5 text-right">{item.tapadora}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Tipo de Lata:
                        </p>
                        <p className="ml-5 text-right">{item.tipolata}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Producto ID:</p>
                        <p className="ml-5 text-right">{item.producto}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
              .reverse()
          : query.tapadora == '1' ||
            query.tapadora == '2' ||
            query.tapadora == '3' ||
            query.tapadora == '4' ||
            query.tapadora == '5' ||
            query.tapadora == '6' ||
            query.tapadora == '7' ||
            query.tapadora == '8' ||
            query.tapadora == '9' ||
            query.tapadora == '10' ||
            query.tapadora?.includes(',')
          ? sortedData
              .filter(
                (x) =>
                  x.tapadora == query.tapadora ||
                  query.tapadora.split(',').includes(`${x.tapadora}`)
              )
              .sort((a, b) => (a.tapadora > b.tapadora ? 1 : -1))
              .map((item) => (
                <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                  <div className="py-2 border border-black rounded-lg">
                    <div className="flex justify-center object-cover pt-2 px-auto">
                      {item._id}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Fecha: </p>
                        <p className="ml-5 text-right">{item.datenow}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Tapadora: </p>
                        <p className="ml-5 text-right">{item.tapadora}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Tipo de Lata:{' '}
                        </p>
                        <p className="ml-5 text-right">{item.tipolata}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Producto ID:{' '}
                        </p>
                        <p className="ml-5 text-right">{item.producto}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          : query.tapadora === '0'
          ? sortedData
              .sort((a, b) => (a.tapadora > b.tapadora ? 1 : -1))
              .map((item) => (
                <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                  <div className="py-2 border border-black rounded-lg">
                    <div className="flex justify-center object-cover pt-2 px-auto">
                      {item._id}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Fecha: </p>
                        <p className="ml-5 text-right">{item.datenow}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Tapadora: </p>
                        <p className="ml-5 text-right">{item.tapadora}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Tipo de Lata:
                        </p>
                        <p className="ml-5 text-right">{item.tipolata}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Producto ID:</p>
                        <p className="ml-5 text-right">{item.producto}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          : query.tapadora === '01'
          ? sortedData
              .sort((a, b) => (a.tapadora > b.tapadora ? 1 : -1))
              .map((item) => (
                <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                  <div className="py-2 border border-black rounded-lg">
                    <div className="flex justify-center object-cover pt-2 px-auto">
                      {item._id}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Fecha: </p>
                        <p className="ml-5 text-right">{item.datenow}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Tapadora: </p>
                        <p className="ml-5 text-right">{item.tapadora}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Tipo de Lata:
                        </p>
                        <p className="ml-5 text-right">{item.tipolata}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Producto ID:</p>
                        <p className="ml-5 text-right">{item.producto}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
              .reverse()
          : query.tipolata === '0'
          ? sortedData
              .sort((a, b) => (a.tipolata > b.tipolata ? 1 : -1))
              .map((item) => (
                <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                  <div className="py-2 border border-black rounded-lg">
                    <div className="flex justify-center object-cover pt-2 px-auto">
                      {item._id}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Fecha: </p>
                        <p className="ml-5 text-right">{item.datenow}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Tapadora: </p>
                        <p className="ml-5 text-right">{item.tapadora}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Tipo de Lata:
                        </p>
                        <p className="ml-5 text-right">{item.tipolata}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Producto ID:</p>
                        <p className="ml-5 text-right">{item.producto}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          : query.tipolata === '1'
          ? sortedData
              .sort((a, b) => (a.tipolata > b.tipolata ? 1 : -1))
              .map((item) => (
                <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                  <div className="py-2 border border-black rounded-lg">
                    <div className="flex justify-center object-cover pt-2 px-auto">
                      {item._id}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Fecha: </p>
                        <p className="ml-5 text-right">{item.datenow}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Tapadora: </p>
                        <p className="ml-5 text-right">{item.tapadora}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Tipo de Lata:
                        </p>
                        <p className="ml-5 text-right">{item.tipolata}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Producto ID:</p>
                        <p className="ml-5 text-right">{item.producto}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
              .reverse()
          : query.fecha?.includes('-')
          ? sortedData
              .filter((x) => query.fecha === x.datenow)
              .map((item) => (
                <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                  <div className="py-2 border border-black rounded-lg">
                    <div className="flex justify-center object-cover pt-2 px-auto">
                      {item._id}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Fecha: </p>
                        <p className="ml-5 text-right">{item.datenow}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Tapadora: </p>
                        <p className="ml-5 text-right">{item.tapadora}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Tipo de Lata:
                        </p>
                        <p className="ml-5 text-right">{item.tipolata}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Producto ID:</p>
                        <p className="ml-5 text-right">{item.producto}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          : query.producto?.length > 2
          ? sortedData
              .filter((x) => query.producto === x.producto)
              .map((item) => (
                <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                  <div className="py-2 border border-black rounded-lg">
                    <div className="flex justify-center object-cover pt-2 px-auto">
                      {item._id}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Fecha: </p>
                        <p className="ml-5 text-right">{item.datenow}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Tapadora: </p>
                        <p className="ml-5 text-right">{item.tapadora}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">
                          Tipo de Lata:
                        </p>
                        <p className="ml-5 text-right">{item.tipolata}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-2 font-bold text-left">Producto ID:</p>
                        <p className="ml-5 text-right">{item.producto}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          : sortedData.map((item) => (
              <Link key={item._id} href={`/formularios/eddcl/${item._id}`}>
                <div className="py-2 border border-black rounded-lg">
                  <div className="flex justify-center object-cover pt-2 px-auto">
                    {item._id}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between">
                      <p className="mb-2 font-bold text-left">Fecha: </p>
                      <p className="ml-5 text-right">{item.datenow}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="mb-2 font-bold text-left">Tapadora: </p>
                      <p className="ml-5 text-right">{item.tapadora}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="mb-2 font-bold text-left">Tipo de Lata: </p>
                      <p className="ml-5 text-right">{item.tipolata}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="mb-2 font-bold text-left">Producto ID: </p>
                      <p className="ml-5 text-right">{item.producto}</p>
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
