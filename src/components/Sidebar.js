import React from 'react'
import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import {GoThreeBars} from 'react-icons/go';
import {ImCross} from 'react-icons/im'
import { AiFillHome } from "react-icons/ai";
import {MdPrivacyTip} from "react-icons/md"
import {IoIosPaper} from "react-icons/io"
import {CgProfile} from "react-icons/cg"

// pages
import Home from './Model/Home';
import Privacy from './Model/Privacy';
import Terms from './Model/Terms';
import About from './Model/About';

const Sidebar = () => {

const [showSidebar, setshowSidebar] = useState(true);



return (

<Router>
    
        <div className='font-sans font-semibold z-40'>
        
        {showSidebar ?(
            <button
                className=" duration-700 grid text-4xl text-black items-center cursor-pointer fixed left-14 top-12 z-10"
                onClick={() => setshowSidebar(!showSidebar)}
                >
                    <ImCross  size={25} />
            </button>
        ):(
            <button
                className="duration-700 fixed text-black z-30 flex items-center cursor-pointer left-14 top-12 "
                onClick={() => setshowSidebar(!showSidebar)}
            >
                <GoThreeBars size={35}/>
            </button>
        )}


        <div className={`overflow-hidden grid justify-center z-30 top-40 left-4  w-[5vw] bg-slate-50 pl-8 pr-8 pl-18 sm:mt-10 top-18s  text-black fixed h-half border-b-4 border-r-4 border-slate-450 rounded-full
                        ${showSidebar ? "translate-x-0 duration-700" : "--full duration-700 -left-24 "}`
                        }>
            
                        <ul className='grid justify-items-center sm:justify-items-center '>

                            <li className=" grid justify-items-center rounded-t-full cursor-pointer md:justify-items-center sm:justify-items-center  py-3 box-content h-16 w-32 hover:bg-sky-400 hover:text-white duration-700">
                                    <Link to={'/home'}>
                                        <AiFillHome size={28}  className="ml-2"/>
                                        <div className='relative py-1'>
                                            Home
                                        </div>
                                    </Link>
                            </li>
                            <li className="grid justify-items-center cursor-pointer md:justify-items-center sm:justify-items-center  py-3 box-content h-16 w-32  hover:bg-sky-400 hover:text-white duration-700">
                                <Link to={'/privacy'}>
                                    <MdPrivacyTip size={28} className="ml-3"/>
                                    <div className='relativepy-1'>
                                        Privacy
                                    </div>
                                </Link>
                            </li>
                            <li className="grid justify-items-center cursor-pointer md:justify-items-center sm:justify-items-center  py-3 box-content h-16 w-32  hover:bg-sky-400 hover:text-white duration-700">
                                <Link to={'/terms'}>
                                    <IoIosPaper size={28} className="ml-2"/>
                                    <div className='relativepy-1'>
                                        Terms
                                    </div>
                                </Link>
                            </li>
                            <li className="grid justify-items-center cursor-pointer rounded-b-full md:justify-items-center box-content h-16 w-32 sm:justify-items-center  py-3  hover:bg-sky-400 hover:text-white duration-700">
                                <Link to={'/About'}>
                                    <CgProfile size={28} className="ml-2"/>
                                    <div className='relative py-1'>
                                        About
                                    </div>
                                </Link>
                            </li>
                        </ul>
                       
                    
        </div>
    </div>
                    <Routes>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/privacy' element={<Privacy/>}/>
                        <Route path='/terms' element={<Terms/>}/>
                        <Route path='/About' element={<About/>}/>
                    </Routes>
   
</Router>
  )
 }


export default Sidebar