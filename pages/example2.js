import axios from 'axios';
import React from 'react';
import db from '../utils/connectMongo';
import Link from 'next/link';

export default function Index({ mainmenu }) {
  const mainmenuobj = JSON.parse(JSON.stringify(mainmenu));
  console.log(mainmenuobj);
  const fmm = [];

  //   mainmenuobj.forEach((element) =>
  //     fmm.push({
  //       value: element,
  //       label: 'okok',
  //     })
  //   );

  //console.log(fmm);
  return (
    <div>
      <br />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 py-3 px-10">
        <div className="rounded-lg border border-black py-2">
          <div className="flex object-cover justify-center pt-2 px-auto">
            <div>
              <Link href="/characters/page/1">List of Characters</Link>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-black py-2">
          <div className="flex object-cover justify-center pt-2 px-auto">
            <div>
              <Link href={mainmenuobj.locations}>Characters</Link>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-black py-2">
          <div className="flex object-cover justify-center pt-2 px-auto">
            <div>
              <Link href={mainmenuobj.episodes}>Characters</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const res = await fetch('https://rickandmortyapi.com/api');
  const jsonData = await res.json();
  return {
    props: {
      mainmenu: jsonData,
    },
  };
}
