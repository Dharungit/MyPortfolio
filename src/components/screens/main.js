import React from 'react'
import lg from '../../assets/mylogo.png'
import '../../index.css'
function main() {


    return (
        <div className="header">
           <header className="m-5">
               <nav className="flex  justify-between items-center">
                   <div className="logo  w-14 "><img src={lg} alt="" /></div>
                    <div className="links  space-x-5 mr-3 ">
                       <a className="font-pop " href="#about">About</a>
                       <a className="font-pop " href="#works">Works</a>
                       <a className="font-pop " href="#contact">Contact</a>
                   </div>
               </nav>
            </header> 
        </div>
    )
}

export default main
