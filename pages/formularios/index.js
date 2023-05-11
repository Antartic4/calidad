import React from 'react';
import logofamosa from '../../src/logofamosaii.png';
import Image from 'next/image';
import Form1 from '../../src/components/Form1';
import Sidebar from '../../src/components/Sidebar';

export default function Form1Screen() {
  return (
    <div>
      <header className="bg-gray-400 p-5">
        <div className="flex items-center">
          <Image
            src={logofamosa}
            width={300}
            height={100}
            alt="logofamosa"
          ></Image>
        </div>
      </header>

      <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <main className="bg-gray-700 md:w-2/3 lg:w-3/4 px-5 py-40 flex justify-center">
          {/*  <Form1></Form1> */}
          <span className="text-2xl text-white font-bold pl-1">
            La Famosa Indicadores TEST
          </span>
        </main>
        <aside className="bg-green-800 md:w-1/3 lg:w-1/4 px-5 py-40">
          <Sidebar />
        </aside>
      </div>

      <footer className="bg-slate-800 mt-auto p-5 overflow-y-auto overflow-x-hidden">
        <h1 className="text-2xl md:text-4xl text-white">Footer</h1>
      </footer>
    </div>
  );
}
