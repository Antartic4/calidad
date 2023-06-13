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
        <div className="bg-white my-5 w-full flex">
          <main className="bg-gray-500 flex w-full px-5 rounded-lg p-5 justify-center">
            <Sidebar />
          </main>
        </div>
      </div>
    </Layout>
  );
}
