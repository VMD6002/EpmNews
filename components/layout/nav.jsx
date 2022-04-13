import { useState } from 'react';
import { default as Logo } from '../../public/logo.png';
import DropdownRender from '../dropdown';
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [Main] = useState([
      {name:"Home" ,link:"/"},
    ])
    const [GCC] = useState([
      {name: "Saudi",link: "filt/sa"},
      {name: "UAE",link: "filt/ae"},
      {name: "Oman",link: "filt/omn"},
      {name: "Qatar",link: "filt/qt"},
      {name: "Kuwait",link: "filt/kwa"},
    ])
    const [World] = useState([
      {name:"Sports" ,link:"filt/spo"},
      {name: "Health",link: "filt/hlth"}
    ])
    const [India] = useState([
      {name: "Kerala",link:"filt/kl"}
    ])
        return (
            <nav className="relative flex w-full flex-wrap items-center justify-between py-3 bg-logo1">
              <div className="container lg:px-0 px-4 max-w-4xl mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between" >
                  <Link href="/">
                    <a className="flex items-center text-base font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white hover:opacity-90">
                    <Image className = "h-8 rounded-lg object-cover" src={Logo} alt="logo" />
                    <b className="px-2" >EPM News</b>
                    </a>
                  </Link>
                  <button
                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" className={ "transition-opacity duration-500 " +
                        (navbarOpen ? "opacity-0" : "opacity-100")
                      }></path>
                      <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={ "transition-opacity duration-500 " +
                        (navbarOpen ? "opacity-100" : "opacity-0")
                      }/>
                    </svg>
                  </button>
                </div>
                <div
                  className={
                    "flex-grow items-center space-x-3.5 " +
                    (navbarOpen ? "flex" : "hidden")
                  }
                  id="example-navbar-danger"
                >
                  <ul className="flex flex-col my-auto list-none w-full">
                    {Main.map((det) => (
                      <li key="@">
                        <Link href={det.link}>                       
                          <a className=" px-3 py-2 flex items-center rounded-md text-xs uppercase font-bold leading-snug text-gray-100 hover:opacity-75 hover:bg-gray-300 hover:text-black">
                            <span className="ml-0">{det.name}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                    <div className="flex flex-col my-auto ml-1 w-full">
                        <li>
                          <DropdownRender name="GCC" link="/gcc" style={`bg-gray-300`}>
                            {GCC.map((det) => (
                              <li key="@" className="flex px-4 py-2 items-center text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                                <a href={`/${det.link}`}>{det.name}</a>
                              </li>
                            ))}
                          </DropdownRender>
                        </li>
                        <li>
                          <DropdownRender name="World" link="/wor" style={`bg-green-200`}>
                            {World.map((det) => (
                              <li key="@" className="flex w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                                <a href={`/${det.link}`}>{det.name}</a>
                              </li>
                            ))}
                          </DropdownRender>
                        </li>
                        <li>
                          <DropdownRender name="India" link="/in" style={`bg-green-200`}>
                            {India.map((det) => (
                              <li key="@" className="flex w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                                <a href={`/${det.link}`}>{det.name}</a>
                              </li>
                            ))}
                          </DropdownRender>
                        </li>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
        );
      }
 
export default Navbar;