/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import logofamosa from '../../src/famosatransp.png';
import Image from 'next/image';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import axios from 'axios';
import { useRouter } from 'next/router';

export default function Layout({ title, children }) {
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };

  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const [categories, setCategories] = useState([]);

  const [query, setQuery] = useState('');

  let nav_home = router.locale === 'en' ? 'Home' : 'Inicio';

  let nav_shop = router.locale === 'en' ? 'Shop' : 'Tienda';

  let nav_cart = router.locale === 'en' ? 'Cart' : 'Carrito';

  let nav_aboutus = router.locale === 'en' ? 'About Us' : 'Sobre Nosotros';

  let nav_search =
    router.locale === 'en' ? 'Search Products' : 'Buscar Productos';

  let nav_profile = router.locale === 'en' ? 'Profile' : 'Perfil';

  let nav_historyorders =
    router.locale === 'en' ? 'Order History' : 'Historial Ordenes';

  let nav_adminportal =
    router.locale === 'en' ? 'Admin Portal' : 'Portal de Admin';

  let nav_logout = router.locale === 'en' ? 'Logout' : 'Cerrar Session';

  let nav_login = router.locale === 'en' ? 'Login' : 'Iniciar sesión';

  let nav_myprofile = router.locale === 'en' ? 'My Profile' : 'Mi Perfil';

  return (
    <>
      <Head>
        <title>{title ? title : 'LF - Calidad'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex flex-col justify-between min-h-screen">
        <header className="z-10">
          <div className="pt-28">
            <nav className="fixed top-0 left-0 w-full bg-white shadow">
              <div className="container flex items-center justify-between m-auto text-gray-700">
                {/* SideBar Button + Menu */}
                <div className="block px-4 py-3 mx-2 xl:hidden focus:outline-none">
                  <Box display="flex" alignItems="center">
                    <IconButton
                      edge="start"
                      aria-label="open drawer"
                      onClick={sidebarOpenHandler}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Box>
                  <Drawer
                    anchor="left"
                    open={sidebarVisible}
                    onClose={sidebarCloseHandler}
                  >
                    <List>
                      <ListItem>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          className="flex"
                        >
                          <Typography className="py-2 text-center">
                            <h1 className="font-bold">Navegador</h1>
                          </Typography>
                          <IconButton
                            aria-label="close"
                            onClick={sidebarCloseHandler}
                          >
                            <CancelIcon />
                          </IconButton>
                        </Box>
                      </ListItem>
                      <Divider light />
                      <Box>
                        <div className="px-3 text-center py-3 font-bold hover:bg-gray-200">
                          <Link href="/formularios">{nav_home}</Link>
                        </div>
                        <div className="px-3 py-3 text-center font-bold hover:bg-gray-200">
                          <Link href="/aboutus">
                            {router.locale === 'en'
                              ? 'About Us'
                              : 'Sobre Nosotros'}
                          </Link>
                        </div>
                        <Divider light />
                        <div className="px-3 py-3 text-center font-bold disabled hover:bg-gray-200">
                          Profile(En Construccion)
                        </div>
                        <Divider light />
                      </Box>
                    </List>
                  </Drawer>
                </div>
                <div className="flex items-center">
                  <button onClick={sidebarOpenHandler} className="mr-5">
                    <a className="px-4">
                      <Link legacyBehavior href="/">
                        <Image
                          src={logofamosa}
                          className="flex shrink-0"
                          alt="improved-l-1"
                          border="0"
                          width={100}
                          height={75}
                        />
                      </Link>
                    </a>
                  </button>
                  <div className="">
                    <Link href="/">
                      <buttton className="font-bold shrink">
                        {router.locale === 'en' ? (
                          <div className="md:flex text-2xl">
                            <h4 className="text-left shrink">La Famosa v.01</h4>
                          </div>
                        ) : (
                          <div className="md:flex text-xl">
                            <h4 className="text-left shrink">La Famosa</h4>
                            <h4 className="text-left shrink md:pl-5">v.01</h4>
                          </div>
                        )}
                      </buttton>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <ul className="items-center hidden pr-10 text-base font-semibold cursor-pointer xl:flex">
                    <li className="px-3 py-3 hover:bg-gray-200">{nav_home}</li>
                    <li className="px-3 py-3 hover:bg-gray-200">Formularios</li>
                    <li className="px-3 py-3 text-center items-center hover:bg-gray-200">
                      <Link legacyBehavior href="/aboutus">
                        <div>Sobre Nosotros</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <main className="container px-4 m-auto mt-4">{children}</main>
        <footer className="text-center pt-3 items-center justify-center h-20 shadow-inner">
          <p>Copyright © 2022 Peravia Industrial S.A.</p>
        </footer>
      </div>
    </>
  );
}
