import React from 'react'
import Dropdown from './Dropdown'




const Searchbox = () => {

const style = {color: "white", size:'25'}

  return (
    
<div class="flex justify-center">

  <Dropdown/>

  <div class="mb-3 xl:w-96">
    <input type="search" class="form-control block mt-12 h-14 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-slate-50 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-400 rounded-r-full focus:outline-none"
      id="exampleSearch"
      placeholder="Type query"
    />
  </div>

  

</div>

  )
}

export default Searchbox