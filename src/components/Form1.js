import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function UserForm() {
  const [contactInfo, setContactInfo] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const { handleSubmit, register } = useForm();

  const submitHandler = async ({ first, last, email, phone }) => {
    try {
      await axios.post('/../api/userinsert', {
        first,
        last,
        email,
        phone,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form onSubmit={handleSubmit(submitHandler)} onChange={handleChange}>
          <h1 className="text-2xl text-center py-2 font-bold">
            Formulario Entrada Usuario
          </h1>
          <div className="form-group mb-6 ">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="first"
              placeholder="Nombre"
              name="first"
              {...register('first')}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="last"
              placeholder="Apellido"
              name="last"
              {...register('last')}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              placeholder="Email address"
              name="email"
              {...register('email')}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="phone"
              placeholder="Telefono"
              name="phone"
              {...register('phone')}
            />
          </div>

          <button
            type="submit"
            className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
