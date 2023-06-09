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
        <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <main className="bg-gray-500 md:w-2/3 lg:w-full px-5 py-40 flex justify-center">
            <Sidebar />
          </main>
        </div>
      </div>
    </Layout>
  );
}
