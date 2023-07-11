/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../../../src/components/Layout';
import EDDCLheader from '../../../models/EDDCLheader';
import db from '../../../utils/connectMongo';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';
import EDDCLdetail from '../../../models/EDDCLdetail';
import Link from 'next/link';

export default function klk(props) {
  const router = useRouter();
  const { eddclheader, eddcldetail } = props;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    formState,
  } = useForm();

  const { isSubmitting } = formState;

  const [eDDCLHInfo, setEDDCLHInfo] = useState({
    headid: router.query.id,
    codigo: '',
    anchomin: '',
    anchomax: '',
    espesormin: '',
    espesormax: '',
    profundmin: '',
    profundmax: '',
    ganchocuerpomin: '',
    ganchocuerpomax: '',
    ganchotapamin: '',
    ganchotapamax: '',
    traslapemin: '',
    traslapemax: '',
    arrugas: '',
    bandaimp: '',
    fabricalatas: '',
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
      value: 0,
      label: 0,
    },
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
    {
      value: 6,
      label: 6,
    },
    {
      value: 7,
      label: 7,
    },
    {
      value: 8,
      label: 8,
    },
    {
      value: 9,
      label: 9,
    },
    {
      value: 10,
      label: 10,
    },
  ];

  const opciones2 = [
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

  const onSubmit = async (formData, eddclheader, e) => {
    try {
      await axios.post('/../api/eddclinsertdet', {
        headid: router.query.id,
        codigo: formData.codigo,
        cabeza: formData.cabeza,
        anchomin: formData.anchomin,
        anchomax: formData.anchomax,
        espesormin: formData.espesormin,
        espesormax: formData.espesormax,
        profundmin: formData.profundmin,
        profundmax: formData.profundmax,
        ganchocuerpomin: formData.ganchocuerpomin,
        ganchocuerpomax: formData.ganchocuerpomax,
        ganchotapamin: formData.ganchotapamin,
        ganchotapamax: formData.ganchotapamax,
        traslapemin: formData.traslapemin,
        traslapemax: formData.traslapemax,
        arrugas: formData.arrugas,
        bandaimp: formData.bandaimp,
        fabricalatas: formData.fabricalatas,
        observaciones: formData.observaciones,
      });
    } catch (err) {
      alert(err);
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 10000);
      router.reload();
    });
  };

  const handleChange = (event) => {
    setEDDCLHInfo({ ...eDDCLHInfo, [event.target.name]: event.target.value });
  };

  return (
    <Layout>
      <div className="flex items-center justify-center mt-10">
        <Link href="https://i.ibb.co/9GdTS3m/eddcl.png">
          <div className="button-borders">
            <button className="primary-button">Ver Version Fisica</button>
          </div>
        </Link>
        <br />
      </div>
      <br />
      <div className="flex justify-center">
        <div className="block w-full p-6 bg-gray-300 border border-black rounded-lg shadow-lg">
          <h1 className="py-2 text-3xl text-center font-semi">
            Examen Destructivo Doble Cierre Latas para :
          </h1>
          <br />
          <div className="grid grid-cols-1 gap-4">
            {/* Fecha */}
            <div className="flex items-center justify-between">
              <h4 className="text-2xl text-left font-semi ">Fecha :</h4>
              <h4 className="text-xl text-right">{eddclheader.datenow}</h4>
            </div>

            {/* Tapadora Text-Input */}
            <div className="flex items-center justify-between">
              <h4 className="text-2xl text-left font-semi ">Tapadora N° :</h4>
              <h4 className="text-xl text-right">{eddclheader.tapadora}</h4>
            </div>

            {/* Tipo de Lata Text-Input */}
            <div className="flex items-center justify-between">
              <h4 className="text-2xl text-left font-semi ">Tipo de Lata :</h4>
              <h4 className="text-xl text-right">{eddclheader.tipolata}</h4>
            </div>

            {/* Producto Text-Input */}
            <div className="flex items-center justify-between">
              <h4 className="text-2xl text-left font-semi ">Producto :</h4>
              <h4 className="text-xl text-right">{eddclheader.producto}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pt-5">
        <div className="block w-full p-6 bg-gray-300 border border-black rounded-lg shadow-lg">
          <h1 className="py-2 text-2xl text-center font-semi">
            Entrada Detalle para:
          </h1>
          <h2 className="text-xl">
            {eddclheader.producto} ({eddclheader.tipolata})
          </h2>

          <br />
          {/* donde van los campos a entrar */}
          <div>
            <div className="">
              <div className="">
                <div className="">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    onChange={handleChange}
                  >
                    {/* hora */}
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl text-left font-semi">Hora :</h4>
                      <h4 className="text-xl text-right">{tiempoahora}</h4>
                    </div>
                    <br />
                    {/* codigo */}
                    <div className="grid justify-center grid-cols-1">
                      <div>
                        <h2 className="text-xl text-left font-semi">Codigo:</h2>
                        <div className="flex justify-center">
                          <input
                            type="number"
                            className=" form-control block py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Codigo"
                            name="codigo"
                            ref={register}
                          />
                        </div>
                      </div>
                      <br />
                      {/* cabeza no. */}
                      <div className="">
                        <h2 className="text-xl text-left font-semi">
                          Cabeza No:
                        </h2>
                        <div className="flex items-center justify-center">
                          <Controller
                            name="cabeza"
                            control={control}
                            render={({ onChange, value, ref }) => (
                              <div style={{ width: '300px' }}>
                                <Select
                                  options={opciones}
                                  placeholder="Cabeza No"
                                  // value={selectedOptions}
                                  onChange={(val) => onChange(val.value)}
                                  isSearchable={true}
                                />
                              </div>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    {/* ancho (min max) + espesor (min max) */}
                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="">
                        <h2 className="text-xl text-left font-semi">Ancho:</h2>
                        <div className="flex justify-center item-centerd">
                          <input
                            type="decimal"
                            className=" form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="anchomin"
                            placeholder="Min"
                            name="anchomin"
                            ref={register}
                          />
                          <input
                            type="decimal"
                            className="ml-3 form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="anchomax"
                            placeholder="Max"
                            name="anchomax"
                            ref={register}
                          />
                        </div>
                      </div>
                      <br />
                      {/* espesor (min max) */}
                      <div className="">
                        <h2 className="text-xl text-left font-semi">
                          Espesor:
                        </h2>
                        <div className="flex justify-center">
                          <input
                            type="decimal"
                            className=" form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="espesormin"
                            placeholder="Min"
                            name="espesormin"
                            ref={register}
                          />
                          <input
                            type="decimal"
                            className="ml-3 form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="espesormax"
                            placeholder="Max"
                            name="espesormax"
                            ref={register}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    {/* profund (min max) */}
                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="">
                        <h2 className="text-xl text-left font-semi">
                          Profundidad:
                        </h2>
                        <div className="flex justify-center">
                          <input
                            type="decimal"
                            className=" form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="profundmin"
                            placeholder="Min"
                            name="profundmin"
                            ref={register}
                          />
                          <input
                            type="decimal"
                            className="ml-3 form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="profundmax"
                            placeholder="Max"
                            name="profundmax"
                            ref={register}
                          />
                        </div>
                      </div>
                      <br />
                      {/* ganchocuerpo (min max) */}
                      <div className="">
                        <h2 className="text-xl text-left font-semi">
                          Gancho Cuerpo:
                        </h2>
                        <div className="flex justify-center">
                          <input
                            type="decimal"
                            className=" form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="ganchocuerpomin"
                            placeholder="Min"
                            name="ganchocuerpomin"
                            ref={register}
                          />
                          <input
                            type="decimal"
                            className="ml-3 form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="ganchocuerpomax"
                            placeholder="Max"
                            name="ganchocuerpomax"
                            ref={register}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    {/* ganchotapa (min max) + traslape (min max) */}
                    <div className="grid justify-center grid-cols-1 text-center">
                      <div className="">
                        <h2 className="text-xl text-left font-semi">
                          Gancho Tapa:
                        </h2>
                        <div className="flex justify-center">
                          <input
                            type="decimal"
                            className=" form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="ganchotapamin"
                            placeholder="Min"
                            name="ganchotapamin"
                            ref={register}
                          />
                          <input
                            type="decimal"
                            className="ml-3 form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="ganchotapamax"
                            placeholder="Max"
                            name="ganchotapamax"
                            ref={register}
                          />
                        </div>
                      </div>
                      <br />
                      {/* traslape (min max) */}
                      <div className="">
                        <h2 className="text-xl text-left font-semi">
                          Traslape:
                        </h2>
                        <div className="flex justify-center">
                          <input
                            type="decimal"
                            className="form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="traslapemin"
                            placeholder="Min"
                            name="traslapemin"
                            ref={register}
                          />
                          <input
                            type="decimal"
                            className="ml-3 form-control block w-1/2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="traslapemax"
                            placeholder="Max"
                            name="traslapemax"
                            ref={register}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    {/* arrugas + Banda de Impresion */}
                    <div className="grid justify-center grid-cols-1 text-center">
                      <div>
                        <h2 className="text-xl text-left font-semi">
                          Arrugas:
                        </h2>
                        <div className="flex justify-center">
                          <input
                            type="number"
                            className=" form-control blockpy-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="arrugas"
                            placeholder="Arrugas"
                            name="arrugas"
                            style={{ width: '300px', alignContent: 'center' }}
                            ref={register}
                          />
                        </div>
                      </div>
                      <br />
                      {/* Banda de Impresion */}
                      <div className="">
                        <h2 className="text-xl text-left font-semi">
                          Banda de Impresion:
                        </h2>
                        <div className="flex justify-center">
                          <input
                            type="char"
                            className=" form-control block py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="bandaimp"
                            style={{ width: '300px', alignContent: 'center' }}
                            placeholder="Banda de Impresion"
                            name="bandaimp"
                            ref={register}
                          />
                        </div>
                      </div>
                    </div>
                    <br />

                    {/* Fabrica Latas 2. */}
                    <div className="text-center">
                      <h2 className="text-xl text-left font-semi">
                        Fabrica Latas:
                      </h2>
                      <div className="flex items-center justify-center">
                        <Controller
                          name="fabricalatas"
                          control={control}
                          render={({ onChange, value, ref }) => (
                            <div style={{ width: '300px' }}>
                              <Select
                                options={opciones2}
                                placeholder="Fabrica Latas"
                                // value={selectedOptions}
                                onChange={(val) => onChange(val.value)}
                                isSearchable={true}
                              />
                            </div>
                          )}
                        />
                      </div>
                    </div>
                    <br />
                    {/* Observaciones */}
                    <div>
                      <h2 className="text-xl text-left font-semi">
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
                    <div className="relative z-0 flex justify-center pt-5 text-center">
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
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                {/* <th scope="col" className="px-6 py-3">
                  Head-ID
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Hora
                </th>
                <th scope="col" className="px-6 py-3">
                  Codigo
                </th>
                <th scope="col" className="px-6 py-3">
                  Cabeza
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Ancho
                  <div className="flex justify-evenly">
                    <div>Min</div>
                    <div>Max</div>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Espesor
                  <div className="flex justify-evenly">
                    <div>Min</div>
                    <div>Max</div>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Profundidad
                  <div className="flex justify-evenly">
                    <div>Min</div>
                    <div>Max</div>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Gancho Cuerpo
                  <div className="flex justify-evenly">
                    <div>Min</div>
                    <div>Max</div>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Gancho Tapa
                  <div className="flex justify-evenly">
                    <div>Min</div>
                    <div>Max</div>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Traslape
                  <div className="flex justify-evenly">
                    <div>Min</div>
                    <div>Max</div>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Arrugas
                </th>
                <th scope="col" className="px-6 py-3">
                  Banda Impresion
                </th>
                <th scope="col" className="px-6 py-3">
                  Fabrica Lata
                </th>
              </tr>
            </thead>
            <tbody>
              {eddcldetail.map((item) => (
                <tr key={item.headid} className="bg-white border-b">
                  {/* <td className="">{item._id}</td> */}
                  <td className="text-center">{item.horanow}</td>
                  <td className="text-center">{item.codigo}</td>
                  <td className="text-center">{item.cabeza}</td>
                  <td className="">
                    <div className="flex justify-evenly">
                      <div>{item.anchomin}</div>
                      <div>{item.anchomax}</div>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex justify-evenly">
                      <div>{item.espesormin}</div>
                      <div>{item.espesormax}</div>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex justify-evenly">
                      <div>{item.profundmin}</div>
                      <div>{item.profundmax}</div>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex justify-evenly">
                      <div>{item.ganchocuerpomin}</div>
                      <div>{item.ganchocuerpomax}</div>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex justify-evenly">
                      <div>{item.ganchotapamin}</div>
                      <div>{item.ganchotapamax}</div>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex justify-evenly">
                      <div>{item.traslapemin}</div>
                      <div>{item.traslapemax}</div>
                    </div>
                  </td>
                  <td className="text-center">{item.arrugas}</td>
                  <td className="text-center">{item.bandaimp}</td>
                  <td className="text-center">{item.fabricalatas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
  const eddclheader = await EDDCLheader.findOne({ _id: idd }).lean();
  const eddcldetail = await EDDCLdetail.find({ headid: idd }).lean();
  await db.disconnect();
  return {
    props: {
      eddclheader: eddclheader ? db.convertDocToObj(eddclheader) : null,
      eddcldetail: eddcldetail.map(db.convertDocToObj),
    },
  };
}
