import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';

export default function App() {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();
  const onSubmit = (data) => console.log(data);

  const defaultValues = {
    tapadora: 0,
    tipolata: '',
    ReactSelect: { id: 1, name: 'Uno' },
  };

  const { handleSubmit, register, reset, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);

  const methods = useForm();

  const options = [
    {
      id: 1,
      name: 'Uno',
    },
    {
      id: 2,
      name: 'Dos',
    },
    {
      id: 3,
      name: 'Tres',
    },
    {
      id: 4,
      name: 'Cuatro',
    },
    {
      id: 5,
      name: 'Cinco',
    },
    {
      id: 6,
      name: 'Seis',
    },
    {
      id: 7,
      name: 'Siete',
    },
    {
      id: 8,
      name: 'Ocho',
    },
    {
      id: 9,
      name: 'Nueve',
    },
    {
      id: 10,
      name: 'Diez',
    },
  ];

  return (
    <>
      <Controller
        as={ReactSelect}
        options={options}
        name="ReactSelect"
        isClearable
        control={methods.control}
      />
    </>
  );
}
