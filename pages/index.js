import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../src/components/Sidebar';
import logofamosa from '../src/logofamosaii.png';
import Layout from '../src/components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Home
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Directorio de Links Internos
          </p>
          <br />
          <h2 className="font-bold">Formularios:</h2>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <Link href="/formularios/eddcl2">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="https://i.ibb.co/9GdTS3m/eddcl.png"
                    alt=""
                    width="100"
                    height="100"
                  />
                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      Examen
                    </h1>
                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      Destructivo Doble Cierre Latas
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <Link href="/formularios/evcl">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="https://i.ibb.co/gRvS3np/evcl.png"
                    alt=""
                    width="100"
                    height="100"
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      Examen
                    </h1>
                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      Visual Cierre Latas
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <Link href="/mantenimiento">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="https://i.ibb.co/bzfb6yc/mantenimiento.png"
                    alt=""
                    width="100"
                    height="100"
                  />
                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      Entrada
                    </h1>
                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      Recepcion de Latas
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <h2 className="font-bold">Dashboard:</h2>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <Link href="/formularios/dashboard/eddcl">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="https://i.ibb.co/SQ9R7CM/eddcldb.png"
                    alt=""
                    width="100"
                    height="100"
                  />
                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      Dashboard
                    </h1>
                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      Destructivo Doble Cierre Latas
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <Link href="/formularios/dashboard/evcl">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="https://i.ibb.co/vY6KNSv/ecvldb.png"
                    alt=""
                    width="100"
                    height="100"
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      Dashboard
                    </h1>
                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      Visual Cierre Latas
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
