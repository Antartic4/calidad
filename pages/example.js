import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ExampleScreen() {
  return (
    <html lang="en-US">
      <Head>
        <meta charset="utf-8" />
        <title>Motionblinds</title>
        <link rel="canonical" href="https://motionblinds.com/" />
        <link
          rel="preload"
          href="https://motionblinds.com/resources/motionblinds/dist/css/app.css"
          as="style"
        />
        <link
          rel="preload"
          href="https://motionblinds.com/resources/motionblinds/dist/js/app.js"
          as="script"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://motionblinds.com/"
        />
        <link
          rel="alternate"
          hreflang="nl-nl"
          href="https://motionblinds.com/nl/"
        />
        <link
          rel="alternate"
          hreflang="es-es"
          href="https://motionblinds.com/es/"
        />
        <link
          rel="alternate"
          hreflang="de-de"
          href="https://motionblinds.com/de/"
        />
        <link
          rel="alternate"
          hreflang="fr-fr"
          href="https://motionblinds.com/fr/"
        />
        <link
          rel="alternate"
          hreflang="pl-pl"
          href="https://motionblinds.com/pl/"
        />
        <link
          rel="stylesheet"
          href="https://motionblinds.com/resources/motionblinds/dist/css/app.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="description"
          content="In a few simple steps, window coverings powered by MotionBlinds can be easily installed, connected to your smart home and operated."
        />
        <meta name="author" content="MotionBlinds" />
        <meta property="og:datePublished" content="2021-06-14T11:12:25+02:00" />
        <meta property="og:dateModified" content="2022-08-25T04:34:37+02:00" />
        <meta property="og:publisher" content="MotionBlinds" />
        <meta property="og:site_name" content="MotionBlinds" />
        <meta property="og:title" content="Motionblinds" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="In a few simple steps, window coverings powered by MotionBlinds can be easily installed, connected to your smart home and operated."
        />
        <meta property="og:url" content="https://motionblinds.com/" />
        <meta name="twitter:title" content="Motionblinds" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="In a few simple steps, window coverings powered by MotionBlinds can be easily installed, connected to your smart home and operated."
        />
        <meta name="application-name" content="Motionblinds" />

        <link
          className="favicon"
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/resources/motionblinds/dist/images/favicon/apple-touch-icon-57x57.png"
        />
        <link
          className="favicon"
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/resources/motionblinds/dist/images/favicon/apple-touch-icon-114x114.png"
        />
        <link
          className="favicon"
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/resources/motionblinds/dist/images/favicon/apple-touch-icon-72x72.png"
        />
        <link
          className="favicon"
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/resources/motionblinds/dist/images/favicon/apple-touch-icon-144x144.png"
        />
        <link
          className="favicon"
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/resources/motionblinds/dist/images/favicon/apple-touch-icon-60x60.png"
        />
        <link
          className="favicon"
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/resources/motionblinds/dist/images/favicon/apple-touch-icon-120x120.png"
        />
        <link
          className="favicon"
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/resources/motionblinds/dist/images/favicon/apple-touch-icon-76x76.png"
        />
        <link
          className="favicon"
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/resources/motionblinds/dist/images/favicon/apple-touch-icon-152x152.png"
        />
        <link
          className="favicon"
          rel="icon"
          type="image/png"
          href="/resources/motionblinds/dist/images/favicon/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          className="favicon"
          rel="icon"
          type="image/png"
          href="/resources/motionblinds/dist/images/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          className="favicon"
          rel="icon"
          type="image/png"
          href="/resources/motionblinds/dist/images/favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          className="favicon"
          rel="icon"
          type="image/png"
          href="/resources/motionblinds/dist/images/favicon/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          className="favicon"
          rel="icon"
          type="image/png"
          href="/resources/motionblinds/dist/images/favicon/favicon-128.png"
          sizes="128x128"
        />
      </Head>
      <body className="HomePage">
        <header className="siteheader">
          <aside className="bg-grey h-8 overflow-hidden lg:overflow-visible">
            <div className="container h-full">
              <div className="col-span-10 col-start-2 lg:col-span-8">
                <div className="swiper-container usp-slider lg:hidden">
                  <div className="swiper-wrapper ">
                    <div className="swiper-slide">
                      <span className="text-darkgrey text-sm flex items-center h-8  justify-center font-medium">
                        <i className="icon-check w-4 h-4 leading-4 mr-2"></i>
                        Cable-free installation
                      </span>
                    </div>

                    <div className="swiper-slide">
                      <span className="text-darkgrey text-sm flex items-center h-8  justify-center font-medium">
                        <i className="icon-check w-4 h-4 leading-4 mr-2"></i>
                        Rechargeable with USB-C
                      </span>
                    </div>

                    <div className="swiper-slide">
                      <span className="text-darkgrey text-sm flex items-center h-8  justify-center font-medium">
                        <i className="icon-check w-4 h-4 leading-4 mr-2"></i>
                        Smart in a minute
                      </span>
                    </div>

                    <div className="swiper-slide">
                      <span className="text-darkgrey text-sm flex items-center h-8  justify-center font-medium">
                        <i className="icon-check w-4 h-4 leading-4 mr-2"></i>
                        Control from anywhere
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="hidden lg:flex justify-between">
                  <span className="text-darkgrey text-sm flex items-center h-8   font-medium">
                    <i className="icon-check w-4 h-4 leading-4 mr-2"></i>
                    Cable-free installation
                  </span>

                  <span className="text-darkgrey text-sm flex items-center h-8   font-medium">
                    <i className="icon-check w-4 h-4 leading-4 mr-2"></i>
                    Rechargeable with USB-C
                  </span>

                  <span className="text-darkgrey text-sm flex items-center h-8   font-medium">
                    <i className="icon-check w-4 h-4 leading-4 mr-2"></i>
                    Smart in a minute
                  </span>

                  <span className="text-darkgrey text-sm flex items-center h-8   font-medium">
                    <i className="icon-check w-4 h-4 leading-4 mr-2"></i>
                    Control from anywhere
                  </span>
                </ul>
              </div>

              <div className="col-span-3 lg:col-span-4 hidden lg:flex justify-end items-center h-full">
                <a
                  className="text-darkgrey text-sm font-medium"
                  href="/become-a-dealer/"
                >
                  Become a dealer
                </a>

                <div className="flex items-center ml-16">
                  <div className="bg-transparent focus:outline-none text-sm appearance-none text-darkgrey relative">
                    <nav
                      role="navigation"
                      className="locale-nav"
                      aria-label="Languages"
                    >
                      <button
                        aria-label="openContentNav"
                        className="footer-nav__btn uppercase flex font-medium"
                      >
                        en{' '}
                        <i className="icon-caret-down inline-block lg:mt-0.5 w-6 h-4 text-xl pseudo-inset-0 text-darkgrey"></i>
                      </button>

                      <ul className="absolute bg-white top-8 shadow p-4 z-10 right-0 invisible opacity-0 transition-opacity">
                        <li className="link uppercase font-medium">
                          <a href="/nl/" rel="alternate" hreflang="nl-nl">
                            Nederlands
                          </a>
                        </li>

                        <li className="link uppercase font-medium">
                          <a href="/es/" rel="alternate" hreflang="es-es">
                            Español
                          </a>
                        </li>

                        <li className="link uppercase font-medium">
                          <a href="/de/" rel="alternate" hreflang="de-de">
                            Deutsch
                          </a>
                        </li>

                        <li className="link uppercase font-medium">
                          <a href="/fr/" rel="alternate" hreflang="fr-fr">
                            Français
                          </a>
                        </li>

                        <li className="link uppercase font-medium">
                          <a href="/pl/" rel="alternate" hreflang="pl-pl">
                            Polski
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="container h-16 lg:h-22">
            <div className="col-span-3 lg:col-span-4 flex items-center">
              <button
                aria-label="openMenu"
                type="button"
                className="open-navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="col-span-6 lg:col-span-4 justify-center flex items-center">
              <Link legacyBehavior href="/">
                <a className="h-4 lg:h-6 inline-block">
                  <svg
                    className="h-full"
                    viewBox="0 0 565 60"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        d="M229,0 C245.544512,0 259,13.4581695 259,30 C259,46.5445121 245.544512,60 229,60 C212.458169,60 199,46.5445121 199,30 C199,13.4581695 212.458169,0 229,0 Z M93.9986593,0 C110.543911,0 124,13.4581695 124,30 C124,46.5445121 110.543911,60 93.9986593,60 C77.4560896,60 64,46.5445121 64,30 C64,13.4581695 77.4560896,0 93.9986593,0 Z M280.221189,1 L306.861969,48.6978115 L306.867337,1 L314,1 L314,59 L304.472782,59 L278.127295,11.9166008 L278.127295,59 L271,59 L271,1 L280.221189,1 Z M167,1 L167,8.13008737 L150.102505,8.13008737 L150.102505,59 L142.900205,59 L142.900205,8.13008737 L126,8.13008737 L126,1 L167,1 Z M41.2720331,1 L51,1.00269454 L51,59 L43.830894,59 L43.8362639,11.9937282 L28.6200379,41.2618352 L22.5222701,41.2429733 L7.13420026,11.8724739 L7.13420026,59 L0,59 L0,1.00269454 L9.92129092,1.00269454 L25.5590712,31.7608827 L41.2720331,1 Z M186,1 L186,59 L179,59 L179,1 L186,1 Z M229,7.02002146 C216.330175,7.02002146 206.022703,17.3301752 206.022703,30.0000001 C206.022703,42.6698249 216.330175,52.9772972 229,52.9772972 C241.669825,52.9772972 251.979979,42.6698249 251.979979,30.0000001 C251.979979,17.3301752 241.669825,7.02002146 229,7.02002146 Z M93.9986593,7.02002146 C81.3282683,7.02002146 71.0203354,17.3301752 71.0203354,30.0000001 C71.0203354,42.6698249 81.3282683,52.9772972 93.9986593,52.9772972 C106.66905,52.9772972 116.979665,42.6698249 116.979665,30.0000001 C116.979665,17.3301752 106.66905,7.02002146 93.9986593,7.02002146 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M418,1.01694915 L418,60 L414,60 L414,1.01694915 L418,1.01694915 Z M379.758573,1.01694915 L379.758573,56.1936696 L404,56.1936696 L404,60 L376,60 L376,1.01694915 L379.758573,1.01694915 Z M472,1.01694915 L472,60 L465.470464,60 L433.752856,4.54086102 L433.755568,60 L430,60 L430,1.02242958 L436.220415,1.02242958 L468.236296,57.0186498 L468.244432,1.01694915 L472,1.01694915 Z M547.238,0 C556.999535,0 563.85746,5.93994837 564.043833,14.4884742 L564.043833,14.4884742 L559.984178,14.4884742 C559.808613,7.9643132 554.846812,3.77428558 547.238,3.77428558 C539.861474,3.77428558 535.094152,7.92355418 535.094152,14.344459 C535.094152,18.2518907 537.319803,21.4093564 541.536117,23.4690458 L541.536117,23.4690458 L543.502469,24.4282414 C547.316329,26.2841356 551.254438,28.202527 555.827286,30.6073094 C561.828984,33.7729269 565,38.7183551 565,44.908292 C565,53.5111633 557.326361,60 547.151566,60 C537.184751,60 530.186373,53.9595125 530,45.2642542 L530,45.2642542 L534.056955,45.2642542 C534.240625,51.837326 539.421207,56.2284315 547.065132,56.2284315 C555.365412,56.2284315 560.940345,51.6117928 560.940345,44.7425389 C560.940345,39.9329741 558.798424,36.6369275 553.993285,34.047371 C550.762849,32.3001674 547.767401,30.7975182 544.871893,29.346497 C542.940656,28.3818667 540.947292,27.381912 538.902607,26.3194601 C533.975922,23.7842489 531.037197,19.2138037 531.037197,14.0971876 C531.037197,10.1326933 532.638911,6.54589918 535.553326,3.99166704 C538.48665,1.41841402 542.638137,0 547.238,0 Z M349.511567,1.01694915 C362.964395,1.01694915 364.009194,12.2030118 364.009194,15.6366563 L364.009194,15.6366563 L364.009194,16.6396202 C364.009194,18.7606424 363.498942,25.9348492 356.943962,29.2150347 L356.943962,29.2150347 L356.223131,29.5794997 L356.976359,29.8754562 C363.9579,32.6103144 365,39.2337129 365,42.938651 L365,42.938651 L365,45.0322698 C365,46.5668594 364.576141,60 349.921927,60 L349.921927,60 L328,60 L328,1.01694915 Z M505.924627,1.01694915 C520.57884,1.01694915 521,14.45283 521,15.9846793 L521,15.9846793 L521,44.7828991 C521,46.3394114 520.586941,60 506.253996,60 L506.253996,60 L484,60 L484,1.01694915 Z M505.924627,4.82053932 L487.830939,4.82053932 L487.830939,56.19641 L506.089311,56.19641 C507.652462,56.19641 510.641082,55.930597 513.114045,54.1384155 C515.805692,52.1900346 517.171763,49.0139821 517.171763,44.6979486 L517.171763,44.6979486 L517.171763,16.2367905 C517.171763,5.93311685 509.304706,4.82053932 505.924627,4.82053932 L505.924627,4.82053932 Z M350.170305,31.4401897 L331.830939,31.4401897 L331.830939,56.1114591 L349.759942,56.1114591 C351.714559,56.1114591 354.546589,55.7716572 356.938564,54.1466364 C359.746298,52.2393606 361.169064,49.0879711 361.169064,44.7828989 L361.169064,44.7828989 L361.169064,43.0236016 C361.169064,38.6609822 359.894784,35.471228 357.378621,33.5447697 C355.556295,32.1471969 353.131924,31.4401897 350.170305,31.4401897 L350.170305,31.4401897 Z M349.346883,4.80409728 L331.830939,4.80409728 L331.830939,27.6365996 L349.840936,27.6365996 C352.840353,27.6365996 355.016346,27.033725 356.687487,25.7402852 C359.00387,23.950844 360.178258,20.8295982 360.178258,16.4724596 L360.178258,16.4724596 L360.178258,15.7188664 C360.178258,8.47889152 356.533602,4.80409728 349.346883,4.80409728 L349.346883,4.80409728 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="col-span-3 lg:col-span-4 flex items-center justify-end relative search-form-wrap">
              <a
                href="/stores/"
                className="text-btn text-btn--black icon-location mr-8 hidden xl:inline-block"
              >
                Find your store
              </a>
              <a
                href="/stores/"
                className="icon-location w-6 h-6 text-2xl pseudo-inset-0 inline-block xl:hidden mr-4"
              ></a>

              <button className="text-btn text-btn--black h-6 icon-search open-search">
                <span className="hidden lg:inline-block">Search</span>
              </button>

              <div
                id="searchForm"
                className="search-form absolute  lg:w-80 py-2 right-0 top-0 lg:top-4 transition-opacity duration-200 invisible opacity-0"
              >
                <button className="w-6 h-6 text-xl lg:hidden absolute left-0 top-5 transform rotate-180  bottom-0 close-search">
                  <i className="icon-chevron-right pseudo-inset-0 "></i>
                </button>
                <form
                  action="https://motionblinds.com/search-site/"
                  method="GET"
                >
                  <div className="flex justify-between border border-grey rounded-full py-2 px-6 search-form__input">
                    <label for="search" className="sr-only">
                      Search
                    </label>
                    <input
                      id="search"
                      className="text-lg text-darkgrey placeholder-darkgrey bg-transparent"
                      type="text"
                      placeholder="Search"
                      name="Search"
                    />
                    <button
                      className="w-6 h-6 text-xl"
                      type="submit"
                      aria-label="search"
                    >
                      <i className="icon-search w-6 h-6 inline-block pseudo-inset-0 "></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        <nav className="navigation fixed inset-0 bg-white flex flex-col transition-all transform -translate-y-full duration-400 invisible opacity-0 z-20 pt-8">
          <div className="container h-16 lg:h-22">
            <div className="col-span-3 lg:col-span-4 flex items-center">
              <button
                aria-label="closeMenu"
                className="navigation__close icon-close w-6 h-6 text-2xl pseudo-inset-0"
              ></button>
            </div>
            <div className="col-span-6 lg:col-span-4 justify-center flex items-center">
              <Link legacyBehavior href="/">
                <a className="h-4 lg:h-6 inline-block">
                  {/* <svg
                    className="h-full"
                    viewBox="0 0 565 60"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M229,0 C245.544512,0 259,13.4581695 259,30 C259,46.5445121 245.544512,60 229,60 C212.458169,60 199,46.5445121 199,30 C199,13.4581695 212.458169,0 229,0 Z M93.9986593,0 C110.543911,0 124,13.4581695 124,30 C124,46.5445121 110.543911,60 93.9986593,60 C77.4560896,60 64,46.5445121 64,30 C64,13.4581695 77.4560896,0 93.9986593,0 Z M280.221189,1 L306.861969,48.6978115 L306.867337,1 L314,1 L314,59 L304.472782,59 L278.127295,11.9166008 L278.127295,59 L271,59 L271,1 L280.221189,1 Z M167,1 L167,8.13008737 L150.102505,8.13008737 L150.102505,59 L142.900205,59 L142.900205,8.13008737 L126,8.13008737 L126,1 L167,1 Z M41.2720331,1 L51,1.00269454 L51,59 L43.830894,59 L43.8362639,11.9937282 L28.6200379,41.2618352 L22.5222701,41.2429733 L7.13420026,11.8724739 L7.13420026,59 L0,59 L0,1.00269454 L9.92129092,1.00269454 L25.5590712,31.7608827 L41.2720331,1 Z M186,1 L186,59 L179,59 L179,1 L186,1 Z M229,7.02002146 C216.330175,7.02002146 206.022703,17.3301752 206.022703,30.0000001 C206.022703,42.6698249 216.330175,52.9772972 229,52.9772972 C241.669825,52.9772972 251.979979,42.6698249 251.979979,30.0000001 C251.979979,17.3301752 241.669825,7.02002146 229,7.02002146 Z M93.9986593,7.02002146 C81.3282683,7.02002146 71.0203354,17.3301752 71.0203354,30.0000001 C71.0203354,42.6698249 81.3282683,52.9772972 93.9986593,52.9772972 C106.66905,52.9772972 116.979665,42.6698249 116.979665,30.0000001 C116.979665,17.3301752 106.66905,7.02002146 93.9986593,7.02002146 Z"
                        fill="#000000"
                        fill-rule="nonzero"
                      ></path>
                      <path
                        d="M418,1.01694915 L418,60 L414,60 L414,1.01694915 L418,1.01694915 Z M379.758573,1.01694915 L379.758573,56.1936696 L404,56.1936696 L404,60 L376,60 L376,1.01694915 L379.758573,1.01694915 Z M472,1.01694915 L472,60 L465.470464,60 L433.752856,4.54086102 L433.755568,60 L430,60 L430,1.02242958 L436.220415,1.02242958 L468.236296,57.0186498 L468.244432,1.01694915 L472,1.01694915 Z M547.238,0 C556.999535,0 563.85746,5.93994837 564.043833,14.4884742 L564.043833,14.4884742 L559.984178,14.4884742 C559.808613,7.9643132 554.846812,3.77428558 547.238,3.77428558 C539.861474,3.77428558 535.094152,7.92355418 535.094152,14.344459 C535.094152,18.2518907 537.319803,21.4093564 541.536117,23.4690458 L541.536117,23.4690458 L543.502469,24.4282414 C547.316329,26.2841356 551.254438,28.202527 555.827286,30.6073094 C561.828984,33.7729269 565,38.7183551 565,44.908292 C565,53.5111633 557.326361,60 547.151566,60 C537.184751,60 530.186373,53.9595125 530,45.2642542 L530,45.2642542 L534.056955,45.2642542 C534.240625,51.837326 539.421207,56.2284315 547.065132,56.2284315 C555.365412,56.2284315 560.940345,51.6117928 560.940345,44.7425389 C560.940345,39.9329741 558.798424,36.6369275 553.993285,34.047371 C550.762849,32.3001674 547.767401,30.7975182 544.871893,29.346497 C542.940656,28.3818667 540.947292,27.381912 538.902607,26.3194601 C533.975922,23.7842489 531.037197,19.2138037 531.037197,14.0971876 C531.037197,10.1326933 532.638911,6.54589918 535.553326,3.99166704 C538.48665,1.41841402 542.638137,0 547.238,0 Z M349.511567,1.01694915 C362.964395,1.01694915 364.009194,12.2030118 364.009194,15.6366563 L364.009194,15.6366563 L364.009194,16.6396202 C364.009194,18.7606424 363.498942,25.9348492 356.943962,29.2150347 L356.943962,29.2150347 L356.223131,29.5794997 L356.976359,29.8754562 C363.9579,32.6103144 365,39.2337129 365,42.938651 L365,42.938651 L365,45.0322698 C365,46.5668594 364.576141,60 349.921927,60 L349.921927,60 L328,60 L328,1.01694915 Z M505.924627,1.01694915 C520.57884,1.01694915 521,14.45283 521,15.9846793 L521,15.9846793 L521,44.7828991 C521,46.3394114 520.586941,60 506.253996,60 L506.253996,60 L484,60 L484,1.01694915 Z M505.924627,4.82053932 L487.830939,4.82053932 L487.830939,56.19641 L506.089311,56.19641 C507.652462,56.19641 510.641082,55.930597 513.114045,54.1384155 C515.805692,52.1900346 517.171763,49.0139821 517.171763,44.6979486 L517.171763,44.6979486 L517.171763,16.2367905 C517.171763,5.93311685 509.304706,4.82053932 505.924627,4.82053932 L505.924627,4.82053932 Z M350.170305,31.4401897 L331.830939,31.4401897 L331.830939,56.1114591 L349.759942,56.1114591 C351.714559,56.1114591 354.546589,55.7716572 356.938564,54.1466364 C359.746298,52.2393606 361.169064,49.0879711 361.169064,44.7828989 L361.169064,44.7828989 L361.169064,43.0236016 C361.169064,38.6609822 359.894784,35.471228 357.378621,33.5447697 C355.556295,32.1471969 353.131924,31.4401897 350.170305,31.4401897 L350.170305,31.4401897 Z M349.346883,4.80409728 L331.830939,4.80409728 L331.830939,27.6365996 L349.840936,27.6365996 C352.840353,27.6365996 355.016346,27.033725 356.687487,25.7402852 C359.00387,23.950844 360.178258,20.8295982 360.178258,16.4724596 L360.178258,16.4724596 L360.178258,15.7188664 C360.178258,8.47889152 356.533602,4.80409728 349.346883,4.80409728 L349.346883,4.80409728 Z"
                        fill="#000000"
                        fill-rule="nonzero"
                      ></path>
                    </g>
                  </svg> */}
                </a>
              </Link>
            </div>
            <div className="col-span-3 lg:col-span-4 flex items-center justify-end">
              <nav
                role="navigation"
                className="locale-nav flex items-center relative"
                aria-label="Languages"
              >
                <button
                  aria-label="openContentNav"
                  className="footer-nav__btn text-sm font-medium text-darkgrey uppercase flex"
                >
                  en{' '}
                  <i className="icon-caret-down inline-block w-6 h-4 text-xl pseudo-inset-0 text-darkgrey"></i>
                </button>

                <ul className="absolute bg-white top-8 shadow p-4 z-10 right-0 invisible opacity-0 transition-opacity">
                  <li className="link uppercase">
                    <a href="/nl/" rel="alternate" hreflang="nl-nl">
                      Nederlands
                    </a>
                  </li>

                  <li className="link uppercase">
                    <a href="/es/" rel="alternate" hreflang="es-es">
                      Español
                    </a>
                  </li>

                  <li className="link uppercase">
                    <a href="/de/" rel="alternate" hreflang="de-de">
                      Deutsch
                    </a>
                  </li>

                  <li className="link uppercase">
                    <a href="/fr/" rel="alternate" hreflang="fr-fr">
                      Français
                    </a>
                  </li>

                  <li className="link uppercase">
                    <a href="/pl/" rel="alternate" hreflang="pl-pl">
                      Polski
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="container flex-grow">
            <div className="pt-5 pb-16 lg:pt-20 flex flex-col lg:flex-row justify-between col-span-12">
              <ul>
                <li>
                  <a
                    className="h2 py-2 md:py-3 block duration-200 transition-colors hover:text-primary "
                    href="/why-motionblinds/"
                  >
                    Why MotionBlinds
                  </a>
                </li>

                <li>
                  <a
                    className="h2 py-2 md:py-3 block duration-200 transition-colors hover:text-primary "
                    href="/eve/"
                  >
                    Eve MotionBlinds
                  </a>
                </li>

                <li>
                  <a
                    className="h2 py-2 md:py-3 block duration-200 transition-colors hover:text-primary "
                    href="/bluetooth/"
                  >
                    MotionBlinds Bluetooth
                  </a>
                </li>

                <li>
                  <a
                    className="h2 py-2 md:py-3 block duration-200 transition-colors hover:text-primary "
                    href="/smart-home-connectivity/"
                  >
                    Smart home connectivity
                  </a>
                </li>

                <li>
                  <a
                    className="h2 py-2 md:py-3 block duration-200 transition-colors hover:text-primary "
                    href="/products/"
                  >
                    Product portfolio
                  </a>
                </li>

                <li>
                  <a
                    className="h2 py-2 md:py-3 block duration-200 transition-colors hover:text-primary "
                    href="/blog/"
                  >
                    Inspiration blog
                  </a>
                </li>

                <li>
                  <Link legacyBehavior href="https://support.motionblinds.com/">
                    <a
                      className="h2 py-2 md:py-3 block duration-200 transition-colors hover:text-primary "
                      target="_blank"
                    >
                      Support
                    </a>
                  </Link>
                </li>
              </ul>

              <div>
                <a
                  href="/stores/"
                  className="btn btn--black w-full mb-3 md:mb-6"
                >
                  Find your store
                </a>

                <a href="/become-a-dealer/" className="btn btn--primary w-full">
                  Become a dealer{' '}
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main id="main" role="main">
          <section className="simple-header">
            <div className="container">
              <div className="relative col-span-12">
                <div className="object-cover -mx-4 aspect-w-10 aspect-h-14 lg:aspect-w-16 lg:aspect-h-9 lg:mx-0">
                  <Image
                    width="1600"
                    height="900"
                    alt="Eve MotionBlinds 1920 x 1080 px"
                    src="https://motionblinds.com/assets/Bestanden/HeaderAfbeeldingen/Eve-MotionBlinds-1920-x-1080-px__FocusFillWzE2MDAsOTAwLGZhbHNlLDBd.jpg"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 z-0 hidden lg:block">
                    <iframe
                      title="Video"
                      className="w-full h-full"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      src="about:blank"
                      data-src="https://player.vimeo.com/video/642220829?background=1&muted=1&controls=1"
                    ></iframe>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-0 -mx-4 lg:mx-0 h-1/2 bg-gradient-to-b from-black opacity-40"></div>
                <div className="absolute inset-0">
                  <div className="grid h-full grid-cols-8 gap-4">
                    <div className="flex flex-col items-center justify-between col-span-8 pt-16 lg:col-span-6 lg:col-start-2 xl:col-span-4 xl:col-start-3 lg:pt-24">
                      <div className="flex flex-col items-center text-center">
                        <h1 className="mb-4 text-white h1">
                          Smart window coverings
                        </h1>

                        <h2 className="text-white h4">
                          Powered by MotionBlinds
                        </h2>

                        <div className="flex flex-col items-center w-full mt-8 lg:mt-12 lg:flex-row lg:w-auto">
                          <a
                            className="w-full btn btn--black lg:w-auto"
                            href="/stores/"
                          >
                            Find your store
                          </a>

                          <a
                            className="w-full mt-6 btn btn--primary lg:w-auto lg:ml-6 lg:mt-0"
                            href="/become-a-dealer/"
                          >
                            Become a dealer
                          </a>

                          <div className="play-video-modal">
                            <button
                              aria-label="playVideo"
                              className="h-6 mt-6 play-video-modal__btn lg:ml-6 lg:mt-0 text-btn text-btn--white icon-play"
                            >
                              Watch video{' '}
                            </button>
                            <div className="video-modal fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center transition-all duration-200 invisible opacity-0">
                              <div className="video-modal__close inset-0 absolute cursor-pointer"></div>

                              <div className="w-full lg:w-2/3  bg-white p-4 lg:p-8">
                                <div className="relative aspect-w-16 aspect-h-9">
                                  <iframe
                                    title="Video"
                                    className="w-full h-full"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    src="about:blank"
                                    data-src="https://player.vimeo.com/video/642220829?autoplay=1&controls=1"
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="inline-block mb-4 scroll-down text-btn text-btn--white icon-chevron-down lg:mb-6"
                        aria-label="scrollDown"
                      >
                        Discover more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="element-wrap pt-8 lg:pt-12">
            <div
              className="element app__elements__textimageelement right"
              id="e1"
            >
              <div className="container py-8 lg:py-12 items-center ">
                <div className="col-span-12 lg:col-span-6 relative mb-6 lg:mb-0  lg:order-2 videoplayer aspect-w-16 aspect-h-9 cursor-pointer show-on-scroll curtain">
                  <div className="absolute inset-0 object-cover">
                    <Image
                      width="1260"
                      height="710"
                      alt="Video Thumbnail 16 9 V1 NoText"
                      src="https://motionblinds.com/assets/Video-Thumbnail_16-9_V1_NoText__FocusFillWzEyNjAsNzEwLCJ4IiwxXQ.jpg"
                      loading="lazy"
                    />
                  </div>
                  <button
                    aria-label="playVideo"
                    className="play-btn  inline-flex w-12 h-12 rounded-full bg-transparent bg-opacity-70 transition-opacity duration-200 hover:opacity-80 justify-center items-center absolute top-1/2 left-1/2 z-1 transform -translate-y-1/2 -translate-x-1/2 group-activated:hidden"
                  >
                    <i className="icon-play text-white pseudo-inset-0 text-5xl"></i>
                  </button>
                  <div className="video-modal fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center transition-all duration-200 invisible opacity-0">
                    <div className="video-modal__close inset-0 absolute cursor-pointer"></div>

                    <div className="w-full lg:w-2/3  bg-white p-4 lg:p-8">
                      <div className="relative aspect-w-16 aspect-h-9">
                        <iframe
                          title="Video"
                          className="w-full h-full"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          src="about:blank"
                          data-src="https://player.vimeo.com/video/642219780?autoplay=1&controls=1"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="markdown col-span-12 lg:col-span-6  lg:order-1 show-on-scroll fade-in">
                  <h2 className="h2 mb-3">
                    EVE MOTIONBLINDS SUPPORTS THREAD AND MATTER{' '}
                  </h2>
                  <p>
                    <span
                      className="TextRun SCXW48251137 BCX8"
                      data-contrast="none"
                    >
                      <span className="NormalTextRun SCXW48251137 BCX8">
                        Eve{' '}
                      </span>
                      <span className="SpellingError SCXW48251137 BCX8">
                        MotionBlinds
                      </span>
                      <span className="NormalTextRun SCXW48251137 BCX8">
                        {' '}
                        motors are{' '}
                      </span>
                      <span className="SpellingError SCXW48251137 BCX8">
                        reliable
                      </span>
                      <span className="NormalTextRun SCXW48251137 BCX8">
                        ,{' '}
                      </span>
                      <span className="SpellingError SCXW48251137 BCX8">
                        connective
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        and
                      </span>
                      <span className="NormalTextRun SCXW48251137 BCX8">
                        {' '}
                        smart in a minute.{' '}
                      </span>
                      <span className="SpellingError SCXW48251137 BCX8">
                        Designed
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        to
                      </span>
                      <span className="NormalTextRun SCXW48251137 BCX8">
                        {' '}
                        support Bluetooth, Thread,{' '}
                      </span>
                      <span className="SpellingError SCXW48251137 BCX8">
                        and
                      </span>
                      <span className="NormalTextRun SCXW48251137 BCX8">
                        {' '}
                        Matter (in late Q1){' '}
                      </span>
                      <span className="SpellingError SCXW48251137 BCX8">
                        every
                      </span>
                      <span className="NormalTextRun SCXW48251137 BCX8">
                        {' '}
                        family member{' '}
                      </span>
                      <span className="SpellingError SCXW48251137 BCX8">
                        can
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        connect
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        to
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        their
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        preferred
                      </span>
                      <span className="NormalTextRun SCXW48251137 BCX8">
                        {' '}
                        smartphone or{' '}
                      </span>
                      <span className="SpellingError SCXW48251137 BCX8">
                        voice
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        assistant
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        with
                      </span>
                      <span className="NormalTextRun SCXW48251137 BCX8">
                        {' '}
                        Apple Home, Amazon Alexa, Google Home, Samsung{' '}
                      </span>
                      <span className="SpellingError SCXW48251137 BCX8">
                        SmartThings
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        and
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        many
                      </span>{' '}
                      <span className="SpellingError SCXW48251137 BCX8">
                        others
                      </span>
                      <span className="NormalTextRun SCXW48251137 BCX8">.</span>
                    </span>
                    <span
                      className="EOP SCXW48251137 BCX8"
                      data-ccp-props='{"201341983":0,"335559739":160,"335559740":259}'
                    >
                      &nbsp;
                    </span>
                  </p>

                  <a
                    className="text-btn icon-chevron-right inline-block mt-8"
                    href="/eve/"
                  >
                    More about Eve MotionBlinds
                  </a>
                </div>
              </div>
            </div>

            <div
              className="element app__elements__textimageelement left"
              id="e4"
            >
              <div className="container py-8 lg:py-12 items-center ">
                <div className="col-span-12 lg:col-span-6 relative mb-6 lg:mb-0  lg:order-1  show-on-scroll curtain">
                  <Image
                    width="1260"
                    height="840"
                    alt="16 close motion 8270.jpg 2"
                    src="https://motionblinds.com/assets/Uploads/16-close-motion-8270__ScaleMaxWidthWzEyNjBd.jpg-2.jpeg"
                    loading="lazy"
                  />

                  <span
                    className="pulse"
                    style={{ left: 47.31, top: 55.44 }}
                  ></span>
                </div>

                <div className="markdown col-span-12 lg:col-span-6  lg:order-2  show-on-scroll fade-in">
                  <h2 className="h2 mb-3">MOTIONBLINDS AND YOUR SMART HOME</h2>
                  <p>
                    <span>
                      MotionBlinds also works with other smart home assistants
                      such as Google, Alexa, SmartThings and IFTTT. This
                      requires the MotionBlinds Wi-Fi Bridge which opens up a
                      world of connectivity options with third parties and puts
                      you in control with the MotionBlinds smartphone app.&nbsp;
                    </span>
                  </p>

                  <a
                    className="text-btn icon-chevron-right inline-block mt-8"
                    href="/smart-home-connectivity/"
                  >
                    More about MotionBlinds connectivity
                  </a>
                </div>
              </div>
            </div>

            <div
              className="element app__elements__textimageelement right"
              id="e843"
            >
              <div className="container py-8 lg:py-12 items-center ">
                <div className="col-span-12 lg:col-span-6 relative mb-6 lg:mb-0 lg:order-2  show-on-scroll curtain">
                  <Image
                    width="1260"
                    height="890"
                    alt="MotionBlinds Retrofit"
                    src="https://motionblinds.com/assets/Bestanden/HeaderAfbeeldingen/MotionBlinds-Retrofit__ScaleMaxWidthWzEyNjBd.png"
                    loading="lazy"
                  />
                </div>

                <div className="markdown col-span-12 lg:col-span-6  lg:order-1 show-on-scroll fade-in">
                  <h2 className="h2 mb-3">
                    Motorize your existing roller blinds
                  </h2>
                  <p>
                    <span>
                      MotionBlinds motors for roller blinds are available as
                      stand-alone products to motorize existing blinds. The
                      MotionBlinds upgrade kit includes adapters that make the
                      motors fit into a wide range of roller blind tubes. This
                      option offers endless possibilities to make your home
                      smart, safe and ultra-comfortable.
                    </span>
                  </p>

                  <a
                    className="text-btn icon-chevron-right inline-block mt-8"
                    href="/upgrade-kit/"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="element app__elements__ctacolumnselement" id="e2">
              <div className="container py-8 lg:py-12">
                <div className="col-span-12">
                  <h2 className="h2 mb-8 show-on-scroll fade-in">
                    SMARTIFY YOUR LIFE
                  </h2>
                </div>
                <div className="col-span-12">
                  <div
                    className="swiper-container cta-image-slider relative"
                    data-statusbar="true"
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide ">
                        <div className="object-cover show-on-scroll curtain">
                          <Image
                            width="824"
                            height="1072"
                            alt="Safety"
                            src="https://motionblinds.com/assets/Bestanden/CTAAfbeeldingen/MOT15-RF-NARBONNE-0500-GRAPHIT-ANTHRACITE-kopie_1-lores__FocusFillWzgyNCwxMDcyLCJ5Iiw4MV0.jpg"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="swiper-slide ">
                        <div className="object-cover show-on-scroll curtain">
                          <Image
                            width="824"
                            height="1072"
                            alt="Energy efficiency"
                            src="https://motionblinds.com/assets/Bestanden/CTAAfbeeldingen/MOT2-lores__FocusFillWzgyNCwxMDcyLCJ5IiwxM10.jpg"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="swiper-slide ">
                        <div className="object-cover show-on-scroll curtain">
                          <Image
                            width="824"
                            height="1072"
                            alt="Conveninece Noon small"
                            src="https://motionblinds.com/assets/Bestanden/CTAAfbeeldingen/Conveninece-Noon_small__FocusFillWzgyNCwxMDcyLCJ4IiwzMDJd.jpg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="cta-image-slider__statusbar relative mt-6 h-0.5 w-full bg-grey lg:hidden">
                      <span className="cta-image-slider__statusbar_status absolute inset-y-0 left-0 bg-black transition-all duration-300"></span>
                    </div>

                    <button className="cta-image-slider--prev cta-text-slider--prev inline-flex lg:hidden w-12 h-12 rounded-full bg-white left-4 bg-opacity-70 justify-center items-center absolute top-1/2 z-1 transform -translate-y-1/2 disabled:opacity-0">
                      <i className="icon-chevron-right pseudo-inset-0 text-2xl rotate-180 transform"></i>
                    </button>
                    <button className="cta-image-slider--next cta-text-slider--next inline-flex lg:hidden w-12 h-12 rounded-full bg-white right-4 bg-opacity-70 justify-center items-center absolute top-1/2 z-1 transform -translate-y-1/2 disabled:opacity-0">
                      <i className="icon-chevron-right pseudo-inset-0 text-2xl "></i>
                    </button>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="swiper-container cta-text-slider">
                    <div className="swiper-wrapper items-stretch ">
                      <div className="swiper-slide h-auto ">
                        <div className="py-6 lg:pr-12 h-full flex flex-col items-start show-on-scroll fade-in">
                          <h3 className="h3 mb-1">SAFETY</h3>
                          <p className="mb-9">
                            Smart window coverings can be set to open and close
                            at any time you require, which means your home seems
                            inhibited even when you are away. <br />
                          </p>

                          <a
                            className="text-btn icon-chevron-right mt-auto"
                            href="/safety/"
                          >
                            MORE ABOUT SAFETY
                          </a>
                        </div>
                      </div>

                      <div className="swiper-slide h-auto ">
                        <div className="py-6 lg:pr-12 h-full flex flex-col items-start show-on-scroll fade-in">
                          <h3 className="h3 mb-1">ENERGY EFFICIENCY</h3>
                          <p className="mb-9">
                            Smart window coverings automatically adapt to
                            changing temperatures inside and outside the home,
                            helping to save energy.
                          </p>

                          <a
                            className="text-btn icon-chevron-right mt-auto"
                            href="/energy-efficiency/"
                          >
                            MORE ABOUT ENERGY EFFICIENCY
                          </a>
                        </div>
                      </div>

                      <div className="swiper-slide h-auto ">
                        <div className="py-6 lg:pr-12 h-full flex flex-col items-start show-on-scroll fade-in">
                          <h3 className="h3 mb-1">CONVENIENCE</h3>
                          <p className="mb-9">
                            Smart window coverings move to the rhythm of your
                            daily life, creating the perfect atmosphere at any
                            time of the day.
                          </p>

                          <a
                            className="text-btn icon-chevron-right mt-auto"
                            href="/convenience/"
                          >
                            MORE ABOUT CONVENIENCE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="element app__elements__sliderelement" id="e3">
              <div className="bg-primary">
                <div className="container pb-8 lg:py-24 show-on-scroll fade-in">
                  <div className="col-span-12 lg:col-span-10 lg:col-start-2 -mx-4 lg:mx-0">
                    <div
                      className="swiper-container slider-element-imageslider overflow-visible "
                      data-statusbar="true"
                      data-loop="true"
                      data-length="4"
                    >
                      <div className="swiper-wrapper ">
                        <div className="swiper-slide flex items-center">
                          <div className="slider-element-imageslider__image object-cover transition-all duration-300">
                            <div className="slider-element-imageslider__image_overlay absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black opacity-40"></div>

                            <h3 className="h1 text-white absolute inset-x-0 text-center z-1 top-6 lg:top-24">
                              Powered by Eve MotionBlinds
                            </h3>
                            <Image
                              width="2132"
                              height="1280"
                              alt="Eve MotionBlinds 1920 x 1080 px"
                              src="https://motionblinds.com/assets/Bestanden/CTAAfbeeldingen/Eve-MotionBlinds-1920-x-1080-px__FocusFillWzIxMzIsMTI4MCwieCIsNzFd.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="swiper-slide flex items-center">
                          <div className="slider-element-imageslider__image object-cover transition-all duration-300">
                            <div className="slider-element-imageslider__image_overlay absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black opacity-40"></div>

                            <h3 className="h1 text-white absolute inset-x-0 text-center z-1 top-6 lg:top-24">
                              CABLE-FREE AND RECHARGEABLE
                            </h3>
                            <Image
                              width="2132"
                              height="1280"
                              alt="EVE MOTIONBLINDS USB C Charging"
                              src="https://motionblinds.com/assets/Bestanden/EVE-MOTIONBLINDS-USB-C-Charging__FocusFillWzIxMzIsMTI4MCwieCIsNzFd.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="swiper-slide flex items-center">
                          <div className="slider-element-imageslider__image object-cover transition-all duration-300">
                            <div className="slider-element-imageslider__image_overlay absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black opacity-40"></div>

                            <h3 className="h1 text-white absolute inset-x-0 text-center z-1 top-6 lg:top-24">
                              SCAN, CONNECT AND CONTROL
                            </h3>
                            <Image
                              width="2132"
                              height="1280"
                              alt="16 close motion 8331 lowres"
                              src="https://motionblinds.com/assets/Bestanden/CTAAfbeeldingen/16-close-motion-8331_lowres__FocusFillWzIxMzIsMTI4MCwieSIsNzBd.jpg"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="swiper-slide flex items-center">
                          <div className="slider-element-imageslider__image object-cover transition-all duration-300">
                            <div className="slider-element-imageslider__image_overlay absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black opacity-40"></div>

                            <h3 className="h1 text-white absolute inset-x-0 text-center z-1 top-6 lg:top-24">
                              JUST A SIMPLE PULL
                            </h3>
                            <Image
                              width="2132"
                              height="1280"
                              alt="16 close motion 8327.jpg 2"
                              src="https://motionblinds.com/assets/Bestanden/CTAAfbeeldingen/16-close-motion-8327__FocusFillWzIxMzIsMTI4MCwieSIsNzBd.jpg-2.jpeg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        aria-label="previousSlide"
                        className="slider-element-imageslider--prev slider-element-textslider--prev inline-flex w-12 h-12 rounded-full bg-white left-4 lg:-left-24 bg-opacity-70 justify-center items-center absolute top-1/2 z-1 transform -translate-y-1/2 disabled:opacity-0"
                      >
                        <i className="icon-chevron-right pseudo-inset-0 text-2xl rotate-180 transform"></i>
                      </button>
                      <button
                        aria-label="nextSlide"
                        className="slider-element-imageslider--next slider-element-textslider--next inline-flex w-12 h-12 rounded-full bg-white right-4 lg:-right-24 bg-opacity-70 justify-center items-center absolute top-1/2 z-1 transform -translate-y-1/2 disabled:opacity-0"
                      >
                        <i className="icon-chevron-right pseudo-inset-0 text-2xl "></i>
                      </button>

                      <div className="slider-element-imageslider__statusbar relative -mt-0.5 h-0.5  bg-grey lg:hidden transform translate-y-6 mx-4">
                        <span className="slider-element-imageslider__statusbar_status absolute inset-y-0 left-0 bg-black transition-all duration-300"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6 lg:col-start-4 mt-14 lg:-mt-20">
                    <div className="swiper-container slider-element-textslider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide lg:pt-5 lg:px-6 bg-primary">
                          <p className="mb-9">
                            Smart window coverings powered by Eve MotionBlinds
                            motors are the first to work with Apple HomeKit
                            technology without a bridge or additional account.
                          </p>

                          <a
                            className="text-btn icon-chevron-right mt-auto"
                            href="/eve/"
                          >
                            MORE ABOUT EVE MOTIONBLINDS
                          </a>
                        </div>

                        <div className="swiper-slide lg:pt-5 lg:px-6 bg-primary">
                          <p className="mb-9">
                            Window coverings powered by MotionBlinds can be
                            installed completely cable-free. The battery motors
                            are USB-C rechargeable.{' '}
                          </p>

                          <a
                            className="text-btn icon-chevron-right mt-auto"
                            href="/why-motionblinds/"
                          >
                            Discover the ease of MotionBlinds
                          </a>
                        </div>

                        <div className="swiper-slide lg:pt-5 lg:px-6 bg-primary">
                          <p className="mb-9">
                            Once your blind is installed, all you have to do is
                            scan a setup code with your smartphone. The app
                            tells you exactly how it works.{' '}
                          </p>

                          <a
                            className="text-btn icon-chevron-right mt-auto"
                            href="/bluetooth/"
                          >
                            DISCOVER MOTIONBLINDS BLUETOOTH
                          </a>
                        </div>

                        <div className="swiper-slide lg:pt-5 lg:px-6 bg-primary">
                          <p className="mb-9">
                            Smart window coverings with MotionBlinds can even be
                            operated manually. Which is very handy, as it always
                            works. A simple pull will do.{' '}
                          </p>

                          <a
                            className="text-btn icon-chevron-right mt-auto"
                            href="/control-options/"
                          >
                            DISCOVER ALL CONTROL OPTIONS
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="element app__elements__carouselelement" id="e5">
              <div className="container py-8 lg:py-12">
                <div className="col-span-12 mb-8">
                  <h2 className="h2 mb-8 show-on-scroll fade-in">
                    SMART WINDOW COVERINGS WITH MOTIONBLINDS{' '}
                  </h2>
                </div>

                <div className="col-span-11 lg:col-span-12">
                  <div
                    className="swiper-container carousel-element-carousel overflow-visible"
                    data-statusbar="true"
                  >
                    <div className="swiper-wrapper show-on-scroll--children">
                      <div className="swiper-slide">
                        <a
                          href="/products/roller-blinds/"
                          className="block rounded overflow-hidden relative shadow group"
                        >
                          <Image
                            width="412"
                            height="333"
                            alt="9.1 Home Silder Roller"
                            src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/9__FocusFillWzQxMiwzMzMsIngiLDE2XQ.1-Home-Silder-Roller.jpg"
                            loading="lazy"
                          />

                          <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black opacity-60 transition-opacity duration-200 group-hover:opacity-80"></span>
                          <span className="absolute left-6 bottom-6 z-1">
                            <button
                              aria-label="toPage"
                              className="text-btn text-btn--white icon-chevron-right"
                            >
                              Roller blinds
                            </button>
                          </span>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a
                          href="/products/venetian-blinds/"
                          className="block rounded overflow-hidden relative shadow group"
                        >
                          <Image
                            width="412"
                            height="333"
                            alt="cou MB amersfoort 2825 WPS9PE50 F L low res"
                            src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/cou-MB-amersfoort-2825-WPS9PE50-F-L-low-res__FocusFillWzQxMiwzMzMsIngiLDE1XQ.jpg"
                            loading="lazy"
                          />

                          <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black opacity-60 transition-opacity duration-200 group-hover:opacity-80"></span>
                          <span className="absolute left-6 bottom-6 z-1">
                            <button
                              aria-label="toPage"
                              className="text-btn text-btn--white icon-chevron-right"
                            >
                              Venetian blinds
                            </button>
                          </span>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a
                          href="/products/smart-vertical-blinds/"
                          className="block rounded overflow-hidden relative shadow group"
                        >
                          <Image
                            width="412"
                            height="333"
                            alt="VB TR 073"
                            src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/VB_TR_073__FocusFillWzQxMiwzMzMsIngiLDQzXQ.jpg"
                            loading="lazy"
                          />

                          <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black opacity-60 transition-opacity duration-200 group-hover:opacity-80"></span>
                          <span className="absolute left-6 bottom-6 z-1">
                            <button
                              aria-label="toPage"
                              className="text-btn text-btn--white icon-chevron-right"
                            >
                              Vertical blinds
                            </button>
                          </span>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a
                          href="/products/pleated-blinds/"
                          className="block rounded overflow-hidden relative shadow group"
                        >
                          <Image
                            width="412"
                            height="333"
                            alt="Slider pleated"
                            src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/pleated__FocusFillWzQxMiwzMzMsIngiLDE1XQ.jpg"
                            loading="lazy"
                          />

                          <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black opacity-60 transition-opacity duration-200 group-hover:opacity-80"></span>
                          <span className="absolute left-6 bottom-6 z-1">
                            <button
                              aria-label="toPage"
                              className="text-btn text-btn--white icon-chevron-right"
                            >
                              Pleated blinds
                            </button>
                          </span>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a
                          href="/products/honeycomb-blinds/"
                          className="block rounded overflow-hidden relative shadow group"
                        >
                          <Image
                            width="412"
                            height="333"
                            alt="cou MB amersfoort 2865 HC PF HC45 DEVON 0400 L Model low res"
                            src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/cou-MB-amersfoort-2865-HC-PF-HC45-DEVON-0400-L-Model-low-res__FocusFillWzQxMiwzMzMsIngiLDE1XQ.jpg"
                            loading="lazy"
                          />

                          <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black opacity-60 transition-opacity duration-200 group-hover:opacity-80"></span>
                          <span className="absolute left-6 bottom-6 z-1">
                            <button
                              aria-label="toPage"
                              className="text-btn text-btn--white icon-chevron-right"
                            >
                              Honeycomb blinds
                            </button>
                          </span>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a
                          href="/products/roman-blinds/"
                          className="block rounded overflow-hidden relative shadow group"
                        >
                          <Image
                            width="412"
                            height="333"
                            alt="Large web EVE MOTIONBLINDS RF HUEVA 0100 2"
                            src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/Large-web-EVE-MOTIONBLINDS-RF-HUEVA-0100-2__FocusFillWzQxMiwzMzMsIngiLDQzXQ.jpg"
                            loading="lazy"
                          />

                          <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black opacity-60 transition-opacity duration-200 group-hover:opacity-80"></span>
                          <span className="absolute left-6 bottom-6 z-1">
                            <button
                              aria-label="toPage"
                              className="text-btn text-btn--white icon-chevron-right"
                            >
                              Roman blinds
                            </button>
                          </span>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a
                          href="/products/curtains/"
                          className="block rounded overflow-hidden relative shadow group"
                        >
                          <Image
                            width="412"
                            height="333"
                            alt="cou MB amersfoort 3003 1 lores"
                            src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/cou-MB-amersfoort-3003-1-lores__FocusFillWzQxMiwzMzMsIngiLDE1XQ.jpg"
                            loading="lazy"
                          />

                          <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black opacity-60 transition-opacity duration-200 group-hover:opacity-80"></span>
                          <span className="absolute left-6 bottom-6 z-1">
                            <button
                              aria-label="toPage"
                              className="text-btn text-btn--white icon-chevron-right"
                            >
                              Curtains
                            </button>
                          </span>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a
                          href="/products/double-roller-blinds/"
                          className="block rounded overflow-hidden relative shadow group"
                        >
                          <Image
                            width="412"
                            height="333"
                            alt="MOTION BLINDS DRF Skyros 1400 silver L Model"
                            src="https://motionblinds.com/assets/Uploads/MOTION-BLINDS-DRF-Skyros-1400-silver-L-Model__FocusFillWzQxMiwzMzMsIngiLDE2XQ.jpg"
                            loading="lazy"
                          />

                          <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black opacity-60 transition-opacity duration-200 group-hover:opacity-80"></span>
                          <span className="absolute left-6 bottom-6 z-1">
                            <button
                              aria-label="toPage"
                              className="text-btn text-btn--white icon-chevron-right"
                            >
                              Double roller blinds
                            </button>
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="carousel-element-carousel__statusbar relative mt-8 h-0.5 w-full bg-grey">
                      <span className="carousel-element-carousel__statusbar_status absolute inset-y-0 left-0 bg-black transition-all duration-300"></span>
                    </div>

                    <div className="mt-4 hidden lg:flex justify-end">
                      <button
                        aria-label="previousSlide"
                        className="carousel-element-carousel--prev text-1.5xl w-6 h-6 inline-flex justify-center items-center icon-chevron-right rotate-180 transform mr-6"
                      ></button>
                      <button
                        aria-label="nextSlide"
                        className="carousel-element-carousel--next text-1.5xl w-6 h-6 inline-flex justify-center items-center icon-chevron-right"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="element app__elements__uspelement" id="e6">
              <div className="container py-8 lg:py-12">
                <div className="col-span-12">
                  <h2 className="h2 text-center mb-14 show-on-scroll fade-in">
                    Why MotionBlinds
                  </h2>

                  <div className="flex flex-wrap justify-center xl:justify-between -mx-3 xl:-mx-10 -my-7 show-on-scroll--children">
                    <div className="flex flex-col items-center w-1/2  xl:w-3/12  px-3 xl:px-10 py-7 text-center">
                      <span className="bg-black inline-flex justify-center items-center h-22 w-22 rounded-full mb-4 text-white text-opacity-40 ">
                        <i className="mb-icon mb-icon-Simple inline-block w-8 h-8 text-white text-7xl pseudo-inset-0"></i>
                      </span>

                      <h3 className="mb-1">EASY</h3>
                      <p>Cable-free installation, easy set up</p>
                    </div>

                    <div className="flex flex-col items-center w-1/2  xl:w-3/12  px-3 xl:px-10 py-7 text-center">
                      <span className="bg-black inline-flex justify-center items-center h-22 w-22 rounded-full mb-4 text-white text-opacity-40 ">
                        <i className="mb-icon mb-icon-Smart_Home inline-block w-8 h-8 text-white text-7xl pseudo-inset-0"></i>
                      </span>

                      <h3 className="mb-1">SMART</h3>
                      <p>Connect to your smart home</p>
                    </div>

                    <div className="flex flex-col items-center w-1/2  xl:w-3/12  px-3 xl:px-10 py-7 text-center">
                      <span className="bg-black inline-flex justify-center items-center h-22 w-22 rounded-full mb-4 text-white text-opacity-40 ">
                        <i className="mb-icon mb-icon-Stylish inline-block w-8 h-8 text-white text-7xl pseudo-inset-0"></i>
                      </span>

                      <h3 className="mb-1">DESIGN</h3>
                      <p>Techology invisible to the eye</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="element app__elements__inspirationelement" id="e77">
              <div className="container py-8 lg:py-12">
                <div className="col-span-12 grid grid-cols-2 gap-6">
                  <div className="col-span-2 lg:col-span-1 grid grid-rows-16 gap-6  inspiration-element">
                    <div className="col-span-1 row-start-1 row-end-6 object-cover show-on-scroll curtain">
                      <Image
                        width="303"
                        height="200"
                        alt="cou westendorp 0173 BM Melbourne 0600 Lowres"
                        src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/cou-westendorp-0173-BM-Melbourne-0600_Lowres.gif"
                        loading="lazy"
                      />
                    </div>

                    <div className="col-span-1 row-start-1 row-end-6 object-cover show-on-scroll curtain">
                      <Image
                        width="606"
                        height="400"
                        alt="9.2 Home Slider Double Roller"
                        src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/9__FocusFillWzYwNiw0MDAsInkiLDJd.2-Home-Slider-Double-Roller.jpg"
                        loading="lazy"
                      />
                    </div>

                    <div className="col-span-2  row-start-6 row-end-17 col-start-1 object-cover show-on-scroll curtain">
                      <Image
                        width="1260"
                        height="852"
                        alt="9.3 Home Slider Panel"
                        src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/9__FocusFillWzEyNjAsODUyLCJ4Iiw4XQ.3-Home-Slider-Panel.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1 grid grid-rows-16 gap-6  inspiration-element">
                    <div className="col-span-1  row-start-1 row-end-12 object-cover show-on-scroll curtain">
                      <Image
                        width="606"
                        height="852"
                        alt="9.4 Home Slider Venetian"
                        src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/9__FocusFillWzYwNiw4NTIsIngiLDI2NV0.4-Home-Slider-Venetian.jpg"
                        loading="lazy"
                      />
                    </div>

                    <div className="col-span-1  row-start-12 row-end-17 object-cover show-on-scroll curtain">
                      <Image
                        width="303"
                        height="200"
                        alt="MOTION MOD 017 Lowres"
                        src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/MOTION_MOD_017_Lowres.gif"
                        loading="lazy"
                      />
                    </div>

                    <div className="col-span-1 row-start-1 row-end-10 col-start-2 object-cover show-on-scroll curtain">
                      <Image
                        width="303"
                        height="346"
                        alt="RF WEMBLEY 0500 castle rock P Lowres v2"
                        src="https://motionblinds.com/assets/Bestanden/CarouselItemAfbeeldingen/RF-WEMBLEY-0500-castle-rock-P_Lowres-v2.gif"
                        loading="lazy"
                      />
                    </div>

                    <div className="col-span-1 row-start-10 row-end-17 col-start-2 object-cover show-on-scroll curtain">
                      <Image
                        width="606"
                        height="560"
                        alt="16 close motion 8327.jpg 2"
                        src="https://motionblinds.com/assets/Bestanden/InspiratieAfbeeldingen/16-close-motion-8327__FocusFillWzYwNiw1NjAsIngiLDExN10.jpg-2.jpeg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <aside className="py-10 lg:py-20">
          <div className="container">
            <div className="col-span-12 lg:col-span-6 rounded border border-grey p-4 lg:p-10 show-on-scroll fade-in">
              <h3 className="h3 mb-10">WHERE TO BUY MOTIONBLINDS?</h3>
              <div className="flex flex-col xl:flex-row">
                <a className="btn btn--black" href="/stores/">
                  Find your store
                </a>

                <a
                  className="btn btn--primary mt-6 xl:mt-0 xl:ml-6"
                  href="/become-a-dealer/"
                >
                  Become a dealer{' '}
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 rounded border border-grey p-4 lg:p-10 flex flex-nowrap mt-4 lg:mt-0 show-on-scroll fade-in">
              <div className="relative min-w-14 w-14 h-14 mr-4 lg:mr-6 ">
                <div className="rounded-full overflow-hidden w-full h-full">
                  <Image
                    width="150"
                    height="150"
                    alt="5 Home Simplicity"
                    src="https://motionblinds.com/assets/Bestanden/CTAAfbeeldingen/5-Home-Simplicity__FocusFillWzE1MCwxNTAsIngiLDM3XQ.jpg"
                    loading="lazy"
                  />
                </div>
                <span className="inline-block w-4 h-4 rounded-full border-2 border-white absolute right-0 top-0 bg-green z-1"></span>
              </div>

              <div>
                <h3 className="h3 mb-3">NEED SUPPORT?</h3>
                <p>
                  Visit the support center to get answers to your questions.
                </p>
                <Link
                  legacyBehavior
                  href="https://support.motionblinds.com/?switch=true"
                >
                  <a
                    className="inline-block mt-8 text-btn text-btn--black icon-chevron-right"
                    target="_blank"
                  >
                    Find your answer
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </aside>

        <footer className="footer">
          <div className="footer__top pt-4 lg:py-16 bg-primary border-b border-darkgrey">
            <div className="container">
              <nav className="footer-nav col-span-12 lg:col-span-4 border-b border-darkgrey lg:border-none -mx-4 lg:mx-0 px-4 lg:px-0">
                <button
                  aria-label="openFooterNav"
                  className="footer-nav__btn h4  pt-4 lg:pt-0 mb-4 relative w-full text-left flex justify-between uppercase group"
                >
                  <span>About </span>
                  <span className="relative lg:hidden w-6 h-6 leading-6 -mt-1">
                    <i className="inline-block w-4 h-0.5 bg-black absolute left-1 top-1/2"></i>
                    <i className="inline-block w-4 h-0.5 bg-black absolute left-1 top-1/2 transform rotate-90 transition-all"></i>
                  </span>
                </button>
                <ul className="lg:grid lg:grid-cols-2">
                  <li className="lg:col-span-1 mb-4">
                    <a
                      className="transition-opacity duration-200 hover:opacity-50"
                      href="/about-motionblinds/"
                    >
                      About MotionBlinds
                    </a>
                  </li>

                  <li className="lg:col-span-1 mb-4">
                    <a
                      className="transition-opacity duration-200 hover:opacity-50"
                      href="/products/"
                    >
                      Product portfolio
                    </a>
                  </li>

                  <li className="lg:col-span-1 mb-4">
                    <a
                      className="transition-opacity duration-200 hover:opacity-50"
                      href="/blog/"
                    >
                      Inspiration blogs
                    </a>
                  </li>

                  <li className="lg:col-span-1 mb-4">
                    <a
                      className="transition-opacity duration-200 hover:opacity-50"
                      href="/press/"
                    >
                      Press
                    </a>
                  </li>

                  <li className="lg:col-span-1 mb-4">
                    <a
                      className="transition-opacity duration-200 hover:opacity-50"
                      href="/contact/"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>

              <nav className="footer-nav col-span-12 lg:col-span-2 border-b border-darkgrey lg:border-none -mx-4 lg:mx-0 px-4 lg:px-0">
                <button
                  aria-label="openFooterNav"
                  className="footer-nav__btn h4 pt-4 lg:pt-0 mb-4 relative w-full text-left flex justify-between uppercase"
                >
                  <span>Service</span>
                  <span className="relative lg:hidden w-6 h-6 leading-6 -mt-1">
                    <i className="inline-block w-4 h-0.5 bg-black absolute left-1 top-1/2"></i>
                    <i className="inline-block w-4 h-0.5 bg-black absolute left-1 top-1/2 transform rotate-90 transition-all"></i>
                  </span>
                </button>
                <ul>
                  <li className="lg:col-span-1 mb-4">
                    <Link
                      legacyBehavior
                      href="https://support.motionblinds.com/en/"
                    >
                      <a
                        className="transition-opacity duration-200 hover:opacity-50"
                        target="_blank"
                      >
                        Support
                      </a>
                    </Link>
                  </li>

                  <li className="lg:col-span-1 mb-4">
                    <a
                      className="transition-opacity duration-200 hover:opacity-50"
                      href="/stores/"
                    >
                      Find your store
                    </a>
                  </li>
                </ul>
              </nav>

              <nav className="footer-nav col-span-12 lg:col-span-2 border-b border-darkgrey lg:border-none -mx-4 lg:mx-0 px-4 lg:px-0">
                <button
                  aria-label="openFooterNav"
                  className="footer-nav__btn h4 pt-4 lg:pt-0 mb-4 relative w-full text-left flex justify-between uppercase"
                >
                  <span>Business</span>
                  <span className="relative lg:hidden w-6 h-6 leading-6 -mt-1">
                    <i className="inline-block w-4 h-0.5 bg-black absolute left-1 top-1/2"></i>
                    <i className="inline-block w-4 h-0.5 bg-black absolute left-1 top-1/2 transform rotate-90 transition-all"></i>
                  </span>
                </button>
                <ul>
                  <li className="lg:col-span-1 mb-4">
                    <a
                      className="transition-opacity duration-200 hover:opacity-50"
                      href="/become-a-dealer/"
                    >
                      Become a dealer
                    </a>
                  </li>

                  <li className="lg:col-span-1 mb-4">
                    <a
                      className="transition-opacity duration-200 hover:opacity-50"
                      href="/api/"
                    >
                      For developers
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="col-span-12 lg:col-span-4">
                <div className="py-6 lg:pt-0 lg:pb-12 border-b border-darkgrey lg:border-none -mx-4 lg:mx-0 px-4 lg:px-0">
                  <h4 className="h4 mb-3 uppercase">
                    {' '}
                    Sign up for our newsletter{' '}
                  </h4>

                  <iframe
                    src="https://go.coulisse.com/l/600151/2021-09-15/9bdxnj"
                    width="100%"
                    height="130"
                    type="text/html"
                    frameborder="0"
                    allowTransparency="true"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
                <div className="py-6 lg:py-0">
                  <h4 className="h4 mb-3 uppercase"> Follow our socials </h4>

                  <div className="flex">
                    <a
                      className="inline-flex text-xs icon-facebook w-6 h-6 leading-6 justify-center items-center bg-black rounded text-white mr-4 hover:opacity-70 transition-opacity duration-200"
                      target="_blank"
                      rel="noreferrer nofollow"
                      aria-label="MotionBlinds op Facebook"
                      href="https://www.facebook.com/MotionBlinds/"
                    ></a>

                    <a
                      className="inline-flex text-xs icon-instagram w-6 h-6 leading-6 justify-center items-center bg-black rounded text-white mr-4 hover:opacity-70 transition-opacity duration-200"
                      target="_blank"
                      rel="noreferrer nofollow"
                      aria-label="MotionBlinds op Instagram"
                      href="https://www.instagram.com/motionblinds/"
                    ></a>

                    <a
                      className="inline-flex text-xs icon-youtube w-6 h-6 leading-6 justify-center items-center bg-black rounded text-white mr-4 hover:opacity-70 transition-opacity duration-200"
                      target="_blank"
                      rel="noreferrer nofollow"
                      aria-label="MotionBlinds op Youtube"
                      href="https://www.youtube.com/channel/UCQ-OesGTma7BzlEp4HxKPGA "
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 lg:py-8 bg-primary">
            <div className="container">
              <div className="col-span-12 flex flex-col xl:flex-row xl:items-center">
                <span className="flex mr-16">
                  <Link legacyBehavior href="/">
                    <a className="h-4 lg:h-6 inline-block">
                      {/* <svg
                        className="h-full"
                        viewBox="0 0 565 60"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <path
                            d="M229,0 C245.544512,0 259,13.4581695 259,30 C259,46.5445121 245.544512,60 229,60 C212.458169,60 199,46.5445121 199,30 C199,13.4581695 212.458169,0 229,0 Z M93.9986593,0 C110.543911,0 124,13.4581695 124,30 C124,46.5445121 110.543911,60 93.9986593,60 C77.4560896,60 64,46.5445121 64,30 C64,13.4581695 77.4560896,0 93.9986593,0 Z M280.221189,1 L306.861969,48.6978115 L306.867337,1 L314,1 L314,59 L304.472782,59 L278.127295,11.9166008 L278.127295,59 L271,59 L271,1 L280.221189,1 Z M167,1 L167,8.13008737 L150.102505,8.13008737 L150.102505,59 L142.900205,59 L142.900205,8.13008737 L126,8.13008737 L126,1 L167,1 Z M41.2720331,1 L51,1.00269454 L51,59 L43.830894,59 L43.8362639,11.9937282 L28.6200379,41.2618352 L22.5222701,41.2429733 L7.13420026,11.8724739 L7.13420026,59 L0,59 L0,1.00269454 L9.92129092,1.00269454 L25.5590712,31.7608827 L41.2720331,1 Z M186,1 L186,59 L179,59 L179,1 L186,1 Z M229,7.02002146 C216.330175,7.02002146 206.022703,17.3301752 206.022703,30.0000001 C206.022703,42.6698249 216.330175,52.9772972 229,52.9772972 C241.669825,52.9772972 251.979979,42.6698249 251.979979,30.0000001 C251.979979,17.3301752 241.669825,7.02002146 229,7.02002146 Z M93.9986593,7.02002146 C81.3282683,7.02002146 71.0203354,17.3301752 71.0203354,30.0000001 C71.0203354,42.6698249 81.3282683,52.9772972 93.9986593,52.9772972 C106.66905,52.9772972 116.979665,42.6698249 116.979665,30.0000001 C116.979665,17.3301752 106.66905,7.02002146 93.9986593,7.02002146 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                          ></path>
                          <path
                            d="M418,1.01694915 L418,60 L414,60 L414,1.01694915 L418,1.01694915 Z M379.758573,1.01694915 L379.758573,56.1936696 L404,56.1936696 L404,60 L376,60 L376,1.01694915 L379.758573,1.01694915 Z M472,1.01694915 L472,60 L465.470464,60 L433.752856,4.54086102 L433.755568,60 L430,60 L430,1.02242958 L436.220415,1.02242958 L468.236296,57.0186498 L468.244432,1.01694915 L472,1.01694915 Z M547.238,0 C556.999535,0 563.85746,5.93994837 564.043833,14.4884742 L564.043833,14.4884742 L559.984178,14.4884742 C559.808613,7.9643132 554.846812,3.77428558 547.238,3.77428558 C539.861474,3.77428558 535.094152,7.92355418 535.094152,14.344459 C535.094152,18.2518907 537.319803,21.4093564 541.536117,23.4690458 L541.536117,23.4690458 L543.502469,24.4282414 C547.316329,26.2841356 551.254438,28.202527 555.827286,30.6073094 C561.828984,33.7729269 565,38.7183551 565,44.908292 C565,53.5111633 557.326361,60 547.151566,60 C537.184751,60 530.186373,53.9595125 530,45.2642542 L530,45.2642542 L534.056955,45.2642542 C534.240625,51.837326 539.421207,56.2284315 547.065132,56.2284315 C555.365412,56.2284315 560.940345,51.6117928 560.940345,44.7425389 C560.940345,39.9329741 558.798424,36.6369275 553.993285,34.047371 C550.762849,32.3001674 547.767401,30.7975182 544.871893,29.346497 C542.940656,28.3818667 540.947292,27.381912 538.902607,26.3194601 C533.975922,23.7842489 531.037197,19.2138037 531.037197,14.0971876 C531.037197,10.1326933 532.638911,6.54589918 535.553326,3.99166704 C538.48665,1.41841402 542.638137,0 547.238,0 Z M349.511567,1.01694915 C362.964395,1.01694915 364.009194,12.2030118 364.009194,15.6366563 L364.009194,15.6366563 L364.009194,16.6396202 C364.009194,18.7606424 363.498942,25.9348492 356.943962,29.2150347 L356.943962,29.2150347 L356.223131,29.5794997 L356.976359,29.8754562 C363.9579,32.6103144 365,39.2337129 365,42.938651 L365,42.938651 L365,45.0322698 C365,46.5668594 364.576141,60 349.921927,60 L349.921927,60 L328,60 L328,1.01694915 Z M505.924627,1.01694915 C520.57884,1.01694915 521,14.45283 521,15.9846793 L521,15.9846793 L521,44.7828991 C521,46.3394114 520.586941,60 506.253996,60 L506.253996,60 L484,60 L484,1.01694915 Z M505.924627,4.82053932 L487.830939,4.82053932 L487.830939,56.19641 L506.089311,56.19641 C507.652462,56.19641 510.641082,55.930597 513.114045,54.1384155 C515.805692,52.1900346 517.171763,49.0139821 517.171763,44.6979486 L517.171763,44.6979486 L517.171763,16.2367905 C517.171763,5.93311685 509.304706,4.82053932 505.924627,4.82053932 L505.924627,4.82053932 Z M350.170305,31.4401897 L331.830939,31.4401897 L331.830939,56.1114591 L349.759942,56.1114591 C351.714559,56.1114591 354.546589,55.7716572 356.938564,54.1466364 C359.746298,52.2393606 361.169064,49.0879711 361.169064,44.7828989 L361.169064,44.7828989 L361.169064,43.0236016 C361.169064,38.6609822 359.894784,35.471228 357.378621,33.5447697 C355.556295,32.1471969 353.131924,31.4401897 350.170305,31.4401897 L350.170305,31.4401897 Z M349.346883,4.80409728 L331.830939,4.80409728 L331.830939,27.6365996 L349.840936,27.6365996 C352.840353,27.6365996 355.016346,27.033725 356.687487,25.7402852 C359.00387,23.950844 360.178258,20.8295982 360.178258,16.4724596 L360.178258,16.4724596 L360.178258,15.7188664 C360.178258,8.47889152 356.533602,4.80409728 349.346883,4.80409728 L349.346883,4.80409728 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                          ></path>
                        </g>
                      </svg> */}
                    </a>
                  </Link>
                </span>

                <nav>
                  <ul className="disclaimer-nav flex flex-wrap text-darkgrey">
                    <li className="text-sm  w-full lg:w-auto my-4 xl:my-0 font-medium">
                      ©2023 MotionBlinds
                    </li>

                    <li className="text-sm lg:ml-10 mr-4 lg:mr-0 lg:my-4 xl:my-0 relative font-medium">
                      <a
                        className="transition-opacity duration-200 hover:opacity-50"
                        href="/cookie-policy/"
                      >
                        Cookie policy
                      </a>
                    </li>

                    <li className="text-sm lg:ml-10 mr-4 lg:mr-0 lg:my-4 xl:my-0 relative font-medium">
                      <a
                        className="transition-opacity duration-200 hover:opacity-50"
                        href="/privacy-statement/"
                      >
                        Privacy statement
                      </a>
                    </li>

                    <li className="text-sm lg:ml-10 mr-4 lg:mr-0 lg:my-4 xl:my-0 relative font-medium">
                      <a
                        className="transition-opacity duration-200 hover:opacity-50"
                        href="/disclaimer/"
                      >
                        Disclaimer
                      </a>
                    </li>

                    <li className="text-sm lg:ml-10 mr-4 lg:mr-0 lg:my-4 xl:my-0 relative font-medium">
                      <a
                        className="transition-opacity duration-200 hover:opacity-50"
                        href="/terms-and-conditions/"
                      >
                        General terms and conditions
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </footer>
        <script
          defer
          src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
        ></script>
        {/* <script src="https://motionblinds.com/resources/motionblinds/dist/js/app.js"></script> */}
      </body>
    </html>
  );
}
