/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function EDDCLheadersItem({ EDDCLheader, maestroprods }) {
  return (
    <Link href={`/formularios/eddcl/${EDDCLheader._id}`}>
      <div className="rounded-lg border border-black py-2">
        <div className="flex object-cover justify-center pt-2 px-auto">
          {EDDCLheader._id}
        </div>
        <div className="flex flex-col items-center justify-center p-5">
          <p className="mb-2">{EDDCLheader.datenow}</p>
          <p className="mb-2">{EDDCLheader.tapadora}</p>
          <p className="mb-2">{EDDCLheader.tipolata}</p>
          <p className="mb-2">{EDDCLheader.producto}</p>
        </div>
      </div>
    </Link>
  );
}
