import React from 'react'
import {ImCross} from 'react-icons/im'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

const Home = () => {
    
  return (
   
          
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-white border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                    <span className="bg-white text-black  h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-red-500">
                        <Link to={'/'}>
                            <ImCross size={20}/>
                        </Link>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
               
                
              </div>
            </div>
          </div>


  )
}

export default Home