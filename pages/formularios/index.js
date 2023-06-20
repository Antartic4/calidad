import React from 'react';
import logofamosa from '../../src/logofamosaii.png';
import Image from 'next/image';
import Sidebar from '../../src/components/Sidebar';
import Layout from '../../src/components/Layout';

export default function Form1Screen() {
  return (
    <Layout>
      <div>
        <div className="bg-white my-5 w-full flex">
          <main className="bg-gray-500 flex w-full px-5 rounded-lg p-5 justify-center">
            <Sidebar />
          </main>
        </div>
      </div>
    </Layout>
  );
}
