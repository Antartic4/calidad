/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../../../src/components/Layout';
import db from '../../../utils/connectMongo';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';
import EVCLdetail from '../../../models/EVCLdetail';
import EVCLheader from '../../../models/EVCLheader';
import Link from 'next/link';

export default function klk(props) {
  const router = useRouter();
  const { evclheader, evcldetail } = props;
  const comentarios = [];

  console.log('evcldetail.length', evcldetail.length);
  for (let i = 0; i < evcldetail.length; i++) {
    if (evcldetail[i].observaciones.length > 1) {
      comentarios.push(evcldetail[i].observaciones);
      console.log('comentarios ' + i, evcldetail[i].observaciones);
    }
  }

  console.log('comentarios', comentarios);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const opciones3 = [
    {
      value: 'PISOS Y TECHADOS TORGINOL, S.A.S.',
      label: 'PISOS Y TECHADOS TORGINOL, S.A.S.',
    },
    {
      value: 'ENVASES ANTILLANOS, S.R.L.',
      label: 'ENVASES ANTILLANOS, S.R.L.',
    },
    {
      value: 'ENVASES TROPICALES, C. X A.',
      label: 'ENVASES TROPICALES, C. X A.',
    },
    {
      value: 'EASY OPEN LID INDUSTRY CORP YIWU',
      label: 'EASY OPEN LID INDUSTRY CORP YIWU',
    },
  ];

  const [eVCLHInfo, setEVCLHInfo] = useState({
    headid: router.query.id,
    codigo: '',
    fabricalatas: '',
    cabezasaceptadas1: '',
    cabezasaceptadas2: '',
    cabezasaceptadas3: '',
    cabezasaceptadas4: '',
    cabezasaceptadas5: '',
    cabezasaceptadas6: '',
    danos: '',
    estado: '',
    aceptacion: '',
    observaciones: '',
  });

  var time = new Date();
  const tiempoahora = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const opciones = [
    {
      value: 'Si',
      label: 'Si',
    },
    {
      value: 'No',
      label: 'No',
    },
    {
      value: '-',
      lable: '-',
    },
  ];

  const opciones2 = [
    {
      value: 'A',
      label: 'A',
    },
    {
      value: 'B',
      label: 'B',
    },
    {
      value: 'C',
      label: 'C',
    },
    {
      value: 'D',
      label: 'D',
    },
    {
      value: 'F',
      label: 'F',
    },
  ];

  const onSubmit = async (formData, evclheader, e) => {
    console.log(formData, evclheader);
    try {
      await axios.post('/../api/evclinsertdet', {
        headid: router.query.id,
        codigo: formData.codigo,
        fabricalatas: formData.fabricalatas,
        cabeza1: formData.cabeza1,
        cabeza2: formData.cabeza2,
        cabeza3: formData.cabeza3,
        cabeza4: formData.cabeza4,
        cabeza5: formData.cabeza5,
        cabeza6: formData.cabeza6,
        danos: formData.danos,
        estado: formData.estado,
        aceptacion: formData.aceptacion,
        observaciones: formData.observaciones,
      });
    } catch (err) {
      alert(err);
    }
    router.reload();
  };

  const handleChange = (event) => {
    setEVCLHInfo({ ...eVCLHInfo, [event.target.name]: event.target.value });
  };

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <Link href="https://i.ibb.co/gRvS3np/evcl.png">
          <div className="button-borders">
            <button className="primary-button">Ver Version Fisica</button>
          </div>
        </Link>
      </div>
      <br />
      <div className="flex justify-center">
        <div className="block w-full p-6 bg-gray-300 border border-black rounded-lg shadow-lg">
          <h1 className="py-2 text-2xl font-bold text-center">
            Examen Destructivo Doble Cierre Latas para :
            <p className="text-2xl font-bold">{evclheader._id}</p>
          </h1>
          <br />
          {/* Fecha */}

          <div className="flex justify-between">
            <p className="font-bold text-left">Fecha : </p>
            <div className="pl-5 pr-10 text-right">{evclheader.datenow}</div>
          </div>

          {/* Tipo de Lata Text-Input */}
          <div className="flex justify-between py-2">
            <p className="font-bold text-left">Tipo de Lata :</p>
            <div className="pr-10 text-right">{evclheader.tipolata}</div>
          </div>

          {/* Producto Text-Input */}
          <div className="flex justify-between py-2 pb-5">
            <p className="font-bold text-left">Producto:</p>
            <div className="pr-10 text-right">{evclheader.producto}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <div className="block w-full p-6 bg-gray-300 border border-black rounded-lg shadow-lg">
          <h1 className="py-2 text-2xl font-bold text-center">
            Entrada Detalle para : <br /> {evclheader.producto} (
            {evclheader.tipolata})
          </h1>
          <br />
          {/* donde van los campos a entrar */}
          <div>
            <div className="flex justify-center ">
              <div className="relative ">
                <div className="">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    onChange={handleChange}
                  >
                    {/* hora */}
                    <div className="flex justify-center">
                      <h2 className="font-bold">Hora:</h2>
                      <h2 className="pl-5">{tiempoahora}</h2>
                    </div>
                    <br />
                    {/* codigo */}
                    <div className="flex justify-center">
                      <div>
                        <h2 className="font-bold">Codigo:</h2>
                        <div className="px-3">
                          <input
                            type="number"
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Codigo"
                            name="codigo"
                            ref={register}
                          />
                        </div>
                      </div>
                      <div>
                        {/* Fabrica Latas */}
                        <h2 className="font-bold">Fabrica Latas:</h2>
                        <div className="px-3 ">
                          <div className="dropdown-container">
                            <Controller
                              name="fabricalatas"
                              control={control}
                              render={({ onChange, value, ref }) => (
                                <Select
                                  options={opciones3}
                                  placeholder=""
                                  // value={selectedOptions}
                                  onChange={(val) => onChange(val.value)}
                                  isSearchable={true}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />
                    <h2 className="font-bold">Cabezas Aceptadas</h2>
                    {/* Cabeza #1 */}
                    <div className="flex">
                      <div>
                        <h2 className="font-bold">Cabeza #1:</h2>
                        <div className="px-3 dropdown-container">
                          <Controller
                            name="cabeza1"
                            control={control}
                            render={({ onChange, value, ref }) => (
                              <Select
                                options={opciones}
                                placeholder="Si / No"
                                // value={selectedOptions}
                                onChange={(val) => onChange(val.value)}
                                isSearchable={true}
                              />
                            )}
                          />
                        </div>
                      </div>
                      {/* Cabeza #2 */}
                      <div>
                        <h2 className="font-bold">Cabeza #2:</h2>
                        <div className="px-3 dropdown-container">
                          <Controller
                            name="cabeza2"
                            control={control}
                            render={({ onChange, value, ref }) => (
                              <Select
                                options={opciones}
                                placeholder="Si / No"
                                // value={selectedOptions}
                                onChange={(val) => onChange(val.value)}
                                isSearchable={true}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    {/* Cabeza #3 */}
                    <div className="flex">
                      <div>
                        <h2 className="font-bold">Cabeza #3:</h2>
                        <div className="px-3 dropdown-container">
                          <Controller
                            name="cabeza3"
                            control={control}
                            render={({ onChange, value, ref }) => (
                              <Select
                                options={opciones}
                                placeholder="Si / No"
                                // value={selectedOptions}
                                onChange={(val) => onChange(val.value)}
                                isSearchable={true}
                              />
                            )}
                          />
                        </div>
                      </div>
                      {/* Cabeza #4 */}
                      <div>
                        <h2 className="font-bold">Cabeza #4:</h2>
                        <div className="px-3 dropdown-container">
                          <Controller
                            name="cabeza4"
                            control={control}
                            render={({ onChange, value, ref }) => (
                              <Select
                                options={opciones}
                                placeholder="Si / No"
                                // value={selectedOptions}
                                onChange={(val) => onChange(val.value)}
                                isSearchable={true}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    {/* Cabeza #5 */}
                    <div className="flex">
                      <div>
                        <h2 className="font-bold">Cabeza #5:</h2>
                        <div className="px-3 dropdown-container">
                          <Controller
                            name="cabeza5"
                            control={control}
                            render={({ onChange, value, ref }) => (
                              <Select
                                options={opciones}
                                placeholder="Si / No"
                                // value={selectedOptions}
                                onChange={(val) => onChange(val.value)}
                                isSearchable={true}
                              />
                            )}
                          />
                        </div>
                      </div>
                      {/* Cabeza #6 */}
                      <div>
                        <h2 className="font-bold">Cabeza #6:</h2>
                        <div className="px-3 dropdown-container">
                          <Controller
                            name="cabeza6"
                            control={control}
                            render={({ onChange, value, ref }) => (
                              <Select
                                options={opciones}
                                placeholder="Si / No"
                                // value={selectedOptions}
                                onChange={(val) => onChange(val.value)}
                                isSearchable={true}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <br />

                    <h2 className="font-bold">Inspección Latas</h2>

                    {/* Daños Mecanicos */}
                    <div className="flex">
                      <div>
                        <h2 className="font-bold">Daños Mecanicos:</h2>
                        <div className="px-3 dropdown-container">
                          <Controller
                            name="danos"
                            control={control}
                            render={({ onChange, value, ref }) => (
                              <Select
                                options={opciones}
                                placeholder="Si / No"
                                // value={selectedOptions}
                                onChange={(val) => onChange(val.value)}
                                isSearchable={true}
                              />
                            )}
                          />
                        </div>
                      </div>
                      {/* Estado Compuesto */}
                      <div>
                        <h2 className="font-bold">Estado Compuesto:</h2>
                        <div className="px-3 dropdown-container">
                          <Controller
                            name="estado"
                            control={control}
                            render={({ onChange, value, ref }) => (
                              <Select
                                options={opciones2}
                                placeholder="A -> F"
                                // value={selectedOptions}
                                onChange={(val) => onChange(val.value)}
                                isSearchable={true}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    {/* Aceptacion */}
                    <div className="flex items-center justify-center">
                      <h2 className="font-bold">Aceptación:</h2>
                      <div className="px-3 dropdown-container ">
                        <Controller
                          name="aceptacion"
                          control={control}
                          render={({ onChange, value, ref }) => (
                            <Select
                              options={opciones}
                              placeholder="Si / No"
                              // value={selectedOptions}
                              onChange={(val) => onChange(val.value)}
                              isSearchable={true}
                            />
                          )}
                        />
                      </div>
                    </div>
                    <br />
                    {/* Observaciones */}
                    <div>
                      <h2 className="font-bold text-left">Observaciones:</h2>
                      <div className="px-3 ">
                        <textarea
                          id="observaciones"
                          rows="4"
                          name="observaciones"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Observaciones"
                          ref={register}
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <br />
                      <input type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Head-ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Hora
                </th>
                <th scope="col" className="px-6 py-3">
                  Codigo
                </th>
                <th scope="col" className="px-6 py-3">
                  Fabrica Latas
                </th>
                <th scope="col" className="px-6 py-3">
                  Cabeza #1
                </th>
                <th scope="col" className="px-6 py-3">
                  Cabeza #2
                </th>
                <th scope="col" className="px-6 py-3">
                  Cabeza #3
                </th>
                <th scope="col" className="px-6 py-3">
                  Cabeza #4
                </th>
                <th scope="col" className="px-6 py-3">
                  Cabeza #5
                </th>
                <th scope="col" className="px-6 py-3">
                  Cabeza #6
                </th>
                <th scope="col" className="px-6 py-3">
                  Daños
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3">
                  Aceptacion
                </th>
              </tr>
            </thead>
            <tbody>
              {evcldetail.map((item) => (
                <tr
                  key={item.headid}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="">{item._id}</td>
                  <td className="text-center">{item.horanow}</td>
                  <td className="text-center">{item.codigo}</td>

                  <td className="text-center">{item.fabricalatas}</td>

                  <td className="text-center">{item.cabeza1}</td>
                  <td className="text-center">{item.cabeza2}</td>
                  <td className="text-center">{item.cabeza3}</td>
                  <td className="text-center">{item.cabeza4}</td>
                  <td className="text-center">{item.cabeza5}</td>
                  <td className="text-center">{item.cabeza6}</td>
                  <td className="text-center">{item.danos}</td>
                  <td className="text-center">{item.estado}</td>
                  <td className="text-center">{item.aceptacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pt-4 bg-white">
        {comentarios.map((item) => (
          <h1 className="text-lg text-left text-red-600" key={item}>
            • - {item.toString()}
          </h1>
        ))}
      </div>
      <br />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  const idd = params.id;

  await db.connect();
  const evclheader = await EVCLheader.findOne({ _id: idd }).lean();
  const evcldetail = await EVCLdetail.find({ headid: idd }).lean();
  await db.disconnect();
  return {
    props: {
      evclheader: evclheader ? db.convertDocToObj(evclheader) : null,
      evcldetail: evcldetail.map(db.convertDocToObj),
    },
  };
}
