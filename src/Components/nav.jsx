// import React from 'react';
// import { Link } from 'react-router-dom';

// const Nav = () => {
//   return (
//     <div className="bg-green-600 text-white py-3">
//       <div className="flex justify-between items-center px-6">
//         <div className='font-bold hover:scale-125 duration-100  hover:cursor-progress'>
//          Your Comapny brand
//         </div>
//         <ul className="flex space-x-6">
//         <li className='hover:font-bold italic hover:scale-200  duration-600'><Link to="/companyinfo">companyinfo</Link></li>
//         <li className=' hover:font-bold italic hover:scale-200  duration-600'><Link to="/Staffinfo">Staffinfo</Link></li>
//           <li className=' hover:font-bold italic hover:scale-200  duration-600'><Link to="/update">Change fields name</Link></li>
//           <li className=' hover:font-bold italic hover:scale-200  duration-600'> </li>
//           <li className=' hover:font-bold italic hover:scale-200  duration-600'><Link to="/logout">Logout</Link></li>

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarAvatar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <img
                src="https://png.pngtree.com/template/20191017/ourmid/pngtree-tow-truck-trailer-logo-transportation-image_320494.jpg"
                alt="WindUI logo"
                className="h-12 w-12 bg-emerald-500"
              />
              Weight Expert
            </a>

            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4 "
                  href="javascript:void(0)"
                >
                  <span>
                    {" "}
                    <Link to="/companyinfo">Companyinfo</Link>
                  </span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  href="javascript:void(0)"
                >
                  <span>
                    <Link to="/Staffinfo">Staffinfo</Link>
                  </span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  href="javascript:void(0)"
                >
                  <span>
                    <Link to="/update">Change fields name</Link>
                  </span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4 "
                  href="javascript:void(0)"
                >
                  <span>
                    {" "}
                    <Link to="/dashboard">Dashboard</Link>
                  </span>
                </a>
              </li>
            </ul>

            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              {/*        <!-- Avatar --> */}

              <Link
                to="/profile"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
              >
                <img
                  src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/326982413_898503244921110_4821672216268053397_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEjy2uAK_n-RyjaJNoevxb1r6EA4YOQiaKvoQDhg5CJouPgmz3qCjtUaN5hhpS8_QAKmx--PrZ7kYGASso4cW86&_nc_ohc=KUFVqhcfu7IQ7kNvgGeSB_P&_nc_ht=scontent.fkhi8-1.fna&oh=00_AYANh1mqLZy4DMjKM00E_STokAUewmN2jYl3PPGZDw0tsw&oe=667DB95E"
                  alt="Use name"
                  title="Mohsin"
                  width="40"
                  height="40"
                  className="max-w-full rounded-full"
                />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
