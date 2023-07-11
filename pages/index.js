import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../src/components/Sidebar';
import logofamosa from '../src/logofamosaii.png';
import Layout from '../src/components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div>
            <h2 className="text-3xl font-bold underline">Formularios</h2>
            <div className="grid grid-cols-1 gap-8 pt-5">
              <div className="px-12 py-8 text-black transition-colors duration-300 transform bg-gray-400 border cursor-pointer rounded-xl hover:text-white hover:border-transparent group hover:bg-gray-500 ">
                <Link href="/formularios/eddcl3">
                  <div className="flex justify-center">
                    <Image
                      className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                      src="https://i.ibb.co/9GdTS3m/eddcl.png"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <br />
                  <div className="">
                    <h1 className="text-2xl text-gray-700 capitalize font-semi md:text-2xl group-hover:text-white">
                      Examen
                    </h1>
                    <p className="mt-2 text-lg text-gray-800 capitalize group-hover:text-gray-300">
                      Destructivo Doble Cierre Latas
                    </p>
                  </div>
                </Link>
              </div>
                <Link href="/formularios/evcl">
                  <div className="flex justify-center">
                    <Image
                      className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                      src="https://i.ibb.co/gRvS3np/evcl.png"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <br />
                  <div>
                    <h1 className="text-2xl text-gray-700 capitalize font-semi md:text-2xl group-hover:text-white">
                      Examen
                    </h1>
                    <p className="mt-2 text-lg text-gray-800 capitalize group-hover:text-gray-300">
                      Visual Cierre Latas
                    </p>
                  </div>
                </Link>
              </div>

                <Link href="/mantenimiento">
                  <div className="flex justify-center">
                    <Image
                      className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                      src="https://i.ibb.co/bzfb6yc/mantenimiento.png"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <br />
                  <div>
                    <h1 className="text-2xl text-gray-700 capitalize font-semi md:text-2xl group-hover:text-white">
                      Entrada
                    </h1>
                    <p className="mt-2 text-lg text-gray-800 capitalize group-hover:text-gray-300">
                      Recepcion de Latas
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h2 className="text-3xl font-bold underline">Dashboard:</h2>
          <div className="grid grid-cols-1 gap-8 mt-8">
              <Link href="/formularios/dashboard/eddcl">
                <div className="flex justify-center">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="https://i.ibb.co/SQ9R7CM/eddcldb.png"
                    alt=""
                    width="100"
                    height="100"
                  />
                </div>
                <br />
                <div className="mt-4 sm:mx-4 sm:mt-0">
                  <h1 className="text-2xl text-gray-700 capitalize font-semi md:text-2xl group-hover:text-white">
                    Dashboard
                  </h1>
                  <p className="mt-2 text-lg text-gray-800 capitalize group-hover:text-gray-300">
                    Destructivo Doble Cierre Latas
                  </p>
                </div>
              </Link>
            </div>

              <Link href="/formularios/dashboard/evcl">
                <div className="flex justify-center">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src="https://i.ibb.co/vY6KNSv/ecvldb.png"
                    alt=""
                    width="100"
                    height="100"
                  />
                </div>
                <br />
                <div className="mt-4 sm:mx-4 sm:mt-0">
                  <h1 className="text-2xl text-gray-700 capitalize font-semi md:text-2xl group-hover:text-white">
                    Dashboard
                  </h1>
                  <p className="mt-2 text-lg text-gray-800 capitalize group-hover:text-gray-300">
                    Visual Cierre Latas
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
