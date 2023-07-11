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

  console.log('evcldetail', evcldetail);

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
          <h1 className="py-2 text-2xl text-center font-semi">
            Examen Destructivo Doble Cierre Latas
          </h1>
          <br />
          {/* Fecha */}
          <div className="flex items-center justify-between">
            <h4 className="text-xl text-left font-semi">Fecha :</h4>
            <h4 className="text-lg text-right">{evclheader.datenow}</h4>
          </div>
          <br />
          {/* Tipo de Lata Text-Input */}
          <div className="flex items-center justify-between">
            <h4 className="text-xl text-left font-semi">Tipo de Lata :</h4>
            <h4 className="text-lg text-right">{evclheader.tipolata}</h4>
          </div>
          <br />
          {/* Producto Text-Input */}
          <div className="flex items-center justify-between">
            <h4 className="text-xl text-left font-semi">Producto :</h4>
            <h4 className="text-lg text-right">{evclheader.producto}</h4>
          </div>
        </div>
        <br />
      </div>
      <div className="flex justify-center pt-5">
        <div className="block w-full p-6 bg-gray-300 border border-black rounded-lg shadow-lg">
          <h1 className="py-2 text-2xl text-center font-semi">
            Entrada Detalle para: {evclheader.producto} ({evclheader.tipolata})
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
                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl text-left font-semi">Hora :</h4>
                        <h4 className="text-lg">{tiempoahora}</h4>
                      </div>
                    </div>
                    <br />
                    {/* codigo */}
                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl text-left font-semi">Codigo:</h2>
                        <div className="flex justify-center item-centerd">
                          <input
                            type="number"
                            className=" form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Codigo"
                            name="codigo"
                            ref={register}
                          />
                        </div>
                      </div>
                    </div>
                    <br />

                    {/* Fabrica Latas */}

                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="">
                        <h4 className="text-xl text-left font-semi">
                          Fabrica Latas:
                        </h4>
                        <div className="w-full">
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
                    <br />
                    <h2 className="text-xl font-semi">Cabezas Aceptadas</h2>
                    {/* Cabeza #1 + Cabeza #2*/}
                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-xl font-semi">Cabeza #1:</h2>
                          <div className="w-full">
                            <Controller
                              name="cabeza1"
                              control={control}
                              render={({ onChange, value, ref }) => (
                                <Select
                                  options={opciones}
                                  className="text-xl"
                                  placeholder="Si / No"
                                  // value={selectedOptions}
                                  onChange={(val) => onChange(val.value)}
                                  isSearchable={true}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <h2 className="text-xl font-semi">Cabeza #2:</h2>
                          <div className="w-full">
                            <Controller
                              name="cabeza2"
                              control={control}
                              render={({ onChange, value, ref }) => (
                                <Select
                                  options={opciones}
                                  className="text-xl"
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
                    </div>
                    <br />
                    {/* Cabeza #3 + Cabeza #4 */}

                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-xl font-semi">Cabeza #3:</h2>
                          <div className="w-full">
                            <Controller
                              name="cabeza3"
                              control={control}
                              render={({ onChange, value, ref }) => (
                                <Select
                                  options={opciones}
                                  className="text-xl"
                                  placeholder="Si / No"
                                  // value={selectedOptions}
                                  onChange={(val) => onChange(val.value)}
                                  isSearchable={true}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <h2 className="text-xl font-semi">Cabeza #4:</h2>
                          <div className="w-full">
                            <Controller
                              name="cabeza4"
                              control={control}
                              render={({ onChange, value, ref }) => (
                                <Select
                                  options={opciones}
                                  className="text-xl"
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
                    </div>
                    <br />

                    {/* Cabeza #5 + Cabeza #6 */}

                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-xl font-semi">Cabeza #5:</h2>
                          <div className="w-full">
                            <Controller
                              name="cabeza5"
                              control={control}
                              render={({ onChange, value, ref }) => (
                                <Select
                                  options={opciones}
                                  className="text-xl"
                                  placeholder="Si / No"
                                  // value={selectedOptions}
                                  onChange={(val) => onChange(val.value)}
                                  isSearchable={true}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <h2 className="text-xl font-semi">Cabeza #6:</h2>
                          <div className="w-full">
                            <Controller
                              name="cabeza6"
                              control={control}
                              render={({ onChange, value, ref }) => (
                                <Select
                                  options={opciones}
                                  className="text-xl"
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
                    </div>

                    <h2 className="pt-5 text-xl font-semi">Inspección Latas</h2>

                    {/* Daños Mecanicos + Estado Compuesto */}

                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-lg font-semi">
                            Daños Mecanicos:
                          </h2>
                          <div className="w-full">
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
                        <div className="pl-2">
                          <h2 className="text-lg font-semi">
                            Estado Compuesto:
                          </h2>
                          <div className="w-full">
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
                    </div>

                    <br />
                    {/* Aceptacion */}
                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semi">Aceptación:</h2>
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
                      <h2 className="text-lg text-left font-semi">
                        Observaciones:
                      </h2>
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
          <table className="w-full text-lg text-left text-gray-500 ">
            <thead className="text-base text-gray-700 uppercase bg-gray-50 ">
              <tr>
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
                <tr key={item._id} className="bg-white border-b">
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
