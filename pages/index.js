import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../src/components/Sidebar';
import logofamosa from '../src/logofamosaii.png';
import Layout from '../src/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="w-full py-10 my-5 bg-gray-300 border-stone-900 rounded-xl">
          <h1 className="text-2xl font-bold">Menu de Inicio</h1>
          <br />
          <br />
          <br />
          <div>
            <div className="grid grid-cols-2 divide-x">
              <div className="text-center">
                <h1 className="text-xl font-bold">Formularios</h1>
                <br />
                <br />
                <ul className="text-center">
                  <li className="text-blue-600 hover:text-blue-800">
                    <Link href="/formularios/eddcl2">
                      Examen Destructivo Doble Cierre Latas
                    </Link>
                  </li>
                  <br />
                  <li className="text-blue-600 hover:text-blue-800">
                    <Link href="/formularios/evcl">
                      Examen Visual Cierre Latas
                    </Link>
                  </li>
                  <br />
                  <li className="text-blue-600 hover:text-blue-800">
                    <Link href="/mantenimiento">Recepcion de Latas</Link>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold">Dashboard</h1>
                <br />
                <br />
                <ul className="text-center">
                  <li className="text-blue-600 hover:text-blue-800">
                    <Link href="/formularios/dashboard">Dashboard</Link>
                  </li>
                  <br />
                  <li className="text-blue-600 hover:text-blue-800">
                    <Link href="/formularios/dashboard/eddcl">
                      Destructivo Doble Cierre
                    </Link>
                  </li>
                  <br />
                  <li className="text-blue-600 hover:text-blue-800">
                    <Link href="/formularios/dashboard/evcl/">
                      Visual Cierre Latas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
