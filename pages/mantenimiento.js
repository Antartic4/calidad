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

      <div className="container">
        <div className="box">
          <div className="animation">
            <div className="one spin-one"></div>
            <div className="two spin-two"></div>
            <div className="three spin-one"></div>
          </div>
          <h1>En Mantenimiento...</h1>
          <p>Trabajo en progreso.</p>
        </div>
      </div>
    </Layout>
  );
}
