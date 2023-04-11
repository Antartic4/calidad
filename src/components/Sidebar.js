import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function UserForm() {
  return (
    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
      <li className="text-2xl font-bold text-white ">Formularios</li>
      <li className="nav-item p-2">
        <Link href="/formularios">
          <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Entrada Usuarios
          </button>
        </Link>
      </li>
      <li className="nav-item p-2">
        <Link href="/formularios/eddcl2">
          <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Examen Destructivo Doble Cierre Latas
          </button>
        </Link>
      </li>
      <li className="nav-item p-2">
        <Link href="/formularios/evcl">
          <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Examen Visual Cierre Latas
          </button>
        </Link>
      </li>
    </ul>
  );
}
