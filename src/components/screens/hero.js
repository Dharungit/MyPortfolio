import React from 'react'

function hero() {
    return (
        <>
          <div className="hero-continer font-pop my-40">
            <div className="hero-name">
                <h3 className="text-xl text-center tracking-in-expand ">Hi there! I'm</h3> 
                <h1 className="text-6xl font-extrabold mt-1 mb-3 text-center  tracking-in-expand-1  text-red-600 ">Dharun</h1>
                <h1 className="text-6xl font-extrabold text-center tracking-in-expand-2">Web Developer</h1>
            </div>
            <div className="social-links flex justify-center space-x-6 mt-5 tracking-in-expand-2">
                <a href="http://www.linkedin.com/in/dharun-r"><img src="https://img.icons8.com/ios-filled/500/000000/linkedin.png" width="30" alt="img"/></a>
                <a href="https://github.com/Dharungit"><img src="https://img.icons8.com/ios-glyphs/480/000000/github.png" width="30" alt="img"/></a>
                <a href="www.google.com"><img src="https://img.icons8.com/ios-glyphs/480/000000/instagram-new.png" width="30" alt="img"/></a>
            </div>
            </div>  
        </>
    )
}

export default hero
