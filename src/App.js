import React from 'react'
import { useState, useEffect } from 'react'

import { ThemeProvider } from 'styled-components'
import {BsFillMoonFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'

import { GlobalStyles } from './globalStyles'
import { lightTheme, darkTheme } from './Themes'

import Sidebar from './components/Sidebar'
import Searchbox from './components/Controler/Searchbox'
import Tweetwindow from './components/Controler/Tweetwindow/Tweetwindow'
import Controlbar from './components/Controler/Controlbar'




const App = () => {

  
  const [theme, settheme] = useState('light');
 

  // =========================================


  const themeToggler = () => {
    theme === 'light' ? settheme('dark') : settheme('light')
  }

// icons
  const icon = theme === "light" ? <BsFillMoonFill size={30} className="moon"/> : <BsFillSunFill size={30}/>;

  // ==========================================

  return (
    <div className='z-20'>
    <ThemeProvider theme={theme === 'light' ? lightTheme:darkTheme}>

    <>
    <GlobalStyles/>
    <div >

      <div >

          <button onClick={themeToggler} className="absolute top-8 right-0 h-16 w-16 animate-pulse cursor-pointer">{icon}
          
          </button>
          
            <Sidebar/>
    
              
            <Searchbox/>

            <Tweetwindow/>

            <Controlbar/>

      </div>

    </div>


    
    

    

    </>
    
    
    </ThemeProvider>

    

    </div>
    
  )
}

export default App

