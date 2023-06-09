import React from 'react';
import Layout from '../../src/components/Layout';
import Link from 'next/link';

export default function dashboard() {
  return (
    <Layout>
      <div className="text-center text-2xl font-bold pb-5">
        Tiles para los Formularios (Resultados)
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Link href="/formularios/dashboard/eddcl">
          <div className="rounded px-5 py-16 text-2xl bg-blue-400 text-gray-800 hover:bg-blue-500 hover:text-black">
            <div className="flex justify-between items-center text-center font-bold">
              Destructivo Doble Cierre
            </div>
          </div>
        </Link>
        <Link href="/formularios/dashboard/evcl">
          <div className="rounded px-5 py-16 text-2xl bg-blue-400 text-gray-800 hover:bg-blue-500 hover:text-black">
            <div className="flex justify-between items-center text-center font-bold">
              Visual Cierre Latas
            </div>
          </div>
        </Link>
        <div className="rounded px-5 py-16 text-2xl bg-blue-400 text-gray-800 hover:bg-blue-500 hover:text-black">
          <Link href="/formularios/dashboard/...">
            <div className="flex justify-between items-center text-center font-bold">
              ...
            </div>
          </Link>
        </div>
        <div className="rounded px-5 py-16 text-2xl bg-blue-400 text-gray-800 hover:bg-blue-500 hover:text-black">
          <Link href="/formularios/dashboard/...">
            <div className="flex justify-between items-center text-center font-bold">
              ...
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
