import React, { useState } from 'react'
import {GET_SCREEN_INDEX, TOTAL_SCREENS} from '../../../utilities/commonUtils'
import ScrollService from '../../../utilities/ScrollService'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Header.css'

export default function Header() {
  const [selectedScreen, setselectedScreen] = useState(0)
  const [showHeaderOptions, setshowHeaderOptions] = useState(false)

  const updatCurrentScreen = (currentScreen) =>{
    if(!currentScreen || !currentScreen.screenInView)
    return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
    if(screenIndex <0)
    return
  }

  let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updatCurrentScreen)

  const getHeaderOptions = ()=>{
    return( 
        TOTAL_SCREENS.map((screen, i)=>(
            <div key={screen.screen_name} className={getHeaderOptionsClass(i)}
            onClick={()=> switchScreen(i,screen)}>
                <span>{screen.screen_name}</span>
            </div>
        ))
    )
  }
  
  const getHeaderOptionsClass =(index)=>{
    let classes = "header-option";
    if(index < TOTAL_SCREENS.length-1)
    classes += "header-option-seperator";

    if(selectedScreen === index)
    classes += "selected-header-option";
    return
  }

  const switchScreen = (index, screen)=>{
    let screenComponent = document.getElementById(screen.screen_name)
    if(!screenComponent)
    return;

    screenComponent.scrollIntoView({behavior: 'smooth'})
    selectedScreen(index);
    setshowHeaderOptions(false);
  };

  return (
    <div>
        <div className='header-container' onClick={()=> setshowHeaderOptions(!showHeaderOptions)}>
            <div className='header-parent'>
                <div className='header-hamburger' onClick={()=> setshowHeaderOptions(!showHeaderOptions)}>
                    <FontAwesomeIcon className='header-hamburger-bars' icon={faBars}/>
                </div>
                <div className='header-logo'>
                    <span>Md. Ariful Islam~</span>
                </div>
                <div className={(showHeaderOptions)? "header-options show-hamburger-options": "header-options"}>
                    {getHeaderOptions()}
                </div>
            </div>
        </div>

    </div>
  )
}
