import React from 'react'
import { useState, useEffect } from 'react'


import {MdInvertColors} from 'react-icons/md'
import {ImSun} from 'react-icons/im'
import {MdFitScreen} from 'react-icons/md'
import {BsFillHeartFill} from 'react-icons/bs'
import {MdFormatSize} from 'react-icons/md'
import {FaQuoteLeft} from 'react-icons/fa'
import {MdContentCopy} from 'react-icons/md'
import {RiDownload2Fill} from 'react-icons/ri'

import {SketchPicker} from 'react-color'

import './style.css'


const Controlbar = () => {


// color picker
const [color, setColor] = useState('#ffff');





//stop refresh

  return (
    <div className='justify-center absolute inset-x-0 top-3/4 mt-20  text-black'>
      <div className='bg-white ml-auto mr-auto lg:rounded-full rounded-lg w-96 xl:w-2/4 lg:w-3/4 md:w-3/4 sm:w-4/4 shadow md:items-center md:justify-between md:dark:bg-slate-200'>
        <div className='grid lg:grid-cols-8 lg:grid-rows-1  gap-0 grid-cols-4 grid-rows-2'>


{/*=============================== Color Section=================================================== */}
        <div className='grid justify-items-center dropup'>
          <ul className='grid justify-items-center sm:justify-items-center '>

            <li className=" grid cursor-pointer py-3 justify-items-center border-box lg:rounded-l-full lg:w-32 w-[96px]  hover:text-white hover:bg-sky-400 duration-700  search dropbtn">
                    
                      <input className='bg-inherit rounded-full' 
                                     type="color" 
                                     value={color}
                                     color={color}
                                     onChange={(e) =>{
                                     setColor(e.target.value)
                                   }}
                      />

                        <div className='lg:relative py-1'>
                            Color                      
                        </div>
                    
            </li>
          </ul>
        </div>

{/*=============================== Card Section =================================================== */}
        <div className='grid justify-items-center card '>
          <ul className='grid justify-items-center sm:justify-items-center '>

            <li className=" grid cursor-pointer py-3 justify-items-center box-content  border-box lg:w-32 w-[96px]  hover:text-white hover:bg-sky-400 duration-700 search dropbtn">
                    
                        <ImSun size={28} className='ml-1 icon'/>
                        <div className='relative py-1'>
                            Card
                            
                            
                            
                        </div>
                    
            </li>
          </ul>
        </div>

{/*=============================== Format Section =================================================== */}
        <div className='grid justify-items-center format dropup'>
          <ul className='grid justify-items-center sm:justify-items-center '>

            <li className=" grid cursor-pointer py-3 justify-items-center box-content  border-box lg:w-32 w-[96px]  hover:text-white hover:bg-sky-400 duration-700 search dropbtn"
            aria-labelledby="dropdownMenuButton1u"
            >
                    
                        <MdFitScreen size={28} className='ml-0 icon'/>
                        <div className='relative py-1'>
                            Format
                            <a href="" className='flex content-center justify-center items-center text-xl dropup-content z-50 bg-slate-50 -left-8 mb-4 absolute text-black bottom-14 w-28 h-20 hidden border-box rounded-lg'>
                            <li className='content-center justify-center items-center py-2'>
                              1:1
                            </li>
                            <li className='content-center justify-center items-center'>
                              4:5
                            </li>
                           </a>
                            
                        </div>
                    
            </li>
          </ul>
        </div>


{/*=============================== Response Section =================================================== */}
        <div className='grid justify-items-center response'>
          <ul className='grid justify-items-center sm:justify-items-center '>

            <li className=" grid cursor-pointer py-3 justify-items-center box-content  border-box lg:w-32 lg:w-28  w-[96px]  hover:text-white hover:bg-sky-400 duration-700 search">
                    
                        <BsFillHeartFill size={28} className='ml-0 icon'/>
                        <div className='relative py-1'>
                            Response
                        </div>
                    
            </li>
          </ul>
        </div>


{/*=============================== Size Section =================================================== */}
        <div className='grid justify-items-center size dropup'>
          <ul className='grid justify-items-center sm:justify-items-center '>

            <li className=" grid cursor-pointer py-3 justify-items-center box-content  border-box lg:w-32 w-[96px]  hover:text-white hover:bg-sky-400 duration-700 search">
                    
                        <MdFormatSize size={28} className='icon'/>
                        <div className='relative py-1'>
                            Size
                            <a href="" className='flex content-center justify-center items-center dropup-content z-50 bg-slate-50 -left-10 mb-4 absolute text-black bottom-14 w-28 h-20 hidden border-box rounded-lg dropbtn'>
                            <li className='content-center justify-center items-center'>
                             q
                            </li>
            
                           </a>
                        </div>
                    
            </li>
          </ul>
        </div>


{/*=============================== Quote Section =================================================== */}
        <div className='grid justify-items-center quote'>
          <ul className='grid justify-items-center sm:justify-items-center '>

            <li className=" grid cursor-pointer py-3 justify-items-center box-content  border-box lg:w-32 w-[96px]  hover:text-white hover:bg-sky-400 duration-700 search">
                    
                        <FaQuoteLeft size={28} className='ml-1 icon'/>
                        <div className='relative py-1'>
                            Quote
                        </div>
                    
            </li>
          </ul>
        </div>

{/*=============================== Copy Section =================================================== */}
        <div className='grid justify-items-center copy '>
          <ul className='grid justify-items-center sm:justify-items-center '>

            <li className=" grid cursor-pointer py-3 justify-items-center box-content  border-box lg:w-32 w-[96px]  hover:text-white hover:bg-sky-400 duration-700 search">
                    
                        <MdContentCopy size={28} className='ml-1 icon'/>
                        <div className='relative py-1 '>
                            Copy
                        </div>
                    
            </li>
          </ul>
        </div>

{/*=============================== Download Section =================================================== */}
        <div className='grid justify-items-center '>
          <ul className='grid justify-items-center sm:justify-items-center '>

            <li className=" grid cursor-pointer py-3 justify-items-center box-content lg:rounded-r-full    border-box lg:w-32 w-[96px] text-white bg-sky-400 search download">
                    
                        <RiDownload2Fill size={28} className='ml-0 icon'/>
                        <div className='relative py-1 '>
                            Download
                        </div>
                    
            </li>
          </ul>
        </div>
        
       

        
        </div>

      </div>
    </div>
    
  )
}

export default Controlbar