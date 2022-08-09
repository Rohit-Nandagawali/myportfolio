import React from 'react';
import HomeIconWhite from "./../../assets/home_white.png"
import HomeIconBlack from "./../../assets/home_black.png"

import { useNavigate,useLocation  } from "react-router-dom";
import './GoHome.css'

// this component is only to teach you a programmatic navigation
// note : it could have been done easily just by using the link component
// but i have used the history object to represent it's usdage

const GoHome = () => {
    const navigation = useNavigate()
    const location = useLocation()
    const whiteBtn = location.pathname==='/'
        return (
            <button 
            className={`go-home-btn ${whiteBtn ? 'white-background': 'gradient-background'}`}
            onClick={()=>navigation("/")}>
                {/* for button in home page HomeIconBLack for other  HomeIconWhite*/}
                <img 
                className='home-icon'
                src={whiteBtn ? HomeIconBlack : HomeIconWhite} 
                alt="go-home" />
            </button>
        );

}
 
export default GoHome;


     
    
    

