import React from 'react';
import db from '../../utils/connectMongo';
import Image from 'next/image';

export default function CharacterScreen({ char }) {
  console.log(char);
  return (
    <div className="flex justify-center py-10">
      <div className="flex flex-col w-auto drop-shadow-2xl">
        <Image
          src="https://raw.githubusercontent.com/ironcladmerc/profile-card-component/main/public/bg-pattern-card.svg"
          className="rounded-t-2xl"
          width={500}
          height={500}
          alt=""
        />
        <div className="flex flex-col bg-white items-center rounded-b-2xl">
          <Image
            src={char.image}
            width={400}
            height={400}
            className="-mt-12 mb-2 w-2/3 rounded-full border-4 border-white"
            alt=""
          />
          <div className="flex-wrap text-center py-5 flex-row space-x-3 p-2">
            <h2 className="font-kumbh font-bold tracking-tight pb-5">
              {char.name}
            </h2>
            <div className="flex justify-center">
              <p className="font-bold pr-5">ID:</p>
              <p className="font-kumbh font-bold text-gray-500">{char.id}</p>
            </div>
          </div>
          <p className="font-kumbh text-md text-blue-500 mb-2">
            {char.origin.name === 'unknown'
              ? 'Undisclosed Origin'.toUpperCase()
              : char.origin.name}
          </p>
          <hr className="border-1 border-gray my-2 w-full" />
          <div className="flex flex-row space-x-10 p-2 mb-2">
            <div className="flex flex-col items-center">
              {char.status === 'Alive' ? (
                <p className="font-kumbh text-green-600 font-bold">
                  {char.status.toUpperCase()}
                </p>
              ) : (
                <p className="font-kumbh text-red-600 font-bold">
                  {char.status.toUpperCase()}
                </p>
              )}

              <p className="font-kumbh text-xxs tracking-widest text-gray-500">
                Status
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-kumbh font-bold">
                {char.species === '' ? 'Undefined' : char.species.toUpperCase()}
              </p>
              <p className="font-kumbh text-xxs tracking-widest text-gray-500">
                Species
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-kumbh font-bold">
                {char.gender.toUpperCase()}
              </p>
              <p className="font-kumbh text-xxs tracking-widest text-gray-500">
                Gender
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  await db.connect();
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const jsonData = await res.json();
  return {
    props: {
      char: jsonData,
    },
  };
}
