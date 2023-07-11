import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';

export default function ScreenMantenimiento() {
  return (
    <Layout>
      <Link
        href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700"
        rel="stylesheet"
      />
      <div className="flex justify-center">
        <div className="container">
          <div className="box">
            <div className="animation">
              <div className="one spin-one"></div>
              <div className="pl-64 two spin-two"></div>
              <div className="three spin-one"></div>
            </div>
            <p className="text-2xl text-center">En Mantenimiento</p>
            <p className="pt-2 text-xl text-center">Trabajo en progreso.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
