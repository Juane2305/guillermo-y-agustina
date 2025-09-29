import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ghost from '../assets/ghost.svg'
import boo from '../assets/boo.svg'
import net1 from '../assets/net1.svg'
import net2 from '../assets/net2.svg'

import dressCode from '../assets/dressCodeElegante.svg';

const DressCodeElegante = ({dressCodeText}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-[#171717] py-16 flex flex-col items-center justify-center border-y-4 border-y-gold">
      {/* Decoraciones de Halloween */}
      {/* Telaraña superior derecha */}
      <img
        src={net1}
        alt=""
        className="absolute top-0 right-0 w-32 lg:w-56 pointer-events-none select-none"
        style={{zIndex: 1}}
        aria-hidden="true"
      />
      {/* Telaraña inferior izquierda */}
      <img
        src={net2}
        alt=""
        className="absolute bottom-0 left-0 w-28 lg:w-56 pointer-events-none select-none"
        style={{zIndex: 1}}
        aria-hidden="true"
      />
      {/* Fantasma flotando a la izquierda */}
      <img
        src={ghost}
        alt=""
        className="absolute left-2 top-1/3 w-20 lg:w-40 animate-float pointer-events-none select-none"
        data-aos="fade-right"
        style={{zIndex: 2}}
        aria-hidden="true"
      />
      {/* Boo a la derecha */}
      <img
        src={boo}
        alt=""
        className="absolute right-4 bottom-35 w-20 sm:w-28 animate-bounce pointer-events-none select-none"
        data-aos="fade-left"
        style={{zIndex: 2}}
        aria-hidden="true"
      />
      <h3
        className="text-gold text-4xl font-serif tracking-widest mb-6"
        data-aos="fade-up"
      >
        Dress Code
      </h3>
      <img
        src={dressCode}
        alt="Dress Code"
        className="w-48 h-auto mb-6"
        data-aos="fade-up"
      />
      <p
        className="text-white text-5xl font-light tracking-wide font-eleganteTitle"
        data-aos="fade-up"
      >
        {dressCodeText}
      </p>
    </section>
  );
};

export default DressCodeElegante;