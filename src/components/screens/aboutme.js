import React, {useEffect} from "react";
import profile from "../../assets/profile-1.png";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Aboutme() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  return (
    <div className="mx-5 font-pop">
      <div className="about-continer">
        <h1 data-aos="fade-down" className="text-4xl font-semibold mb-10 about-title ">About me.</h1>
        <div className="circle-continer flex justify-center ">
          <div className="circle"></div>
          <img
            src={profile}
            alt=""
            data-aos="zoom-out-down"
            className="w-32 mb-5 profile-img rounded-full border-2 border-solid"
          />
        </div>
        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-center  font-semibold">
          Hi There! I'm <span className="text-red-600">Dharun</span>  R, I am a Software Engineer and a python
          enthusiastic developer with a good background in web development,
          machine learning and problem-solving mindset to solve the real-world
          problems.
        </p>
        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="mt-3 mb-20 h-32 text-center font-semibold">
          Currently, an <span className="text-red-600"> Undergraduate </span> majoring in Computer Science and
          Engineering at KPRIET, Coimbatore.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
