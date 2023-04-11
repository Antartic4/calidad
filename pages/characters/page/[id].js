import React from 'react';
import db from '../../../utils/connectMongo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CharacterScreen({ char }) {
  const router = useRouter();
  const { info, results } = char;
  console.log('info', info);
  console.log('results', results);
  console.log(router.query);

  return (
    <div className="px-28 text-center pt-10">
      <h2 className="font-bold text-2xl">Page: {router.query.id}</h2>
      <div className="flex justify-evenly py-5">
        {router.query.id === '1' ? (
          <button className="bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded cursor-not-allowed">
            Previous
          </button>
        ) : (
          <button className="bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
            <a href={`/characters/page/${parseInt(router.query.id) - 1}`}>
              Previous
            </a>
          </button>
        )}
        {router.query.id === '42' ? (
          <button className="bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded cursor-not-allowed">
            Next
          </button>
        ) : (
          <button className="bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded">
            <a href={`/characters/page/${parseInt(router.query.id) + 1}`}>
              Next
            </a>
          </button>
        )}
      </div>
      <ul>
        {results.map((element) => (
          <li key={element.id}>
            <div className="border py-5">
              <div className="flex pl-5 items-center">
                <Link href={`/character/${element.id}`}>
                  <Image
                    src={element.image}
                    width={100}
                    height={100}
                    className=""
                    alt="imagen"
                  ></Image>
                </Link>
                <div className="flex px-2">
                  <h2 className="pl-5 text-2xl font-bold">{element.id}</h2>
                  <div>
                    <h2 className="pl-5 font-bold text-xl">{element.name}</h2>
                    {element.status === 'Alive' ? (
                      <h2 className="text-green-700">ALIVE!</h2>
                    ) : (
                      <h2 className="text-red-600">DEAD!</h2>
                    )}
                  </div>
                  <div className="px-5">
                    <h2 className="font-bold">Species: </h2>
                    {element.species}
                  </div>
                  <div className="px-5">
                    <h2 className="font-bold">Type: </h2>
                    {element.type === '' ? (
                      <h2>Unspecified</h2>
                    ) : (
                      <h2>{element.type}</h2>
                    )}
                  </div>
                  <div className="px-5">
                    <h2 className="font-bold">Episodes: </h2>
                    <select>
                      {element.episode.map((el) => (
                        <option key={element.episode.id}>{el}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  await db.connect();
  let page = '';
  if (id === '1') {
    page = 'https://rickandmortyapi.com/api/character';
  } else {
    page = `https://rickandmortyapi.com/api/character?page=${id}`;
  }
  const res = await fetch(page);
  const jsonData = await res.json();
  return {
    props: {
      char: jsonData,
    },
  };
}
