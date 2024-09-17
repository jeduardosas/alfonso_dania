
import {useEffect } from "react";
import { useLocation, Navigate} from "react-router-dom";
import data from "../../data";
import CountDown from "/@/components/ContDown";
import Reservacion from '/@/components/Reservacion';
import TimeLine from "../components/TimeLine";
import Footer from "../components/Footer";
import '/@/styles/invitacion.css'
import '/@/styles/modal.css'


const Invitacion = () => {
  // D E ST R U C T U R A C I O N   D E   L A   D A T A   
  const {img_header} = data

  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pases = params.get("pases") || "";

  if (pases === "") {
    return <Navigate to="/notfound" />;
  }
  if(pases<0 || pases >10){
    return <Navigate to="/notfound" />
  }

  // D E T E C T A R   E L   S C R O L L 
  useEffect(()=>{
    const sectionDatos = document.querySelector('.datos');
    const sectionContador = document.querySelector('.contador');

    const handleScroll = ()=>{
      const rect = sectionDatos.getBoundingClientRect();
      console.log(rect.top)
      if(rect.top <= 715){
        sectionContador.style.position='fixed';
        sectionContador.style.top='0  '
      }else{
       console.log('aun nada')
      }
    }

    window.addEventListener('scroll',handleScroll);

    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])


  return (

    <>
      <section className="header">
          <img src={`./img/${img_header}`} alt="" />
      </section>
      <div className="centrar">
        
        <section className="contador">
          <p>Ya casi llega la fecha...</p>
          <CountDown />
          <div className="contador_frase">
            <p>Mi Vida te amo.</p>
            <p>Y no es para tanto, es para siempre</p>
          </div>
          <div className="contador_imagen">
            <img src="./img/back_.webp" alt="imagen_2" />
          </div>
        </section>
      </div>

      {/*W A V E  */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#A5A58D" fill-opacity="1" d="M0,192L1440,256L1440,320L0,320Z"></path>
      </svg>

      
      <section className="datos">
        <div className="datos_monograma">
          <p className="datos_monograma-a">A</p>
          <p className="datos_monograma-d">D</p>
        </div>
      </section>
          
          {/* <TimeLine />
          <div className="lugares">
            <Reservacion pases={pases} />
          </div> */}
          
          <div>
            <Footer />
          </div>
    </>
    
    
  );
};

export default Invitacion;
