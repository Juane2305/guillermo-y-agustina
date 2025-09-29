import { Modal } from './Modal'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MiIconoGift from './DatosBancariosIcon';


const DatosBancarios = ({texto, claseContenedor, textSize, background}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className={`pt-20 flex flex-col justify-center items-center py-20 gap-y-5 ${claseContenedor}`} style={background} >
      <div data-aos= 'fade-up'>
        <MiIconoGift/>
      </div>
        <div className={`flex flex-col items-center justify-center`}>
          <p className={`text-center px-5 md:px-0 ${textSize}`} data-aos= 'fade-up'>{texto}</p>
        </div>
    </div>
  )
}

export default DatosBancarios