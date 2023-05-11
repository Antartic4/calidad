import axios from 'axios';
import React from 'react';
import db from '../utils/connectMongo';
import Link from 'next/link';

export default function Index({ mainmenu }) {
  const mainmenuobj = JSON.parse(JSON.stringify(mainmenu));
  //console.log(mainmenuobj);
  let fm = [];

  let arreglos = mainmenuobj.pairs.forEach((element) => {
    fm.push({
      Chain_ID: element.chainId,
      Dex_ID: element.dexId,
      BASE_SYM: element.baseToken.symbol,
      QUOTE_SYM: element.quoteToken.symbol,
      PRICE_NATIVE: element.priceNative,
    });
  });

  let fm2 = [];
  const lo_list = fm.filter((item) =>
    item.chainId === 'polygon' ? fm2.push(item.Chain_ID) : 'nothing'
  );

  console.log(fm);

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
            {/* <div>
              <Link href={mainmenuobj.locations}>Characters</Link>
            </div> */}
          </div>
        </div>
        <div className="rounded-lg border border-black py-2">
          <div className="flex object-cover justify-center pt-2 px-auto">
            {/* <div>
              <Link href={mainmenuobj.episodes}>Characters</Link>
            </div> */}
          </div>
        </div>
      </div>

      <div className="text-center">Cuenta</div>
    </div>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const res = await fetch(
    'https://api.dexscreener.com/latest/dex/search?q=USDT'
    // {
    //   headers: {
    //     'X-CMC_PRO_API_KEY': 'd7e64658-2429-41ad-8e07-bbf7fa0b6ec4',
    //   },
    // }
  );
  const jsonData = await res.json();
  return {
    props: {
      mainmenu: jsonData,
    },
  };
}
