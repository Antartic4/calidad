import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Maestroprods from '../../../../models/Maestroprods';
import db from '../../../../utils/connectMongo';
import Layout from '../../../../src/components/Layout';
import EVCLheader from '../../../../models/EVCLheader';
import EVCLdetail from '../../../../models/EVCLdetail';
import Link from 'next/link';

export default function ScreenEachDash({
  EVCLheaders,
  EVCLdetails,
  MaestroProd,
}) {
  const { query } = useRouter();
  const productId = query.id;

  console.log('EVCLheaders', EVCLheaders);
  // init + cargar base de cabecera2
  let cabecera2 = [];

  cabecera2.push({
    id: EVCLheaders._id,
    datenow: EVCLheaders.datenow,
    tipolata: EVCLheaders.tipolata,
    producto: EVCLheaders.producto,
    productoname: '',
    createdAt: EVCLheaders.createdAt,
    cosas: [],
  });

  // init + cargar base de detalles
  let detalles = [];

  EVCLdetails.forEach((element) => {
    detalles.push({
      idpropio: element._id,
      id: element.headid,
      horanow: element.horanow,
      codigo: element.codigo,
      fabricalatas: element.fabricalatas,
      cabeza1: element.cabeza1,
      cabeza2: element.cabeza2,
      cabeza3: element.cabeza3,
      cabeza4: element.cabeza4,
      cabeza5: element.cabeza5,
      cabeza6: element.cabeza6,
      danos: element.danos,
      estado: element.estado,
      aceptacion: element.aceptacion,
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

  const comentarios = [];

  for (let i = 0; i < detalles.length; i++) {
    if (detalles[i].observaciones.length > 1) {
      comentarios.push(detalles[i].observaciones);
    }
  }

  const textorojo = (
    <>
      <h1 className="text-red-600">hola, soy el texto rojo.</h1>
    </>
  );
  // meter todos los cabeceras en sus arreglos
  const cabe1 = [];
  for (let i = 0; i < detalles.length; i++) {
    cabe1.push(detalles[i].cabeza1);
  }
  const hasNo1 = cabe1.includes('No');
  const cabe2 = [];
  for (let i = 0; i < detalles.length; i++) {
    cabe2.push(detalles[i].cabeza2);
  }
  const hasNo2 = cabe2.includes('No');
  const cabe3 = [];
  for (let i = 0; i < detalles.length; i++) {
    cabe3.push(detalles[i].cabeza3);
  }
  const hasNo3 = cabe3.includes('No');
  const cabe4 = [];
  for (let i = 0; i < detalles.length; i++) {
    cabe4.push(detalles[i].cabeza4);
  }
  const hasNo4 = cabe4.includes('No');
  const cabe5 = [];
  for (let i = 0; i < detalles.length; i++) {
    cabe5.push(detalles[i].cabeza5);
  }
  const hasNo5 = cabe5.includes('No');
  const cabe6 = [];
  for (let i = 0; i < detalles.length; i++) {
    cabe6.push(detalles[i].cabeza6);
  }
  const hasNo6 = cabe6.includes('No');
  const dano = [];
  for (let i = 0; i < detalles.length; i++) {
    dano.push(detalles[i].danos);
  }
  const hasDano = dano.includes('Si');
  const estado = [];
  for (let i = 0; i < detalles.length; i++) {
    estado.push(detalles[i].estado);
  }
  const acepta = [];
  for (let i = 0; i < detalles.length; i++) {
    acepta.push(detalles[i].aceptacion);
  }
  const observ = [];
  for (let i = 0; i < detalles.length; i++) {
    observ.push(detalles[i].observaciones);
  }

  const observacioness = observ.filter((word) => word.length > 2);

  observacioness.reverse();
  console.log('observaciones', observacioness);

  const hasAcepta = acepta.includes('No');

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
      <div className="text-lg">
        <h2 className="text-2xl font-bold">Dashboard EVCL</h2>
        <br />
        <div className="flex items-center justify-center">
          <h4 className="w-1/2 font-bold">Dia:</h4>
          <h4 className="w-1/2 pl-8">{cabecera2[0].datenow}</h4>
        </div>
        <br />
        <div className="flex items-center justify-center">
          <h4 className="w-1/2 font-bold">Producto:</h4>
          <h4 className="w-1/2 pl-8">{cabecera2[0].producto}</h4>
        </div>
        <br />
        <div className="flex items-center">
          <h4 className="w-1/2 font-bold">Nombre:</h4>
          <h4 className="w-1/2 pl-8">{cabecera2[0].productoname}</h4>
        </div>
        <br />
        <div className="flex items-center">
          <h4 className="w-1/2 font-bold">Tipo lata:</h4>
          <h4 className="w-1/2 pl-8">{cabecera2[0].tipolata}</h4>
        </div>
        <br />
        <div className="flex items-center justify-center">
          <h4 className="font-bold">Registros:</h4>
          <h4 className="pl-4">{cabecera2[0].cosas.length}</h4>
        </div>
        <br />
      </div>
      <br />

      <div className="grid grid-cols-2 gap-5">
        {/* Cabeza 1 */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Cabeza 1:
          <div className="flex items-center justify-center">
            {
              <div>
                {hasNo1 ? (
                  <span style={{ color: 'red', fontSize: '24px' }}>❌</span> // X mark
                ) : (
                  <span style={{ color: 'green', fontSize: '24px' }}>✅</span> // check mark
                )}
              </div>
            }
          </div>
          {/* <h1 className="text-xs">{`Ancho Min Promedio: ${anchoMin}`}</h1> */}
        </div>
        {/* ancho maximo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Cabeza 2:
          <div className="flex items-center justify-center">
            {
              <div>
                {hasNo2 ? (
                  <span style={{ color: 'red', fontSize: '24px' }}>❌</span> // X mark
                ) : (
                  <span style={{ color: 'green', fontSize: '24px' }}>✅</span> // check mark
                )}
              </div>
            }
          </div>
          {/* <h1 className="text-xs">{`Ancho Max Promedio: ${anchoMax}`}</h1> */}
        </div>
        {/* espesor minimo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Cabeza 3:
          <div className="flex items-center justify-center">
            {
              <div>
                {hasNo3 ? (
                  <span style={{ color: 'red', fontSize: '24px' }}>❌</span> // X mark
                ) : (
                  <span style={{ color: 'green', fontSize: '24px' }}>✅</span> // check mark
                )}
              </div>
            }
          </div>
          {/* <h1 className="text-xs">{`Ancho Max Promedio: ${espesorMin.toFixed(
            3
          )}`}</h1> */}
        </div>
        {/* espesor maximo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Cabeza 4:
          <div className="flex items-center justify-center">
            {
              <div>
                {hasNo4 ? (
                  <span style={{ color: 'red', fontSize: '24px' }}>❌</span> // X mark
                ) : (
                  <span style={{ color: 'green', fontSize: '24px' }}>✅</span> // check mark
                )}
              </div>
            }
          </div>
          {/* <h1 className="text-xs">{`Ancho Max Promedio: ${espesorMax.toFixed(
            3
          )}`}</h1> */}
        </div>

        {/* profund minimo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Cabeza 5:
          <div className="flex items-center justify-center">
            {
              <div>
                {hasNo5 ? (
                  <span style={{ color: 'red', fontSize: '24px' }}>❌</span> // X mark
                ) : (
                  <span style={{ color: 'green', fontSize: '24px' }}>✅</span> // check mark
                )}
              </div>
            }
          </div>
          {/* <h1 className="text-xs">{`Ancho Max Promedio: ${profundMin.toFixed(
            3
          )}`}</h1> */}
        </div>
        {/* profund maximo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Cabeza 6:
          <div className="flex items-center justify-center">
            {
              <div>
                {hasNo6 ? (
                  <span style={{ color: 'red', fontSize: '24px' }}>❌</span> // X mark
                ) : (
                  <span style={{ color: 'green', fontSize: '24px' }}>✅</span> // check mark
                )}
              </div>
            }
          </div>
          {/* <h1 className="text-xs">{`Ancho Max Promedio: ${profundMax.toFixed(
            3
          )}`}</h1> */}
        </div>

        {/* gancho cuerpo minimo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Daños:
          <div className="flex items-center justify-center">
            {
              <div>
                {hasDano ? (
                  <span style={{ color: 'red', fontSize: '24px' }}>
                    ❌ Se presentan daños, consultar.
                  </span> // X mark
                ) : (
                  <span style={{ color: 'green', fontSize: '24px' }}>
                    ✅
                    <br />
                    No se presentan daños.
                  </span> // check mark
                )}
              </div>
            }
          </div>
          {/* <h1 className="text-xs">{`Gancho Cuerpo Promedio: ${ganchocuerpoMin.toFixed(
            3
          )}`}</h1> */}
        </div>
        {/* gancho cuerpo maximo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Estado:
          <div className="text-lg ">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <h2 className="font-bold">A: </h2>
                <h2 className="pl-4">
                  {estado.filter((x) => x === 'A').length}
                </h2>
              </div>
              <div className="flex items-center justify-center pl-4">
                <h2 className="font-bold">B: </h2>
                <h2 className="pl-4">
                  {estado.filter((x) => x === 'B').length}
                </h2>
              </div>
              <div className="flex items-center justify-center pl-4">
                <h2 className="font-bold">C: </h2>
                <h2 className="pl-4">
                  {estado.filter((x) => x === 'C').length}
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <h2 className="font-bold">D: </h2>
                <h2 className="pl-4">
                  {estado.filter((x) => x === 'D').length}
                </h2>
              </div>
              <div className="flex items-center justify-center pl-4">
                <h2 className="font-bold">E: </h2>
                <h2 className="pl-4">
                  {estado.filter((x) => x === 'E').length}
                </h2>
              </div>
              <div className="flex items-center justify-center pl-4">
                <h2 className="font-bold">F: </h2>
                <h2 className="pl-4">
                  {estado.filter((x) => x === 'F').length}
                </h2>
              </div>
            </div>
          </div>
          {/* <h1 className="text-xs">{`Gancho Cuerpo Promedio: ${ganchocuerpoMax.toFixed(
            3
          )}`}</h1> */}
        </div>

        {/* gancho tapa minimo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Aceptacion:
          <div className="flex items-center justify-center">
            {
              <div>
                {hasAcepta ? (
                  <span style={{ color: 'red', fontSize: '24px' }}>❌</span> // X mark
                ) : (
                  <span style={{ color: 'green', fontSize: '24px' }}>✅</span> // check mark
                )}
              </div>
            }
          </div>
          {/* <h1 className="text-xs">{`Gancho Tapa Promedio: ${ganchotapaMin.toFixed(
            3
          )}`}</h1> */}
        </div>
        {/* gancho tapa maximo */}
        <div className="px-5 py-10 text-2xl text-black bg-gray-400 rounded ">
          Observaciones:
          {observacioness.length === 0 ? (
            <h2 className="text-sm text-red-600"> No hay Observaciones.</h2>
          ) : (
            <div>
              <ul className="text-sm text-left text-red-600">
                {observacioness.map((item) => (
                  <li key={item} className="text-red-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              {detalles.map((item) => (
                <tr
                  key={item.headid}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
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
            • - {item}
          </h1>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  await db.connect();

  const { params } = context;
  const { slug } = params;

  const headid = params.id.toString();

  console.log(headid);

  const EVCLheaders = await EVCLheader.findOne({ _id: headid }).lean();
  const EVCLdetails = await EVCLdetail.find({ headid }).lean();
  const MaestroProd = await Maestroprods.find().lean();
  return {
    props: {
      EVCLheaders: JSON.parse(JSON.stringify(EVCLheaders)),
      EVCLdetails: JSON.parse(JSON.stringify(EVCLdetails)),
      MaestroProd: JSON.parse(JSON.stringify(MaestroProd)),
    },
  };
}
