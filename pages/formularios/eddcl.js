import React, { useState, Fragment } from 'react';
import Layout from '../../src/components/Layout';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import db from '../../utils/connectMongo';
import EDDCLheader from '../../models/EDDCLheader';
import EDDCLheadersItem from '../../src/components/EDDCLheadersItem';
import { useRouter } from 'next/router';
import Maestroprods from '../../models/Maestroprods';
import reactSelect from 'react-select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ExamenDDCL({ EDDCLheaders, maestroprods }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [listOpen, setListOpen] = useState(false);

  const maestroprodsobj = JSON.parse(maestroprods);

  // console.log(maestroprodsobj);

  const [selectedProducto, setSelectedProducto] = useState(null);

  const optionstipolata = [];
  const optionsdescripcion = [];
  const optionsdescripcion2 = [];

  maestroprodsobj.forEach((element) =>
    optionsdescripcion.push({
      value: element.material,
      label: element.descripcion,
    })
  );

  const [selectedCBValue, setSelectedCBValue] = useState(
    optionsdescripcion[0].value
  );
  const [query, setQuery] = useState('');

  function getCurrentDate(separator = '-') {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
  }

  const datenow = getCurrentDate().toString();

  const [eDDCLHInfo, setEDDCLHInfo] = useState({
    tapadora: '',
    tipolata: '',
    producto: '',
  });

  const handleChange = (event) => {
    try {
      console.log(event);
      setEDDCLHInfo({ ...eDDCLHInfo, [event.target.name]: event.target.value });
      console.log('por aqui');
    } catch (err) {
      console.log(event);
      //console.log(err);
      //setEDDCLHInfo({ ...eDDCLHInfo, producto: klk.toString() });
      //setEDDCLHInfo({ ...eDDCLHInfo, [event.target.name]: event.target.value });
      console.log('por alla');
      // register('producto');
    }

    console.log(eDDCLHInfo);
  };

  const handleChange2 = (event) => {
    const target = event.target;
    console.log(target);
  };

  //const { handleSubmit, control, register } = useForm();

  // let valueproducto = { value }.value;

  // console.log('valueproducto', valueproducto);

  const submitHandler = async (formData) => {
    // console.log(datenow, tapadora, tipolata, producto);
    // console.log(data);
    console.log(formData);
    // try {
    //   await axios.post('/../api/eddclinsert', {
    //     datenow,
    //     tapadora,
    //     tipolata,
    //     producto,
    //   });
    // } catch (err) {
    //   alert(err);
    // }
  };

  return (
    <Layout>
      <div className="justify-center flex">
        <div className="block p-6 rounded-lg shadow-lg bg-gray-300 border border-black max-w-lg">
          <h1 className="text-2xl text-center py-2 font-bold">
            Examen Destructivo Doble Cierre Latas
          </h1>
          <br />

          <form onSubmit={handleSubmit(submitHandler)} onChange={handleChange}>
            {/* Fecha */}
            <div className="flex">
              Fecha : <div className="pl-5">{datenow}</div>
            </div>
            {/* Tapadora Text-Input */}
            <div className="flex items-center py-2">
              <div>Tapadora N° :</div>
              <div className="pl-3">
                <input
                  type="number"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="tapadora"
                  placeholder="Tapadora"
                  name="tapadora"
                  {...register('tapadora')}
                />
              </div>
            </div>

            {/* Tipo de Lata Text-Input */}
            <div className="flex items-center py-2">
              <div>Tipo de Lata :</div>
              <div className="pl-3">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="tipolata"
                  placeholder="Tipo de Lata"
                  name="tipolata"
                  {...register('tipolata')}
                />
              </div>
            </div>

            {/* Producto Text-Input */}
            <div className="flex items-center py-2 pb-5">
              <div>Producto:</div>

              <div className="w-full pl-10 ">
                <Controller
                  control={control}
                  name="producto"
                  defaultValue={[optionsdescripcion[0]]}
                  render={({ ref, onChange, ...field }) => (
                    <Autocomplete
                      options={optionsdescripcion}
                      getOptionLabel={(optionsdescripcion) =>
                        optionsdescripcion.label
                      }
                      onChange={(_, data) => onChange(data.value)}
                      defaultValue={optionsdescripcion[0]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          {...field}
                          fullWidth
                          inputRef={ref}
                          variant="filled"
                          label="No tamo en nadie"
                        />
                      )}
                    />
                  )}
                />
              </div>
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 py-3">
        {EDDCLheaders.map((EDDCLheader) => (
          <EDDCLheadersItem
            EDDCLheader={EDDCLheader}
            key={EDDCLheader._id}
          ></EDDCLheadersItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const EDDCLheaders = await EDDCLheader.find().lean();
  const maestroprods = await Maestroprods.find().lean();
  return {
    props: {
      EDDCLheaders: EDDCLheaders.map(db.convertDocToObj),
      maestroprods: JSON.stringify(maestroprods),
    },
  };
}
