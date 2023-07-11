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

  return (
    <>
      <Head>
        <title>{title ? title : 'LF - Calidad'}</title>
        <meta name="description" content="Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"></link>
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="">
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
                          <div className="px-3 py-3 font-bold text-center hover:bg-gray-200">
                            <Link href="/">{'Home'}</Link>
                          </div>
                          <div className="px-3 py-3 font-bold text-center hover:bg-gray-200">
                            <Link href="/aboutus">
                              {router.locale === 'en'
                                ? 'About Us'
                                : 'Sobre Nosotros'}
                            </Link>
                          </div>
                          <Divider light />
                          <div className="px-3 py-3 font-bold text-center disabled hover:bg-gray-200">
                            Profile(En Construccion)
                          </div>
                          <Divider light />
                        </Box>
                      </List>
                    </Drawer>
                  </div>
                  <div className="flex items-center justify-center">
                    <div>
                      <a className="">
                        <Link legacyBehavior href="/">
                          <Image
                            src={logofamosa}
                            className="flex shrink-0"
                            alt="improved-l-1"
                            border="0"
                            width={100}
                            height={100}
                          />
                        </Link>
                      </a>
                    </div>
                    <div className="">
                      <Link href="/">
                        <div className="text-2xl">
                          <h4 className="pl-2 text-center">Calidad</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ul className="items-center hidden pr-10 text-base font-semibold cursor-pointer xl:flex">
                      <li className="px-3 py-3 hover:bg-gray-200">Home</li>
                      <li className="px-3 py-3 hover:bg-gray-200">
                        <Link legacyBehavior href="/">
                          <div>Formularios</div>
                        </Link>
                      </li>
                      <li className="items-center px-3 py-3 text-center hover:bg-gray-200">
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
          <footer className="items-center justify-center h-20 pt-5 text-center bg-white shadow-inner">
            <p className="text-lg ">Copyright © 2023 Peravia Industrial S.A.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
